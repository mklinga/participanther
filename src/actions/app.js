import ActionTypes from './ActionTypes';

let PARTICIPANT_ID = 0;
const getNextId = () => {
  PARTICIPANT_ID += 1;
  return PARTICIPANT_ID;
};

const FIRST_NAMES = [
  'Maria',
  'Markus',
  'Laura',
  'Teemu',
  'Johanna',
  'Rauno',
  'Stefania',
  'Roope',
  'Martha',
  'Tim',
  'Anna',
  'Tom',
  'Clemence',
  'Antonio',
  'Julia'
];
const LAST_NAMES = [
  'Huovinen',
  'Saari',
  'Kuusisto',
  'Koivula',
  'Vinha',
  'Lampinen',
  'Joki',
  'Sterling',
  'Archer',
  'Gumble',
  'Despirito',
  'Fernandéz'
];
const EMAIL_PROVIDERS = ['gmail.com', 'hotmail.com', 'suomi24.fi', 'gmx.com', 'protonmail.com'];
const PHONE_OPERATOR_CODES = ['050', '040', '044', '041'];

const generateRandomPhoneNumber = (digits = 7) => {
  const scale = 10 ** digits;
  const randomNumber = Math.floor(Math.random() * scale);
  return randomNumber.toString().padStart(digits, '0');
};

const getRandomFrom = array => array[Math.floor(Math.random() * array.length)];

const generateParticipant = () => {
  const firstName = getRandomFrom(FIRST_NAMES);
  const lastName = getRandomFrom(LAST_NAMES);
  const emailProvider = getRandomFrom(EMAIL_PROVIDERS);
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${emailProvider}`;
  const phoneNumber = `${getRandomFrom(PHONE_OPERATOR_CODES)}${generateRandomPhoneNumber()}`;
  return {
    id: getNextId(),
    name: `${firstName} ${lastName}`,
    email,
    phoneNumber
  };
};

export const generateParticipants = amount =>
  Array.from({ length: amount }).map(generateParticipant);

export const generatePeople = () => ({
  type: ActionTypes.GENERATE_PEOPLE,
  participants: generateParticipants(20)
});

export const updateParticipant = participant => ({
  type: ActionTypes.UPDATE_PARTICIPANT,
  participant
});

export const deleteParticipant = id => ({
  type: ActionTypes.DELETE_PARTICIPANT,
  id
});

export const addNewParticipant = participant => ({
  type: ActionTypes.ADD_NEW_PARTICIPANT,
  participant: {
    id: getNextId(),
    ...participant
  }
});
