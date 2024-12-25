import { Container, Card, Text, Button } from '@nextui-org/react';

export default function Home() {
  return (
    <Container css={{ padding: '20px' }}>
      <Card hoverable clickable css={{ mw: '400px' }}>
        <Card.Header>
          <Text h4>Email Conversation</Text>
        </Card.Header>
        <Card.Body>
          <Text>Here's your chat-style email interface.</Text>
        </Card.Body>
        <Card.Footer>
          <Button color="primary">Send Email</Button>
        </Card.Footer>
      </Card>
    </Container>
  );
}

