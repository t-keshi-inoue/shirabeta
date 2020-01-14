import { connect } from 'react-redux';
import AddForm from 'components/AddBook/AddForm';
import getFormatData from 'duck/requestBook/selectors';
import bookAdd from 'duck/bookAdd/operations';
import { clearStateRequest } from 'duck/request/operations';
import * as action from 'duck/request/actions';

const mapStateToProps = state => {
  return {
    fetchedBook: getFormatData(state),
    isLoading: state.request.isLoading,
    isAdding: state.add.isAdding,
    error: state.request.error,
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmit: book => {
    dispatch(bookAdd(book));
  },
  setLoading: () => {
    dispatch(action.requestStart());
  },
  setClear: () => {
    dispatch(action.clearState());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
