// TODO: Implement user related routes -> Export
import { Router } from 'express';

import {userData} from '../data/index.js'
import helpers from '../helpers.js';

// TODO: Import data functions
const router = Router();

// Login
router
    .route("/")
    .get(async(req, res)=>{
        try{ 
            return res.render("about",
            {
                title: "About" 
            })
        }catch(e){
            return res.status(404).json({ error: e.message });  
        }
        return 1
    })


router
    .route('/login')
    .get(async (req, res) => {
        try {
            return res.render("login", {
                title: "Login",
            })
        } catch (e) {
            return res.status(404).json({ error: e.message });
        }
    }).post(
        async (req, res) =>{
            //TODO Input Validation
            try{
                const user = await userData.loginUser(req.body.user, req.body.pass, req.body.confirmPass)
                return res.send(user)
            }catch(e){
                return res.send({error: e.message})
            }

        }
    )

// Registration
router
    .route('/register')
    .get(async (req, res) =>{
        try {
            return res.render("register", {
                title: "Register",
            })
        } catch (e) {
            return res.status(404).json({ error: e.message });
        }
    }).post(
        async (req, res) =>{
            //TODO Input Validation
            try{
                const user = await userData.registerUser(req.body.user, req.body.pass, req.body.confirmPass)
                if (user){
                    req.session.user = user
                    return res.send(user)
                }
            }catch(e){
                return res.send({error: e.message})
            }

        }
    )


// Registration
router
    .route('/about')
    .get(async (req, res) =>{
        try {
            return res.render("about", {
                title: "About",
            })
        } catch (e) {
            return res.status(404).json({ error: e.message });
        }
    });

// Create ranking / Delete user
router
    .route('/:userid') 
    .get(async (req, res) =>{
        try{
            // TODO: Fetch the album that user searched up once Submit button is pressed
            // Cont. Once name is fetched, query spotify api
            // Cont. Once album is found, then allow ranking -> get ranking
        }catch(e){
            // TODO: Revise later
            console.log(e)
            return res.status(404).json({ error: e.message });
        }
    })
    .post(async (req, res) =>{
        try{
            // TODO: Post album that was queried to database along with ranking to user/album collection
        }catch(e){
            // TODO: Revise later
            console.log(e)
            return res.status(404).json({ error: e.message });
        }
    })
    .put(async (req, res) =>{
        try{
            // TODO: "Delete" user account -> actually just update name to "Deleted User (some number)" and terminated to = true
        }catch(e){
            // TODO: Revise later
            console.log(e)
            return res.status(404).json({ error: e.message });
        }
    })

// Edit/Delete ranking
router
    .route('/:userid/:rankingid')
    .put(async (req, res) =>{
        try{
            // TODO: Edit ranking
        }catch(e){
            // TODO: Revise later
            console.log(e)
            return res.status(404).json({ error: e.message });
        }
    })
    .delete(async (req, res) =>{ //Deletes an individual review 
        try{
            // TODO: 
        }catch(e){
            // TODO: Revise later
            console.log(e)
            return res.status(404).json({ error: e.message });
        }
    })

// Comments
router
    .route('/:rankingid')
    .post(async (req, res) =>{
        try{
            // TODO: Input validation -> Post comment to ranking
        }catch(e){
            // TODO: Revise later
            console.log(e)
            return res.status(404).json({ error: e.message });
        }
    })

// Comments Cont.
router
    .route('/:commentid')
    .delete(async (req, res) =>{
        try{
            // TODO: Input validation -> Delete comment to ranking
        }catch(e){
            // TODO: Revise later
            console.log(e)
            return res.status(404).json({ error: e.message });
        }
    })

export default router;