import User from '../models/user.model.js';

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    // Get every users from the DB except the currenly logged in user
    // We don't want to load our profile in the users list on message dashboard
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select('-password');

    res.status(200).json(filteredUsers);
  } catch (err) {
    console.log('Error in getUsersForSidebar: ', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};
