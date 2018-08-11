import React from 'react';
import { connect } from 'react-redux';

import ParticipantRow from './ParticipantRow';
import AddNew from './AddNew';
import { generatePeople as generatePeopleAction } from '../../actions';

import './ListEditor.css';

export class ListEditor extends React.PureComponent {
  componentDidMount() {
    const { generatePeople } = this.props;
    generatePeople();
  }

  render() {
    const { participants } = this.props;

    return (
      <div className="ListEditor">
        <h1>List of participants</h1>
        <AddNew />
        <div className="ListEditor-grid-header">
          <div>Name</div>
          <div>Email address</div>
          <div>Phone number</div>
        </div>
        {participants.map(participant => (
          <ParticipantRow key={participant.id} participant={participant} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  participants: state.app.participants
});

const mapDispatchToProps = dispatch => ({
  generatePeople: () => dispatch(generatePeopleAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListEditor);
