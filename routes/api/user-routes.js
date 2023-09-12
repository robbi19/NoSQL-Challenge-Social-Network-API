const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    addUser,
    addFriend,
    updateUser,
    removeUser,
    removeFriend
} = require('../../controllers/userController');

// /api/users area
router
    .route('/')
    .get(getAllUser)
    .post(addUser);

// /api/users/:userId area
router
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(removeUser);

// /api/users/:userId/friends/:friendId area
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)

module.exports = router;