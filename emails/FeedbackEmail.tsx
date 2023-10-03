
import { Html } from '@react-email/html';
import * as React from 'react';
import { Preview } from '@react-email/preview';
import { Body } from '@react-email/body';
import { Container } from '@react-email/container';
import { Heading } from '@react-email/heading';
import { Text } from '@react-email/text';
import { Hr } from '@react-email/hr';
import { Font } from '@react-email/font';

type EmailProps = {
  fromUsername?: string;
  message: string;
};

export default function Email({ message, fromUsername }: EmailProps) {
  const parsedUsername = fromUsername?.split('@')[0];

  return (
    <Html>
      <Font
        fontFamily="Roboto"
        fallbackFontFamily="Verdana"
        webFont={{
          url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
          format: 'woff2'
        }}
      />
      <Preview>
        You have received a new message from {parsedUsername || 'anonymous'}!
      </Preview>
      <Body
        style={{
          background: 'white',
          marginTop: 'auto',
          marginBottom: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <Container
          style={{
            border: '1px solid #eaeaea',
            borderRadius: '10px',
            marginTop: '40px',
            marginBottom: '40px',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '20px',
            width: '465px'
          }}
          className=""
        >
          <Heading
            style={{
              fontWeight: 'normal',
              fontSize: '24px',
              textAlign: 'center',
              marginRight: '0px',
              marginLeft: '0px',
              padding: '0px',
              marginTop: '30px',
              marginBottom: '30px',
              color: 'black'
            }}
          >
                New feedback from{' '}
                <strong style={{ color: 'black' }}>
                  {parsedUsername || 'anonymous'} 💬
                </strong>
          </Heading>
          <Text
            style={{
              lineHeight: '24px',
              fontSize: '14px',
              color: 'black'
            }}
          >
            {message || 'No message provided.'}
          </Text>

          <Hr
            style={{
              border: '1px solid #eaeaea',
              marginTop: '26px',
              marginBottom: '26px',
              marginLeft: '0px',
              marginRight: '0px',
              width: '100%'
            }}
          />
          <Text
            style={{
              lineHeight: '24px',
              fontSize: '12px',
              color: '#666666'
            }}
          >
            This email was sent by the Chato platform. If you have any
            questions, please contact us.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
