import { useState, useEffect, useRef } from "react";
import { Bot, Sparkles, Send, User } from "lucide-react";
import { Client } from "@gradio/client";

export default function About() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  
const scrollToBottom = () => {
  const el = messagesEndRef.current;
  if (el) {
    el.scrollTop = el.scrollHeight;
  }
};

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = { from: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const client = await Client.connect(import.meta.env.VITE_AI_TWIN_URL);
      const result = await client.predict("/chat", { 		
        message: input
      });
      console.log(result);
      setMessages(prev => [...prev, { from: "bot", text: result.data[0] }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { 
        from: "bot", 
        text: "Sorry, I'm having trouble connecting right now. Please try again later." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="text-center mb-6">
          <p className="text-lg text-muted-foreground">Talk to my AI twin to know more about me</p>
        </div>

        <div className="bg-card border border-border rounded-xl shadow-lg p-6 mx-auto flex flex-col max-h-[60vh]">
          <div className="flex items-center gap-2 mb-4">
            <Bot className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">AI Avatar</span>
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
          </div>

          {/* Scrollable message list */}
          <div className="space-y-4 flex-1 overflow-y-auto pr-2" ref={messagesEndRef}>
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 ${
                  m.from === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                {m.from === "bot" ? (
                  <>
                    {/* Bot Avatar - Left */}
                    <img
                      src="/my-photo.jpg"
                      alt="Aniket"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    {/* Bot Message */}
                    <div className="max-w-[75%] p-3 rounded-2xl text-sm bg-muted text-foreground rounded-bl-none">
                      {m.text}
                    </div>
                  </>
                ) : (
                  <>
                    {/* User Message */}
                    <div className="max-w-[75%] p-3 rounded-2xl text-sm bg-primary text-primary-foreground rounded-br-none">
                      {m.text}
                    </div>
                    {/* User Avatar - Right */}
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <User className="h-4 w-4 text-foreground/60" />
                    </div>
                  </>
                )}
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 justify-start animate-fade-in">
                <img
                  src="/my-photo.jpg"
                  alt="Aniket"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="bg-muted text-foreground rounded-2xl rounded-bl-none p-3 flex items-center gap-1">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  </div>
                  {/* <span className="text-xs text-muted-foreground ml-2">...</span> Thinking Text*/}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input bar */}
          <div className="flex gap-2 items-center mt-4">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Curious about my professional journey? Go ahead and ask!"
              className="flex-1 border border-border rounded-full px-4 py-2 text-sm bg-background text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  sendMessage();
                }
              }}
            />
            <button
              onClick={sendMessage}
              title="Send"
              disabled={isLoading || !input.trim()}
              className="bg-primary text-primary-foreground p-3 rounded-full hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
