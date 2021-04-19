function ActivePreview() {
  return null;
}

function NothingToPreview() {
  return <div className="w-full h-screen bg-gray-800 flex justify-center items-center">

    <p className="bg-gray-700 rounded-md text-gray-200 text-sm px-3"> Select a chat to start messaging </p>
    </div>;
}

export default function Preview() {
  let active:boolean= false;
  return active? <ActivePreview /> : <NothingToPreview/>
}
