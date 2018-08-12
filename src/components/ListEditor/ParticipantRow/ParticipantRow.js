import React from 'react';
import { connect } from 'react-redux';
import { MdEdit, MdDelete } from 'react-icons/md';

import { LIST } from '../../../constants';
import { updateParticipant as updateParticipantAction } from '../../../actions';
import RowEditor from '../RowEditor';

import './ParticipantRow.css';

export class ParticipantRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  updateRow = (participant) => {
    const { updateParticipant } = this.props;
    updateParticipant(participant);
    this.toggleEdit();
  };

  toggleEdit = () => {
    this.setState(state => ({ editing: !state.editing }));
  };

  deleteRow = () => {
    // todo
  };

  render() {
    const { participant } = this.props;
    const { editing } = this.state;

    if (editing) {
      const { UPDATE, CANCEL } = LIST;
      return (
        <RowEditor
          participant={participant}
          actions={[CANCEL, UPDATE]}
          onCancel={this.toggleEdit}
          onSave={this.updateRow}
        />
      );
    }

    return (
      <div className="ParticipantRow-container">
        <div>{participant.name}</div>
        <div>{participant.email}</div>
        <div>{participant.phoneNumber}</div>
        <div className="ParticipantRow-actions">
          <MdEdit size="24px" color="#909090" onClick={this.toggleEdit} />
          <MdDelete size="24px" color="#909090" onClick={this.deleteRow} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = undefined;
const mapDispatchToProps = dispatch => ({
  updateParticipant: participant => dispatch(updateParticipantAction(participant))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParticipantRow);
