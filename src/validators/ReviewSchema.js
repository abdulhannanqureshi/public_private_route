export const ReviewSchema = {
    name: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum:25,
        minimum:3,
        message:"should be between 3 to 25 characters long."
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
    subject: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum:30,
        minimum:5,
        message:"should be between 5 to 30 characters long."
      },
    },
    message: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum:300,
        minimum:20,
        message:"should be between 20 to 300 characters long."
      },
    },
  };