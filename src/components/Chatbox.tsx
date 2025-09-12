import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHighlight, setShowHighlight] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! Would you like to know more about me?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");

    // Simulate AI response (you can replace this with actual AI integration)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for your message! I'm currently working on integrating my AI assistant. In the meantime, feel free to check out my projects and experience above, or connect with me directly through the contact links!",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHighlight(false);
    }, 10000); // Hide highlight after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-0 right-0 z-[9999]">
      {/* Feature Highlight Popup */}
      {showHighlight && !isOpen && (
        <div className="absolute bottom-20 right-0 mb-4 mr-4 animate-fade-in">
          <div className="bg-primary text-primary-foreground p-4 rounded-lg shadow-lg max-w-64 relative">
            <button 
              onClick={() => setShowHighlight(false)}
              className="absolute top-1 right-2 text-primary-foreground/70 hover:text-primary-foreground"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2 mb-2">
              <Bot className="h-5 w-5" />
              <span className="font-semibold">AI Assistant</span>
              <Sparkles className="h-4 w-4 animate-pulse" />
            </div>
            <p className="text-sm">Chat with my AI assistant to learn more about me!</p>
            <div className="absolute bottom-0 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-primary transform translate-y-full"></div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowHighlight(false);
        }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-primary hover:bg-primary/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-pulse hover:animate-none group"
        aria-label="Open AI chat"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-primary-foreground" />
        ) : (
          <div className="relative">
            <MessageCircle className="h-7 w-7 text-primary-foreground" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-card border border-border rounded-xl shadow-2xl animate-scale-in">
          {/* Chat Header */}
          <div className="p-4 border-b border-border bg-primary/5 rounded-t-xl">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Aniket's AI Assistant</h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Online
                </p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-4 h-64 overflow-y-auto space-y-3 scroll-smooth">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg ${
                    message.isUser
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none border"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-border bg-muted/20 rounded-b-xl">
            <div className="flex gap-2">
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Aniket..."
                className="flex-1 border-primary/20 focus:border-primary"
              />
              <Button 
                onClick={handleSendMessage} 
                size="icon"
                className="bg-primary hover:bg-primary/90"
                disabled={!inputText.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;