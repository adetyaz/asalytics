![Coding Test (1).png](<https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0a694481-33d0-4022-b5ec-0b5370031009/Coding_Test_(1).png>)

- Create page with UI like the image above, you can also check the Figma board for the design [https://www.figma.com/file/LvSfu5VicspNx58c3EK2el/Untitled?node-id=1%3A1174](https://www.figma.com/file/LvSfu5VicspNx58c3EK2el/Untitled?node-id=1%3A1174)

- Connect to GraphQL server. API is located at [https://analytics-api.herokuapp.com/analytics](https://analytics-api.herokuapp.com/analytics)

- Explore API via GraphQL interface, and try to come up with query you should use to fetch needed data. You are to display all ASAs on the UI.

- Would be awesome if you use React (Nextjs), TypeScript and GraphQL client (React Query etc)

- Push your solution to Github, deploy on your favourite Hosting Provider (We use Netlify at ASAlytics) and send the links to hello@asalytics.ai.

# Bonus Points:

- Use Typescript
- Use Nextjs
- Structured code (Architectural)
- Add loading indicators when data are being fetched
- Frontend testing, it would be awesome to use Jest, React Testing Library etc

# Colors:

- #F2FBF6 (Page background-color)
- #B7BECC (Card border-color)
- #6FD791 (Available Label Background)
- #BC3131 - (Unavailable Label Background)
- #000000 - Black
- #FFFFFF - White

Font: Readex Pro, [https://fonts.google.com/betterspecimen/Readex+Pro?query=Readex+Pro](https://fonts.google.com/betterspecimen/Readex+Pro?query=Readex+Pro)

# Glossary

- ASA - Algorand Standard Asset on the Algorand Protocol

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
