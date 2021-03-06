import * as actionTypes from 'duck/bookRegister/actionTypes';

const initState = {
  response: '',
  inputISBN: '',
  error: '',
  isLoading: '',
  isAdding: '',
};

const registerReducer = (state = initState, action: any) => {
  switch (action.type) {
    // Request GoogleBooksAPI for book data
    case actionTypes.BOOK_REQUEST_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.BOOK_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: action.payload.response,
        inputISBN: action.payload.inputISBN,
      };
    case actionTypes.BOOK_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    // Register fetched book data  with firestore
    case actionTypes.REGISTER_START:
      return {
        ...state,
        isAdding: true,
        showSnack: true,
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isAdding: false,
      };
    case actionTypes.REGISTER_FAIL:
      return {
        ...state,
        isAdding: false,
        error: action.payload,
      };
    // After Submition, clear fetched book data
    case actionTypes.CLEAR_BOOKDATA:
      return {
        ...state,
        isLoading: true,
        response: '',
        inputISBN: '',
      };
    case actionTypes.RELOAD_PAGE:
      return {
        ...state,
        isLoading: '',
        showSnack: false,
      };
    default:
      return state;
  }
};

export default registerReducer;
