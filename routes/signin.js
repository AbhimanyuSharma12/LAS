var express=require('express');
var router=express.Router();

router.route('/')
	.post(function (req,res) {
		res.send(req.body);
	});
module.exports=router;