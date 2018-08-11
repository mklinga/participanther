import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import { LIST } from '../../../constants';

import RowEditor from '../RowEditor';

import './ParticipantRow.css';

export default class ParticipantRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  toggleEdit() {
    this.setState(state => ({ editing: !state.editing }));
  }

  deleteRow() {
    // todo
  }

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
