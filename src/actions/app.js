import ActionTypes from './ActionTypes';

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

let id = 0;
const generateParticipant = () => {
  id += 1;
  const firstName = getRandomFrom(FIRST_NAMES);
  const lastName = getRandomFrom(LAST_NAMES);
  const emailProvider = getRandomFrom(EMAIL_PROVIDERS);
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${emailProvider}`;
  const phoneNumber = `${getRandomFrom(PHONE_OPERATOR_CODES)}${generateRandomPhoneNumber()}`;
  return {
    id,
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
