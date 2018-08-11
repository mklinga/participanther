import React from 'react';

import { LIST } from '../../../constants';
import './RowEditor.css';

const validate = (participant) => {
  console.log(participant);
  return true;
};

export default class RowEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: validate(props.participant)
    };
  }

  onCancel = () => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    }
  };

  getActionButton = (action) => {
    const disabled = !this.state.isValid;
    const getClassName = extraClass =>
      `RowEditor-button ${extraClass} ${disabled ? 'disabled' : ''}`;

    switch (action) {
      case LIST.CREATE_NEW:
        return (
          <button type="button" className={getClassName()} disabled={disabled}>
            Add New
          </button>
        );
      case LIST.UPDATE:
        return (
          <button disabled={disabled} type="button" className={getClassName('button-primary')}>
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

  render() {
    const { participant, actions } = this.props;
    const { isValid } = this.state;

    return (
      <div className="RowEditor-container">
        <div>{participant.name}</div>
        <div>{participant.email}</div>
        <div>{participant.phoneNumber}</div>
        <div className="RowEditor-actions">
          {actions.map(action => (
            <span key={action}>{this.getActionButton(action)}</span>
          ))}
        </div>
      </div>
    );
  }
}
