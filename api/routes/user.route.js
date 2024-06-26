import express from 'express';
import { deleteUser, getUser, getUserListing, signout, test, updateUser } from '../controller/user.controller.js';
import { verifyTokrn } from '../utils/verifyUset.js';


const router= express.Router();

router.get('/test',test);
router.put('/update/:userId',verifyTokrn,updateUser);
router.post('/signout',signout);
router.delete('/delete/:userId',verifyTokrn,deleteUser);
router.get('/listings/:userId',verifyTokrn,getUserListing);
router.get('/:userId',verifyTokrn,getUser);


export default router;