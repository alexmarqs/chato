# Chato. An AI Chat Bot.

This is a [Next.js](https://nextjs.org/) to play with AI.

Tech stack used:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PNPM](https://pnpm.io/)
- [Vercel](https://vercel.com/)
- [Upstash](https://upstash.com/)
- [Clerk](https://clerk.dev/)
- [Checkly](https://checklyhq.com/)
- [OpenAI](https://openai.com/)

## Run the project

First, run the development server:

```bash
pnpm dev
```

## API Monitoring

We are using Checkly to monitor our API. Check out our [Checkly dashboard](https://app.checklyhq.com/teams/10001/monitors) for more details. We have an health check for the API and a check for the API response time.

## Notes

To generate api key / secrets you can run the following command:

```bash
openssl rand -base64 32
```

## TODO

- [ ] Add API rate limit (upstash, also check clerk api routes protection)
- [ ] Add settings
