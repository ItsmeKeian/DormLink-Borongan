export default function Messages() {
    return (
      <div className="flex h-[80vh] bg-white border rounded-xl overflow-hidden">
  
        {/* LEFT */}
        <div className="w-1/3 border-r">
  
          <div className="p-4 font-semibold border-b">
            Conversations
          </div>
  
          <Conversation name="Juan ↔ Maria" />
          <Conversation name="Kevin ↔ Landlord" />
          <Conversation name="Anna ↔ Owner" />
  
        </div>
  
  
  
        {/* RIGHT */}
        <div className="flex flex-col flex-1">
  
          <div className="p-4 font-semibold border-b">
            Juan ↔ Maria
          </div>
  
  
          <div className="overflow-auto flex-1 p-4 space-y-2">
  
            <Message text="Available pa?" />
            <Message text="Yes available" me />
            <Message text="Pwede visit?" />
  
          </div>
  
  
          <div className="p-4 text-gray-500 border-t">
            Admin view only
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