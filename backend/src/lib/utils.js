import jwt from "jsonwebtoken"

export const generateToken =(userId , res)=>{
const token = jwt.sign({userId},process.env.JWT_SECRET, {
    expiresIn :"7d"
})

//send the jwt as cookies
res.cookie("jwt",token,{
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
  httpOnly: true, //prevent xxs aattacksm
  secure: process.env.NODE_ENV != "development",
  sameSite: "strict",
})

return token;
} 