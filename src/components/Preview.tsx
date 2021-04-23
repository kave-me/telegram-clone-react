import useBackend from "../store/useBackend";
import useApp from "../store/useApp";
import { ChatStream, User, UserState } from "../store/storeTypes";
import { IncomingMessage, OutgoingMessage } from "./Message";
import { HappyIcon } from "../assets/tsx-svg-icon/HappyIcon";
import { PaperClipIcon } from "../assets/tsx-svg-icon/PaperClipIcon";
import { MicrophoneIcon } from "../assets/tsx-svg-icon/MicrophoneIcon";
import { FullBookmarkIcon } from "../assets/tsx-svg-icon/FullBookmarkIcon";
import { EmptyBookmarkIcon } from "../assets/tsx-svg-icon/EmptyBookmarkIcon";
import { DotsIcon } from "../assets/tsx-svg-icon/DotsIcon";
import { PhoneIcon } from "../assets/tsx-svg-icon/PhoneIcon";
import { SearchIcon } from "../assets/tsx-svg-icon/SearchIcon";

function ActivePreviewHead(props: { fullName: string; userState: UserState }) {
  const setUserInfoModal = useApp((store) => store.setUserInfoModal);
  // TODO: handle bookmark
  const bookmarked = true;
  return (
    <div className="h-16 flex justify-between items-center px-3 bg-gray-800 flex-grow-0 border-b border-gray-600">
      <div onClick={() => setUserInfoModal(true)} className="cursor-pointer">
        <h5 className="text-gray-100 text-base drop-shadow-md">
          {props.fullName}
        </h5>
        <h6 className="mt-1 text-gray-500 text-sm">
          {props.userState === "ONLINE" ? "Online" : "Last seen recently"}
        </h6>
      </div>
      <div className="flex">
        <SearchIcon />
        <PhoneIcon />
        {bookmarked ? <EmptyBookmarkIcon /> : <FullBookmarkIcon />}
        <DotsIcon />
      </div>
    </div>
  );
}

function ActivePreviewCenter(props: { chatStream: ChatStream[] }) {
  return (
    <div className="bg-gray-900 flex-grow flex flex-col w-full h-full overflow-y-auto hover:overflow-x-hidden scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-600 scrollbar-thin scrollbar-thumb  ">
      {props.chatStream &&
        props.chatStream.map((m) =>
          m.direction === "IN" ? (
            <IncomingMessage key={m.id} message={m.message} date={m.date} />
          ) : (
            <OutgoingMessage key={m.id} message={m.message} date={m.date} />
          )
        )}
    </div>
  );
}

function ActivePreviewBottom() {
  return (
    <div className="h-14 w-full flex items-center bg-gray-800 flex-grow-0 border-t border-gray-700 ">
      <span className="mx-2">
        <PaperClipIcon size={8} />
      </span>
      <div className="h-12 w-full flex-grow-1">
        <input
          placeholder={"Write message..."}
          className="w-full h-full outline-none bg-gray-800 text-gray-50"
        />
      </div>
      <span className="ml-2">
        <HappyIcon size={8} />
      </span>
      <span className="mx-2">
        <MicrophoneIcon size={8} />
      </span>
    </div>
  );
}

function ActivePreview(props: { user: User }) {
  const TUID = useApp((store) => store.TUID);
  const getChatStream = useBackend((store) => store.getChatStream);
  let stream = getChatStream(props.user.id, TUID);

  return (
    <div className="w-full h-screen flex flex-col items-stretch">
      <ActivePreviewHead
        fullName={props.user.fullName}
        userState={props.user.state}
      />
      <ActivePreviewCenter chatStream={stream} />
      <ActivePreviewBottom />
    </div>
  );
}

function NothingToPreview() {
  return (
    <div className="w-full h-screen bg-gray-900 flex justify-center items-center">
      <p className="bg-gray-800 rounded-xl text-gray-200 text-sm py-1 px-3">
        {" "}
        Select a chat to start messaging{" "}
      </p>
    </div>
  );
}

export default function Preview() {
  const TUID = useApp((store) => store.TUID);
  const getUser = useBackend((store) => store.getUser);
  const user = getUser(TUID);

  return user === null ? <NothingToPreview /> : <ActivePreview user={user} />;
}
