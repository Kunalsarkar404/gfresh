const user = require("../../../Models/usertable");

const frontenduser = async (req, res) => {
    const userId = req.user.id;
    try {
        const userdetail = await user.findById(userId).select('-password -status -isAdmin');
        if (!userdetail) {
            return res.status(404).send({ error: 'user detail not found' });
        }
        res.status(200).send({ status: "successfully", data: userdetail });
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while fetching userdetail', servererror: error })
    }
}

module.exports = frontenduser