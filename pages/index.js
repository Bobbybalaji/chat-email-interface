import { Container, Card, Textarea, Button, Input } from "@nextui-org/react";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]); // Store messages in state
  const [message, setMessage] = useState(""); // Store the current message being typed

  // Function to send a message
  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: "user" }]);
      setMessage("");
    }
  };

  return (
    <Container>
      <Card css={{ p: "$6", mw: "600px", margin: "auto" }}>
        <div style={{ height: "400px", overflowY: "auto" }}>
          {messages.map((msg, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <div
                style={{
                  backgroundColor: msg.sender === "user" ? "#e1f5fe" : "#f1f1f1",
                  padding: "10px",
                  borderRadius: "8px",
                  textAlign: msg.sender === "user" ? "right" : "left",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
          <Textarea
            aria-label="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your email..."
            rows={1}
            css={{ flex: 1, marginRight: "10px" }}
          />
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </Card>
    </Container>
  );
}
