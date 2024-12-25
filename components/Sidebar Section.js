
const conversations = [
  { id: 1, name: "John Doe", lastMessage: "See you soon!" },
  { id: 2, name: "Jane Smith", lastMessage: "Let me know." },
];

<div>
  <h3>Conversations</h3>
  <ul>
    {conversations.map((conv) => (
      <li key={conv.id} style={{ padding: '10px', cursor: 'pointer' }}>
        <strong>{conv.name}</strong>
        <p style={{ fontSize: '0.8em', color: '#666' }}>{conv.lastMessage}</p>
      </li>
    ))}
  </ul>
</div>;
