const router = require('express').Router()
const User = require('../models/Users')
const bcrypt = require("bcrypt")



//Update

router.put("/:id", async (req, res) => {

    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10); 
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set:req.body
            })
            res.status(200).json(updatedUser)
        }
        catch (err) {
            res.status(500).json(err)
        }
    } else {
        req.status(401).json("You Can update only your account")
    }


  
})

//Delete User 








module.exports = router;