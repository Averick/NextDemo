## Basics of Next

Next.js is a flexible React framework that gives you building blocks to create fast web applications.

User Interface - how users will consume and interact with your application.
Routing - how users navigate between different parts of your application.
Data Fetching - where your data lives and how to get it.
Rendering - when and where you render static or dynamic content.
Integrations - what third-party services you use (CMS, auth, payments, etc) and how you connect to them.
Infrastructure - where you deploy, store, and run your application code (Serverless, CDN, Edge, etc).
Performance - how to optimize your application for end-users.
Scalability - how your application adapts as your team, data, and traffic grow.
Support for SEO

## Different kinds of rendering

Server => server-side renders at runtime (uses getInitialProps or getServerSideProps)
Static => automatically rendered as static HTML (uses no initial props)
SSG => automatically generated as static HTML + JSON (uses getStaticProps)
ISR => incremental static regeneration (uses revalidate in getStaticProps)

Next combines server and frontend using react ui framework and Node. And additional to this, it adds some more features to it which
makes the development so much fun. Linke Link component, integration of routing and many more.

## Compiler

Next.js handles much of these code transformations and underlying infrastructure to make it easier for your application to go to production.

This is made possible because Next.js has a compiler written in Rust, a low-level programming language, and SWC, a platform that can be used for compilation, minification, bundling, and more.

## Some points about Rust

Rust can prove to be a great choice when you are developing an application where performance is crucial.
Go for Rust when your solution needs to process humongous amounts of data in a short time.
Use Rust when you want better control over resource allocation in threads.
Rust provides memory safety but comes with complexity, so choose it when memory safety is of prime importance.
Use Rust to rewrite sensitive parts of applications where the speed of the program is of the essence.

## Other good points to know points

In Next.js, JavaScript and CSS files are automatically minified for production.

Next.js has built-in support for code splitting. Each file inside your pages/ directory will be automatically code split into its own JavaScript bundle during the build step.

Any code shared between pages is also split into another bundle to avoid re-downloading the same code on further navigation.
After the initial page load, Next.js can start pre-loading the code of other pages users are likely to navigate to.

## Topics covered in demo

1- pages directory
2- built in routing in next using file names
3- dynamic page load
4- capturing of request parameters
5- static page generation
6- increamentol static page generation

## Future plans

## About thid demo app

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
