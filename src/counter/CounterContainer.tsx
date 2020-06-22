import { connect } from 'react-redux';

import {
  onRest, onIncrement, onDecrement, onIncrementIfOdd, onIncrementAsync, onIncrementThunk, onIncrementEpic,
} from './actionCreators';
import Counter from './Counter';

const mapStateToProps = (state /* , ownProps */) => ({
  counter: state['app-example-sub'].counter.counter, // our app id: 'app-example-sub'
});

const mapDispatchToProps = {
  onRest, onIncrement, onDecrement, onIncrementIfOdd, onIncrementAsync, onIncrementThunk, onIncrementEpic,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
