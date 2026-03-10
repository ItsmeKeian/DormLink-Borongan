// pages/Messages.jsx
export default function Messages() {
    return (
      <div className="flex h-screen">
  
        {/* Conversations */}
        <div className="w-1/3 border-r p-4">
          <h2 className="font-semibold mb-4">Conversations</h2>
        </div>
  
        {/* Chat */}
        <div className="flex-1 flex flex-col">
  
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="bg-blue-600 text-white p-3 rounded-xl w-fit mb-2">
              Hello, is this still available?
            </div>
  
            <div className="bg-gray-200 p-3 rounded-xl w-fit mb-2">
              Yes, available.
            </div>
          </div>
  
          <div className="p-4 border-t flex gap-3">
            <input 
              className="flex-1 border rounded-xl px-4 py-2"
              placeholder="Type message..."
            />
            <button className="bg-blue-900 text-white px-5 rounded-xl">
              Send
            </button>
          </div>
  
        </div>
      </div>
    );
  }