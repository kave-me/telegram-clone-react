import { TickIcon } from "../assets/tsx-svg-icon/TickIcon";

export function IncomingMessage(props: { message: string; date: Date }) {
  return (
    <div className="break-words font-light text-sm bg-gray-800 max-w-lg rounded-md px-4 py-2 mr-auto my-2 ml-2 text-left">
      <p>{props.message}</p>
      <p className="text-gray-400 mt-4 text-right uppercase">
        {props.date.toLocaleTimeString()}
      </p>
    </div>
  );
}

export function OutgoingMessage(props: { message: string; date: Date }) {
  return (
    <div className="break-words font-light text-sm bg-blue-900 max-w-lg rounded-md px-4 py-2 my-2 ml-auto mr-4">
      <p>{props.message}</p>
      <div className="flex items-center justify-end text-right mt-2">
        <p className="text-gray-400 mr-1 uppercase">
          {props.date.toLocaleTimeString()}
        </p>
        <TickIcon />
      </div>
    </div>
  );
}
