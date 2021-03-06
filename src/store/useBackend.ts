import create, { State } from "zustand";
import { Chat, ChatStream, User } from "./storeTypes";
import { getRndUserList } from "../utils/randomData";

interface BackendStore extends State {
  data: User[];
  getChatList: (id: number) => Chat[];
  getChatStream: (cuid: number, tuid: number) => ChatStream[];
  getAvatar: (id: number) => string;
  getUser: (id: number) => User | null;
  getUsername: (id: number) => string;
  getLastMessage: (current_id: number, target_id: number) => ChatStream;
  getUnreadMessageCount: (current_id: number, target_id: number) => number;
  sendMessage: (current_id: number, target_id: number, message: string) => void;
}
const useBackend = create<BackendStore>((set, get) => ({
  data: getRndUserList(),
  newState: false,
  getChatList(id) {
    const [result] = get()
      .data.filter((user) => user.id === id)
      .map((user) => user.chats);
    return result;
  },
  getAvatar(id) {
    const [Avatar] = get()
      .data.filter((user) => user.id === id)
      .map((user) => user.profilePic[0]);
    return `${Avatar},${id}`;
  },
  getUser(id) {
    if (id < 0) {
      return null;
    }
    const [user] = get().data.filter((user) => user.id === id);
    return user;
  },
  getUsername(id) {
    const [fullName] = get()
      .data.filter((user) => user.id === id)
      .map((user) => user.fullName);
    return fullName;
  },
  getLastMessage(cid, tid) {
    const [user] = get().data.filter((user) => user.id === cid);
    const [lastMessage] = user.chats
      .filter((chat) => chat.id === tid)
      .map((m) => m.stream[0]);
    return lastMessage;
  },
  getChatStream(cid, tid) {
    const [user] = get().data.filter((user) => user.id === cid);
    const [chatStream] = user.chats
      .filter((chat) => chat.id === tid)
      .map((m) => m.stream);
    return chatStream;
  },

  getUnreadMessageCount(cid, tid) {
    const [user] = get().data.filter((user) => user.id === cid);
    const [chatStream] = user.chats
      .filter((chat) => chat.id === tid)
      .map((m) => m.stream);
    const totalUnreadMessages = chatStream.filter(
      (chat) => chat.state === "UNREAD"
    );
    return totalUnreadMessages.length;
  },
  sendMessage(cid, tid, msg) {
    const [currentUser] = get().data.filter((user) => user.id === cid);
    const otherUsers = get().data.filter((user) => user.id !== cid);

    const [currentChat] = currentUser.chats.filter((chat) => chat.id === tid);
    const otherChats = currentUser.chats.filter((chat) => chat.id !== tid);

    const newMessage: ChatStream = {
      id: 1,
      date: new Date(),
      direction: "OUT",
      message: msg,
      state: "READ",
    };

    const updatedUser: User = {
      ...currentUser,
      chats: [
        ...otherChats,
        {
          ...currentChat,
          id: tid,
          stream: [
            ...currentChat.stream,
            {
              ...newMessage,
              id: currentChat.stream.length,
            },
          ],
        },
      ],
    };
    console.dir(updatedUser);

    set(() => [...otherUsers, updatedUser]);

    const state = get();
    set(() => ({ ...state, newState: true }));
  },
}));

export default useBackend;
