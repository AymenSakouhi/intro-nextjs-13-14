This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Stuff I learned,

NextJs does every component as SSR component, you can test that with console.log(process.argv) as in the beginning of the components

## Routing

Whenever we are working on routes that contains ID, rather use for example this way:
[id]/[title] as folders and then put the component page
which means that we end up with localhost:3000/hi/there and your params will be in a prop called {params} where you can get the params.id and params.title from it.
[...id] after whatever segment you put a folder like that, you will be able to chain routes and it will work.
if you are doing this:
[[...id]] means the original parent route needs to have no page.tsx and it will always go inside the id folder to get its page and visualize it

## Rendering
Statically or Dynamically
Statically ahead of time and the results are cached.
Dynamically with a param in it and i don't wanna cache it so I leave it dynamic.
