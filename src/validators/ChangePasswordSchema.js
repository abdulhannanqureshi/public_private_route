export const ChangePasswordSchema = {
    password: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum:20,
          minimum:8,
          message: 'must be between 8 to 20 characters long.'
        },
    },
    new_password: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum:20,
          minimum:8,
          message: 'must be between 8 to 20 characters long.'
        },
    },
    confirm_new_password: {
        presence: { allowEmpty: false, message: 'is required' },
        equality: "new_password",
        length: {
          maximum:20,
          minimum:8,
          message: 'must be between 8 to 20 characters long.'
        },
    },
};