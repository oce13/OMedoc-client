const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// Load User model
const User = require('./models/users')

module.exports = function (passport) {
    passport.use(
        new localStrategy({ usernameField: 'email' }, (email, password, done) => {
            //Match User
            User.findOne({ email: email })
                .then(user => {
                    if (!user) {
                        return done(null, false, { message: 'No user with that username' })
                    }

                    //Match password
                    try {
                        if (bcrypt.compare(password, user.password)) {

                            return done(null, user)
                        } else {
                            return done(null, false, { message: 'Password does not match' })
                        }
                    } catch (err) {
                        return (err)
                    }

                })
                .catch(err => console.log(err))
        })
    )

    passport.serializeUser(function(user, done){
        done(null, user.id)
    })

    passport.deserializeUser(function(id, done){
        User.findById(id, function(err,user){
            done(err,user)
        })
    })

}

// function initialize(passport, getUserByUsername, getUserById){

//     const authenticateUser= async (username, password, done) => {

//         const user = getUserByUsername(username)
//         if(user == null){
//             return done(null, false, {message: 'No user with that username'})
//         }

//         try {
//             if (await bcrypt.compare(password, user.password)){

//                 return done(null, user)
//             }else{
//                 return done(null, false, {message: 'Password does not match'})
//             }
//         } catch (err) {
//             return(err)
//         }
//     }
//     passport.use(new localStrategy({usernameField: 'username'}, authenticateUser))
//     passport.serializeUser((user, done)=> done(null, user.id))
//     passport.deserializeUser((id, done)=> {return done(null, getUserById(id)) })
// }

// module.exports = initialize