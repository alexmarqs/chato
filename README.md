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

## API health check

![API CHECK](https://api.checklyhq.com/v1/badges/checks/96e06094-a13c-42fb-b0be-ac1b472e2354?style=flat&theme=default)

## Run the project

First, run the development server:

```bash
pnpm dev
```


## Notes

To generate api key / secrets you can run the following command:

```bash
openssl rand -base64 32
```

## TODO

- [ ] Add API rate limit (upstash, also check clerk api routes protection)
- [ ] Add settings
