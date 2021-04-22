export type MessageState = "READ" | "UNREAD";

export type ChatStreamDirection = "IN" | "OUT";

export type ChatStream = {
  id: number;
  date: Date;
  direction: ChatStreamDirection;
  message: string;
  state: MessageState;
};

export type ChatState = "ARCHIVED" | "ACTIVE" | "CLEAN";

export type Chat = {
  id: number;
  state: ChatState;
  stream: ChatStream[];
};

export type Contact = number;
export type UserState = "ONLINE" | "OFFLINE";

export type User = {
  id: number;
  fullName: string;
  state: UserState;
  profilePic: string[];
  phone: string;
  contacts: Contact[];
  chats: Chat[];
};
