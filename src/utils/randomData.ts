import {
  Chat,
  ChatState,
  ChatStream,
  ChatStreamDirection,
  Contact,
  MessageState,
  User,
  UserState,
} from "../store/storeTypes";

export function getRndDirection(): ChatStreamDirection {
  let random = Math.floor(Math.random() * 100) % 2;
  switch (random) {
    case 0:
      return "IN";
    default:
      return "OUT";
  }
}

export function getRndMessageState(): MessageState {
  let random = Math.floor(Math.random() * 100) % 2;
  switch (random) {
    case 0:
      return "READ";
    default:
      return "UNREAD";
  }
}

export function getRndMessage(): string {
  return Math.random().toString();
}

export function getRndRangedDate(
  start: any,
  end: any,
  startHour: any,
  endHour: any
): Date {
  let date: any = new Date(+start + Math.random() * (end - start));
  let hour: any = (startHour + Math.random() * (endHour - startHour)) | 0;
  date.setHours(hour);
  return date;
}

export function getRndUserState(): UserState {
  let random = Math.floor(Math.random() * 100) % 5;
  switch (random) {
    case 0:
      return "OFFLINE";
    default:
      return "ONLINE";
  }
}

function getRndProfilePictures() {
  const SMALL_PIC_URL =
    "https://source.unsplash.com/random/100x150/?face,profile";
  const MEDIUM_PIC_URL =
    "https://source.unsplash.com/random/700x900/?face,profile";

  let random = Math.floor(Math.random() * 20) + 2;

  return new Array(random)
    .fill(null)
    .map((item, i) => (i === 0 ? SMALL_PIC_URL : MEDIUM_PIC_URL));
}

function getRndPhone(): string {
  return (Math.random() * 1000).toString();
}

function getRndContactList() {
  let random = Math.floor(Math.random() * 20) + 5;
  return new Array(random).fill(null).map((item, i) => {
    const newContact: Contact = i;
    return newContact;
  });
}

function getRndChatState(): ChatState {
  let random = Math.floor(Math.random() * 100) % 5;
  switch (random) {
    case 0:
      return "ARCHIVED";
    case 1:
      return "CLEAN";
    default:
      return "ACTIVE";
  }
}

function getRndChatStream(): ChatStream[] {
  let random = Math.floor(Math.random() * 50) + 10;
  return new Array(random).fill(null).map((item, i) => ({
    id: i,
    date: getRndRangedDate(new Date(2020, 2, 2), new Date(2021, 1, 2), 0, 14),
    direction: getRndDirection(),
    message: getRndMessage(),
    state: getRndMessageState(),
  }));
}

function getRndChatList(): Chat[] {
  let random = Math.floor(Math.random() * 20) + 10;
  return new Array(random).fill(null).map((item, i) => ({
    id: i,
    state: getRndChatState(),
    stream: getRndChatStream(),
  }));
}

function getRndUserName() {
  const names = [
    "Kalle Neal",
    "Sierra Mays",
    "Jenny Hammond",
    "Kalie Herman",
    "Curtis Salazar",
    "Stella Roman",
    "Miriam Fernandez",
    "Alondra Huber",
    "Finnegan Holt",
    "Cyrus Crane",
    "Mateo Castro",
    "Kayleigh Dickerson",
  ];
  let random = Math.floor(Math.random() * 200) % 11;
  return names[random];
}

const getRndUser = (id: number): User => {
  const newUser: User = {
    id: id,
    fullName: getRndUserName(),
    state: getRndUserState(),
    profilePic: getRndProfilePictures(),
    phone: getRndPhone(),
    contacts: getRndContactList(),
    chats: getRndChatList(),
  };
  return newUser;
};

export function getRndUserList(): User[] {
  let random = Math.floor(Math.random() * 30) + 5;
  return new Array(random).fill(null).map((item, i) => getRndUser(i));
}
