import AWS from "aws-sdk";

const access_key = "AKIAZTHK5GLWKRPENMEQ";
const secret_key = "gai07F/tzfEmgPTOr2MMmF+IQpaqMYW6Lc8Nr4wd";

console.log(access_key, secret_key, process.env);
AWS.config.credentials = new AWS.Credentials(
	access_key, // Your access key ID
	secret_key // Your secret access key
);

// Define your service region.
AWS.config.region = "ap-south-1";

export default AWS;
