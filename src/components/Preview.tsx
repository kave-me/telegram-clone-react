function ActivePreview() {
  return null;
}

function NothingToPreview() {
  return <div className="w-full h-screen bg-gray-800 flex justify-center items-center">

    <p className="bg-gray-700 rounded-xl text-gray-100 text-sm py-1 px-3"> Select a chat to start messaging </p>
    </div>;
}

export default function Preview() {
  let active:boolean= false;
  return active? <ActivePreview /> : <NothingToPreview/>
}
