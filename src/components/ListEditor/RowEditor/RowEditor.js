import React from 'react';

import { LIST } from '../../../constants';
import './RowEditor.css';

const validate = participant =>
  !!(participant.name && participant.email && participant.phoneNumber);

export default class RowEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: validate(props.participant),
      participant: {
        name: '',
        email: '',
        phoneNumber: ''
      }
    };
  }

  componentDidMount() {
    const { participant } = this.props;
    this.setState({ participant, isValid: validate(participant) });
  }

  componentWillReceiveProps(nextProps) {
    const { participant } = nextProps;
    this.setState({ participant, isValid: validate(participant) });
  }

  onCancel = () => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    }
  };

  onSave = () => {
    const { onSave, participant: originalParticipant } = this.props;
    const { participant: modifiedParticipant } = this.state;
    if (onSave) {
      onSave({ ...originalParticipant, ...modifiedParticipant });
    }
  };

  getActionButton = (action) => {
    const { isValid } = this.state;
    const getClassName = extraClass =>
      `RowEditor-button ${extraClass} ${isValid ? '' : 'disabled'}`;

    switch (action) {
      case LIST.ADD_NEW:
        return (
          <button
            type="button"
            className={getClassName()}
            disabled={!isValid}
            onClick={this.onSave}
          >
            Add New
          </button>
        );
      case LIST.UPDATE:
        return (
          <button
            disabled={!isValid}
            type="button"
            className={getClassName('button-primary')}
            onClick={this.onSave}
          >
            Save
          </button>
        );
      case LIST.CANCEL:
        return (
          <button
            type="button"
            className="RowEditor-button button-primary-text"
            onClick={this.onCancel}
          >
            Cancel
          </button>
        );
      default:
        return null;
    }
  };

  changeValue = field => (event) => {
    const { participant } = this.state;
    const nextParticipant = {
      ...participant,
      [field]: event.target.value
    };

    this.setState({
      participant: nextParticipant,
      isValid: validate(nextParticipant)
    });
  };

  render() {
    const { actions } = this.props;
    const {
      participant: { name, email, phoneNumber }
    } = this.state;

    return (
      <div className="RowEditor-container">
        <div>
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={this.changeValue('name')}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="E-mail address"
            value={email}
            onChange={this.changeValue('email')}
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={this.changeValue('phoneNumber')}
          />
        </div>
        <div className="RowEditor-actions">
          {actions.map(action => (
            <span key={action}>{this.getActionButton(action)}</span>
          ))}
        </div>
      </div>
    );
  }
}
