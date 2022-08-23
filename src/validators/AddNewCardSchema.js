export const AddNewCardSchema = {
    // card_number: {
    //     presence: { allowEmpty: false, message: 'is required' },
    //     format: {
    //         pattern: /^(34|37|4|5[1-5]).*$/,
    //       },
    //     length: function(value, attributes, attributeName, options, constraints) {
    //         if (value) {
    //           // Amex
    //           if ((/^(34|37).*$/).test(value)) return {is: 15};
    //           // Visa, Mastercard
    //           if ((/^(4|5[1-5]).*$/).test(value)) return {is: 16};
    //         }
    //         // Unknown card, don't validate length
    //         return false;
    //       }
    // },
    card_number: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        minimum:17,
        message: 'must be between 14 to 16 characters long.'
      },
    },
    // expiry: {
    //   presence: { allowEmpty: false, message: 'is required' },
    //   length: {
    //     minimum:5,
    //     message: 'date is wrong.'
    //   },
    // },
    expiry_month:{
      presence: { allowEmpty: false, message: 'is required' },
    },
    expiry_year:{
      presence: { allowEmpty: false, message: 'is required' },
    },
    cvv: {
      presence: { allowEmpty: false, message: 'or cvc is required' },
      length: {
        minimum:3,
        maximum:4,
        message: 'must be either 3 or 4 characters long.'
    },
  },

};