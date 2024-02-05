import { useEffect } from 'react';
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../zustand/useConversation';

import notificationSound from '../assets/sounds/notification.mp3';

const useListenMessages = () => {
  // Return online users as well as the sockets
  const { socket } = useSocketContext();
  // From zustand global state
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on('newMessage', (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
    });

    // important so that we're not listening for this event more than once
    return () => socket?.off('newMessage');
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
