import useBackend from "../store/useBackend";
import useApp from "../store/useApp";

function ChatCard(props: { id: number; click: () => void }) {
  const CUID = useApp((store) => store.CUID);
  const TUID = useApp((store) => store.TUID);
  const getAvatar = useBackend((store) => store.getAvatar);
  const getUsername = useBackend((store) => store.getUsername);
  const getLastMessage = useBackend((store) => store.getLastMessage);
  const getUnreadMessageCount = useBackend(
    (store) => store.getUnreadMessageCount
  );

  return (
    <div
      onClick={() => props.click()}
      className={`${"h-18 w-full p-4 flex hover:bg-gray-700 cursor-pointer"} ${
        props.id === TUID ? "bg-gray-700" : ""
      }`}>
      <img
        className="w-16 h-14 rounded-full object-cover shadow-md"
        src={getAvatar(props.id)}
        alt="Profile"
      />
      <div className="w-full flex flex-col justify-center pl-4">
        <div className="w-full flex justify-between">
          <h5 className="mb-2 font-semibold text-base  drop-shadow-md">
            {getUsername(props.id)}
          </h5>
          <p className="text-xs">
            {getLastMessage(CUID, props.id).date.toLocaleDateString()}
          </p>
        </div>

        <div className="flex justify-between">
          <h6 className="text-sm text-gray-400">
            {getLastMessage(CUID, props.id).message}
          </h6>
          <p className="text-xs bg-gray-600 rounded-2xl p-1 h-6 min-w-6 max-w-10 overflow-hidden">
            {getUnreadMessageCount(CUID, props.id)}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ChatList() {
  const setTargetUser = useApp((store) => store.setTargetUser);
  const CUID = useApp((store) => store.CUID);
  const CUser = useBackend((store) => store.getUser(CUID));
  return (
    <div className="w-full h-full overflow-y-auto hover:overflow-x-hidden scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-600 scrollbar-thin scrollbar-thumb">
      <div>
        {CUser &&
          CUser.chats.map((chat) => (
            <ChatCard
              click={() => setTargetUser(chat.id)}
              key={chat.id}
              id={chat.id}
            />
          ))}
      </div>
    </div>
  );
}
