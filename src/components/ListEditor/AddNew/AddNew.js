import React from 'react';
import { connect } from 'react-redux';

import { LIST } from '../../../constants';
import { addNewParticipant as addNewParticipantAction } from '../../../actions';
import RowEditor from '../RowEditor';
import './AddNew.css';

export class AddNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      participant: {
        name: '',
        email: '',
        phoneNumber: ''
      }
    };
  }

  addNewRow = (participant) => {
    const { addNewParticipant } = this.props;
    addNewParticipant(participant);
    this.clearParticipant();
  };

  clearParticipant = () => {
    this.setState({
      participant: {
        name: '',
        email: '',
        phoneNumber: ''
      }
    });
  };

  render() {
    const { ADD_NEW } = LIST;
    const { participant } = this.state;

    return (
      <div className="AddNew-container">
        <RowEditor participant={participant} actions={[ADD_NEW]} onSave={this.addNewRow} />
      </div>
    );
  }
}

const mapStateToProps = undefined;
const mapDispatchToProps = dispatch => ({
  addNewParticipant: participant => dispatch(addNewParticipantAction(participant))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNew);
