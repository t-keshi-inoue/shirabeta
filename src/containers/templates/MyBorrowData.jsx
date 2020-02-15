import { connect } from 'react-redux';
import { myPageRequest, bookReturn } from 'duck/myPage/operations';
import MyBorrowData from 'components/templates/MyBorrowData';

const mapStateToProps = state => ({
  uid: state.firebase.auth.uid,
  isLoading: state.myPage.isLoading,
  borrowData: state.myPage.response,
});

const mapDispatchToProps = dispatch => ({
  onRequest: uid => {
    dispatch(myPageRequest(uid));
  },
  onReturn: (ISBN, uid) => {
    dispatch(bookReturn(ISBN, uid));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyBorrowData);