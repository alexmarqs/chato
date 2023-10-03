const BASE_FEEDBACK_API_URL = '/api/feedback';

export const submitFeedback = async (data: {
  feedback: string;
  userEmail: string;
}) => {
  const response = await fetch(BASE_FEEDBACK_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return response.json();
};
