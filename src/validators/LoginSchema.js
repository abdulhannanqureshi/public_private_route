export const LoginSchema = {
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
          maximum:30,
          minimum:8,
          message:"should be between 8 to 30 characters long."
        },
      },
  };