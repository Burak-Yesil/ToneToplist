// Helper functions to validate types:
let isValidNumber = (number) => {
    return ((typeof number === 'number') && !isNaN(number) && isFinite(number));
}

let isValidString = (strVal, varName) => {
        if (!strVal) throw `Error: You must supply a ${varName}!`;
        if (typeof strVal !== 'string') throw `Error: ${varName} must be a string!`;
        strVal = strVal.trim();
        if (strVal.length === 0)
          throw `Error: ${varName} cannot be an empty string or string with just spaces`;
        if (!isNaN(strVal))
          throw `Error: ${strVal} is not a valid value for ${varName} as it only contains digits`;
        return strVal;
    }

let isValidArray = (arr) => {
    return (Array.isArray(arr));
}

let isValidObject = (obj) => {
    return ((typeof obj === 'object') && (!Array.isArray(obj)) && (obj !== null));
}

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
}


//source: https://stackoverflow.com/questions/5778020/check-whether-an-input-string-contains-a-number-in-javascript 
const includesNumber= (input) => {
    return /\d/.test(input);
}

export const validUser = (user) => {
if(typeof user !== 'string') return false;
    user=user.trim();
    if(user.length<5) return false;
    return true;
}

//https://stackoverflow.com/questions/12090077/javascript-regular-expression-password-validation-having-special-characters
export const validPassword = (password) => {
    if(typeof password !== 'string') return false;
    password=password.trim();
    if(password.length<8) return false;
    if(!/[A-Z]/.test(password)) return false;
    if(!/\d/.test(password)) return false;
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) return false;
    return true;
    
};

export const validAlbumId = (albumId) =>{
    albumId=albumId.trim();
    const spotifyIdCheck = /^[a-zA-Z0-9]+$/;
    if(spotifyIdCheck.test(albumId)=== false) throw new Error('invalid album id') ;
}

export const validRating= (rating) =>{
    rating=Number(rating);
    if(rating === NaN) throw new Error('invalid rating: rating must be a number');
    if(rating >5 || rating <1) throw new Error('invalid rating: must be a number between 1-5')
}

export const validComment= (comment)=>{
    if(typeof comment !== 'string') throw new Error('invalid comment: comment must be of type string');
    if(comment.trim().length==0) throw new Error('invalid comment: comment cannot be empty')
    comment=comment.trim();
    if(comment.length<5) throw new Error('invalid comment: comment must be at least 5 characters')
}

export const validReview= (review)=>{
    if(typeof review !== 'string') throw new Error('invalid review: review must be of type string');
    if(review.trim().length==0) throw new Error('invalid review: review cannot be empty')
    review=review.trim();
    if(review.length<5) throw new Error('invalid review: review must be at least 5 characters')
}

export const validReviewBool= (reviewBool) =>{
    if (typeof reviewBool !== 'boolean') throw new Error('review boolean should be of type boolean');
}

export const validComments = (comments) =>{
    if(!Array.isArray(comments)) throw new Error('comments should be stored in an array');
    for(i=0; i<comments.length; i++){
        validComment(comments[i]);
    }
}

export const validRankingsId= (id) =>{
    if (!id) throw new Error('Error: You must provide an id to search for');
    if (typeof id !== 'string') throw new Error('Error: id must be a string');
    id = id.trim();
    if (id.length === 0)
      throw new Error('Error: id cannot be an empty string or just spaces');
    if (!ObjectId.isValid(id)) throw new Error('Error: invalid object ID');
  }



export default {includesNumber, validUser, validPassword, isValidArray, isValidNumber, isValidObject, isValidString, titleCase, validAlbumId, validRating, validComments, validReview, validReviewBool, validRankingsId};