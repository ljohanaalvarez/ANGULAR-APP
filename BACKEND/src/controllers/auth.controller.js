import User from '../models/user'
import jwt from 'jsonwebtoken';
import config from '../config';

export const register = async (req, res) => { 
    const { name, email, password } = req.body;
    User.findOne({email}, async(err, user) => {
    if(err){
        return res.status(500).send('Error creating user')
    }else if(user){
        return res.status(400).send('The user already exists')
    }else{
        const newUser = new User({
            name, 
            email, 
            password: await User.encriptPassword(password)});
        const savedUser = await newUser.save();
        const token = jwt.sign({id: savedUser._id, name: savedUser.name}, `${config.secretKey}`, {
            expiresIn: 43200
        });
        return res.status(201).json({savedUser})
    }
}) }

export const login = async (req, res) => {
    const { email, password } = req.body;
    const receivedPassword = password;
    User.findOne({email}, async (err, user) => {
        if(err){
            return res.status(500).send('Error authenticating user')
        }else if(!user){
            return res.status(401).send('Is not authorized, user do not exists :(')
        }else{ console.log(user, receivedPassword)
            
            const correctPassword = await User.comparePassword(receivedPassword, user.password)
            console.log('correctPassword, ', correctPassword)  
            if(correctPassword){
                const token = jwt.sign({_id: user._id, name: user.name}, `${config.secretKey}`);
            return res.status(200).json({token, user}) 
            }else{
                return res.status(401).send('Is not authorized, wrong password :(')
            }
        }
    })
}