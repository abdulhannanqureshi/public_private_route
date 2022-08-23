export const SignupSchema = {
    first_name: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum:25,
          minimum:3,
          message:"should be between 3 to 25 characters long."
        },
        
    },
    last_name: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum:20,
          minimum:3,
          message:"should be between 3 to 20 characters long."
        },
    },
    email: {
      presence: { allowEmpty: false, message: 'is required' },
      email: {message: 'is not valid'},
      length: {
        maximum:30,
        message:"should not be more than 30 characters long."
      },
    },
    password: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum:20,
          minimum:8,
          message:"should be between 8 to 20 characters long."
        },
    },
    confirm_password: {
        presence: { allowEmpty: false, message: 'is required' },
        equality: "password",
        length: {
          maximum:20,
          minimum:8,
          message:"should be between 8 to 20 characters long."
        },
    },
};