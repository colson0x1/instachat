import { createContext, useContext, useEffect, useState } from 'react';
import { useAuthContext } from './AuthContext';
import io from 'socket.io-client';

export const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io('https://instachat-c2ac.onrender.com', {
        query: {
          userId: authUser._id,
        },
      });

      setSocket(socket);

      // socket.on() listens to the events (can be used both on client & server side)
      // once socket is connected, see who is online and who is offline
      // and set online users to the state
      socket.on('getOnlineUsers', (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
