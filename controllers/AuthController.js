const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
// Signup Controller
exports.signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;
     
    if (!firstName ||!lastName ||!email ||!password ||!role) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }
  	// Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({
              success: false,
              message: "User already exists. Please sign in to continue.",
          });
      }
      
      	// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user

   const user = await User.create({
			firstName,
			lastName,
			email,
			password: hashedPassword,
            role
		});
   

        return res.status(200).json({
			success: true,
			user,
			message: "User registered successfully",
		}); 
  } catch (error) {
    return res.status(500).json({
        success: false,
        message: "User cannot be registered. Please try again.",
    });
  }
};

// Login Controller
exports.login = async (req, res) => {
 
  try {
    const { email, password } = req.body;
     //validating... data
     if( !email || !password ){
        return res.status(403).json({
            success:false,
            message:"ALL FIELDS ARE REQUIRED",
        });
    }
    // Check if user exists
    const user = await User.findOne({ email });
    if(!user){
        return res.status(401).json({
            success:false,
            message:"user is not registered !!",
        });
    }

    // Validate password
    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ 
        success:false,
        message: "Password is incorrect" 
     });

    // Create JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    const options = {
        expires: new Date(Date.now() + 3*24*60*60*1000),
        httpOnly:true,
    }
    res.cookie("token", token, options).status(200).json({
        success:true,
        token,
        user,
        message:"LOGGED IN SUCCESSFULLY",
    });

   

   
  } catch (error) {
    return res.status(500).json({
        success:false,
        message:"user cannot LOGGED in, try again ",
    }) 
  }
};

