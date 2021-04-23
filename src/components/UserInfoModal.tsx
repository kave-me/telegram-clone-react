import React from "react";
import { UserState } from "../store/storeTypes";
import { PhoneIcon } from "../assets/tsx-svg-icon/PhoneIcon";
import { DotsIcon } from "../assets/tsx-svg-icon/DotsIcon";
import { CloseIcon } from "../assets/tsx-svg-icon/CloseIcon";
import useApp from "../store/useApp";
import useBackend from "../store/useBackend";
import { PhotoIcon } from "../assets/tsx-svg-icon/PhotoIcon";
import { DocumentIcon } from "../assets/tsx-svg-icon/DocumentIcon";
import { MicrophoneIcon } from "../assets/tsx-svg-icon/MicrophoneIcon";
import { GroupIcon } from "../assets/tsx-svg-icon/GroupIcon";
import { InfoIcon } from "../assets/tsx-svg-icon/InfoIcon";
import { BellIcon } from "../assets/tsx-svg-icon/BellIcon";

function Head(props: {
  profilePic: string;
  userName: string;
  userState: UserState;
}) {
  return (
    <div className="w-full flex flex-col p-6 bg-gray-800 mb-2">
      <div className="sticky flex justify-between">
        <h6 className="font-bold text-xl">User Info</h6>
        <div className="flex">
          <PhoneIcon />
          <DotsIcon />
          <span className="cursor-pointer">
            <CloseIcon />
          </span>
        </div>
      </div>
      <div className="w-full flex items-center pt-4">
        <img
          className="rounded-full w-20 h-20 object-cover"
          src={props.profilePic}
          alt={"profile"}
        />
        <div className="pl-4">
          <p className="text-xl mb-2">{props.userName}</p>
          <p className="text-sm text-gray-600 ">
            {props.userState === "ONLINE" ? "Online" : "last seen recently"}
          </p>
        </div>
      </div>
    </div>
  );
}

function UserInfo(props: { userId: number }) {
  const setTargetUser = useApp((store) => store.setTargetUser);
  const setUserInfoModal = useApp((store) => store.setUserInfoModal);

  const CUID = useApp((store) => store.CUID);

  const sendMsg = useBackend((store) => store.sendMessage);

  function setTUserAndToggleUserInfoModal() {
    setTargetUser(props.userId);
    setUserInfoModal(false);
    sendMsg(CUID, props.userId, "salam");
  }

  return (
    <div className="w-full  flex flex-col bg-gray-800 mb-2 divide-y divide-gray-900">
      <div className="flex p-6">
        <div className="w-1/6 h-full h-6 w-6 mr-2">
          <InfoIcon />
        </div>
        <div className="w-5/6 h-full ">
          <div className="mb-3">
            <p className="text-sm ">+989121111111</p>
            <p className="text-gray-600">Mobile</p>
          </div>
          <div className="mb-3">
            <p className="text-sm ">
              My phone number is so awesome isn't it? but that's not real 😅
              actually the username bellow is real, drop me a message in the
              real messenger 😍
            </p>
            <p className="text-gray-600">Bio</p>
          </div>
          <div className="mb-3">
            <p className="text-sm ">@kave_me</p>
            <p className="text-gray-600">Username</p>
          </div>
        </div>
      </div>

      <div className="flex p-6">
        <div className="w-1/6 h-full h-6 w-6 mr-2">
          <BellIcon />
        </div>
        <div className="w-5/6 flex flex-col">
          <div className="h-6 flex justify-between pt-2">
            <p className="text-sm ">Notifications</p>
            <div className="relative inline-block w-10  mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className="right-0 absolute block w-6 h-6 rounded-full bg-gray-900 border-4 border-blue-500 appearance-none cursor-pointer"
              />
              <label
                htmlFor="toggle"
                className="toggle-label mt-1 block overflow-hidden h-4 rounded-full bg-blue-500 cursor-pointer"></label>
            </div>
          </div>
          <p
            onClick={() => setTUserAndToggleUserInfoModal()}
            className="pt-8 text-blue-500 cursor-pointer">
            SEND MESSAGE
          </p>
        </div>
      </div>
    </div>
  );
}

function InCommon() {
  return (
    <div className="w-full flex justify-between p-6 bg-gray-800 mb-2">
      <div className="flex flex-col justify-center w-1/6">
        <PhotoIcon />
        <DocumentIcon />
        <MicrophoneIcon />
        <GroupIcon />
      </div>
      <div className="flex flex-col w-full justify-center items-start w-5/6">
        <h6 className="text-sm h-6 m-2">52 photos</h6>
        <h6 className="text-sm h-6 m-2 ">11 files</h6>
        <h6 className="text-sm h-6 m-2 ">3 voice messages</h6>
        <h6 className="text-sm h-6 m-2">2 groups in common</h6>
      </div>
    </div>
  );
}

function ListIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-500 m-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 10h16M4 14h16M4 18h16"
      />
    </svg>
  );
}

function Action() {
  return (
    <div className="w-full flex justify-between p-6 bg-gray-800">
      <div className="flex flex-col justify-start w-1/6">
        <ListIcon />
      </div>
      <div className="flex flex-col w-full justify-center items-start w-5/6">
        <h6 className="text-sm h-6 m-2">Share this contact</h6>
        <h6 className="text-sm h-6 m-2 ">Edit contact</h6>
        <h6 className="text-sm h-6 m-2 ">Delete contact</h6>
        <h6 className="text-sm h-6 m-2">Clear history</h6>
        <h6 className="text-sm h-6 m-2">Delete chat</h6>
        <h6 className="text-sm h-6 m-2 text-red-800">Block user</h6>
      </div>
    </div>
  );
}

export function UserInformationModal() {
  const setUserInfoModal = useApp((store) => store.setUserInfoModal);
  const TUID = useApp((store) => store.TUID);
  const getUser = useBackend((store) => store.getUser);
  const user = getUser(TUID);
  return (
    user && (
      <div
        onClick={() => setUserInfoModal(false)}
        className="z-10 fixed flex items-center justify-center w-full h-screen bg-black inset-0 bg-opacity-40 delay-75 ease-in-out transition-all duration-500 text-gray-100">
        <div className="z-20 w-2/5  h-4/5 max-h-4/5 min-h-min max-w-xl min-w-min  inset-0 rounded-sm bg-gray-700 overflow-y-auto  scrollbar-thin">
          <Head
            profilePic={user.profilePic[0]}
            userName={user.fullName}
            userState={user.state}
          />
          <UserInfo userId={user.id} />
          <InCommon />
          <Action />
        </div>
      </div>
    )
  );
}
