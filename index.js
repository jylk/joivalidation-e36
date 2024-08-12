const express = require("express");
const app = express();

const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('[a-zA-Z0-9]{3,30}$')),
    email: Joi.string().email({ minDomainSegments: 2, tlds: {allow: ['com' , 'net']}})
});

const data = {
    username: "john123",
    password: "123456",
    email: "john@example.com"
};


const result = schema.validate(data);

if(result.error)
{
    console.error(result.error.details);
}
else{
    console.log("Data is valid");
}



app.listen(5000, console.log("Listening to 5000"))