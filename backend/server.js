// Require db and password in a safe file
require('dotenv').config()

// Libraries we're using
const express = require('express')
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

// Passport config
require ('./passport-config')(passport)

// Load user model
const User = require('./models/users')


const app = express()

/*** Connect to DB ***/

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

//If error happen while trying to connect to db
db.on('error',(error)=> console.error(error))

//If connect to db succesful
db.once('open',()=> console.log('Connected to database'))

app.use(express.json())
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

app.listen(3000, () => console.log('Server Started'))

//Get nothing
app.get('/',checkAuthenticated, (req,res)=>{
    res.send("Salut bb")
})
app.get('/fail',(req,res)=>{
    res.send(false)
})

app.get('/sucess',(req,res)=>{
    res.send(true)
})

//Want to login
app.get('/login',(req,res)=>{
    res.send("Login bb")
})

//Check
app.post('/login',(req,res, next)=>{
    passport.authenticate('local', {
        successRedirect:'/sucess',
        failureRedirect:'/fail',
        failureFlash: true
    })(req, res, next)
})

//Want to register
app.get('/register',(req,res)=>{
    res.send("Register bb")
})

//Create a new user by registrting
app.post('/register',async (req,res)=>{
    
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber
    })

    try {
        const newUser = await user.save()
        //res.status(201).json(newUser)
        res.send(true)
    } catch (err) {
        //res.status(400).json({message: err.message})
        res.send(false)
    }
})

function checkAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/login')
}