export default function Messages() {
    return (
      <div className="flex h-[80vh] bg-white border rounded-xl overflow-hidden">
  
        {/* LEFT SIDE */}
        <div className="w-1/3 border-r">
  
          <div className="p-4 font-semibold border-b">
            Messages
          </div>
  
  
          <Conversation name="Juan" />
          <Conversation name="Maria" />
          <Conversation name="Kevin" />
  
        </div>
  
  
  
        {/* RIGHT SIDE */}
        <div className="flex flex-col flex-1">
  
          <div className="p-4 font-semibold border-b">
            Juan
          </div>
  
  
          <div className="overflow-auto flex-1 p-4 space-y-2">
  
            <Message text="Available pa po?" />
            <Message text="Yes available" me />
  
          </div>
  
  
          <div className="flex gap-2 p-4 border-t">
  
            <input
              className="flex-1 px-3 py-2 rounded-lg border"
              placeholder="Type message..."
            />
  
            <button className="px-4 py-2 text-white bg-blue-900 rounded-lg">
              Send
            </button>
  
          </div>
  
        </div>
  
      </div>
    );
  }
  
  
  
  function Conversation({ name }) {
    return (
      <div className="p-4 border-b cursor-pointer hover:bg-gray-100">
        {name}
      </div>
    );
  }
  
  
  
  function Message({ text, me }) {
    return (
      <div
        className={`max-w-xs px-3 py-2 rounded-lg
        ${
          me
            ? "ml-auto text-white bg-blue-900"
            : "bg-gray-200"
        }`}
      >
        {text}
      </div>
    );
  }