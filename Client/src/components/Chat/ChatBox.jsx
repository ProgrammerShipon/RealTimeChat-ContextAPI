import useAuth from "../../hooks/useAuth";
import useChat from "../../hooks/useChat";

const ChatBox = () => {
  const { user } = useAuth();
  const { currentChat, messages, isMessagesLoading, isMessagesError } =
    useChat();
  // const { recipientUser, recipientError } = useFetchRecipient(
  //   currentChat,
  //   user
  // );
  // console.log(recipientUser, recipientError);

  if (!currentChat) {
    return (
      <p className="text-center my-3"> No conversation selected yet... </p>
    );
  }

  const sendHandle = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div className="flex flex-col justify-between h-full">
      {/* head line part */}
      <div className="flex items-center justify-between shadow-md shadow-slate-950 py-2 px-4 border border-slate-700">
        <div className="flex items-center">
          <figure className="w-10 h-10 bg-slate-500 flex justify-center items-center rounded-full mr-2">
            <h1> {currentChat?.name?.slice(0, 1)}</h1>
          </figure>
          <div>
            <h3 className="text-xl">{currentChat?.name}</h3>
            <p className="text-sm"> typing or online </p>
          </div>
        </div>

        <button> I </button>
      </div>

      {/* Body */}
      <div className="text-center"> No Conversation </div>

      {/* input part */}
      <div>
        <form className="flex gap-3" onSubmit={sendHandle}>
          <div className="flex-1">
            <textarea
              className="w-full outline-none py-1 px-3 rounded-md text-slate-800"
              placeholder="message typing here..."
            />
          </div>

          <div>
            <button className="text-2xl">🙂</button>
          </div>

          <button className="bg-blue-600 py-1 px-3 rounded-md shadow-lg">
            {" "}
            Send{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
