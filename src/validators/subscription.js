export const SuscriptionSchema = {
    email: {
      presence: { allowEmpty: false, message: 'is required' },
      email: {message: 'is not valid'},
      length: {
        maximum:30,
        message:"should not be more than 30 characters long."
      },
    },
  };