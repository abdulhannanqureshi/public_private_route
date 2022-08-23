export const AddCourseSchema = {
    title: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum:25,
        minimum:5,
        message: 'must be between 5 to 25 characters long.'
      },
    },
    sub_title: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum:25,
          minimum:5,
          message: 'must be between 5 to 25 characters long.'
        },
      },
    category: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum:20,
            minimum:5,
            message: 'must be between 5 to 20 characters long.'
        },
       
    },
    sub_category: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum:20,
            minimum:5,
            message: 'must be between 5 to 20 characters long.'
        },
    },
    level: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum:20,
            minimum:5,
            message: 'must be between 5 to 20 characters long.'
        },
    },
    price: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    learning_objectives: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum:30,
            message: 'between 3 to 30 characters long.'
        },
    },
    courseImage: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    details: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum:300,
            minimum:20,
            message: 'must be between 20 to 300 characters long.'
        },
    },
    objective1: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum:20,
            minimum:5,
            message: 'must be between 5 to 20 characters long.'
        },
    },
    objective2: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum:20,
            minimum:5,
            message: 'must be between 5 to 20 characters long.'
        },
    },
    objective3: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum:20,
            minimum:5,
            message: 'must be between 5 to 20 characters long.'
        },
    },
    
};