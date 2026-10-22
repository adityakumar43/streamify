import User from "../models/User";

export async function getRecommendedUsers (req, res){
    try {
        const currentUserId = req.user._id;
        const currentUser = req.user;

        const recommendedUser = await User.find({
            $and: [
                {_id: {$ne: currentUser}},  //exclude current user
                {_id: {$nin: currentUser.friends}},  //exclude current user's friends
                {isOnboarded: true}
            ]
        })
        
        res.status(200).json(recommendedUser);
    } catch (error) {
        console.error("Error in getRecommendedUsers controller", error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function getMyFriends (req, res){}