# Smart Bookmark App

A simple bookmark manager that allows users to securely save and manage personal bookmarks with real-time updates.

## Problems & how it was solved 
The Only real problem was getting real time updates of bookmark added and deleted and was solved using 
supabase websockets (websockets = two way connection between two IP address initialized by http connection but upgrades connection into TCP) . these web sockets of supabase continously looks for any change for specified Table . if any change insertion or deletion or update in any element sends payload with new table data.

## other problem
As only google was authentication provider ...so skipped the registration part ...if user email is not present in database then create new user and login in.....solved this to avoid un-necessary registeration as google data was only data to be added into registration form.

## Features

* Google OAuth login
* Add and delete bookmarks (URL + title)
* User-private bookmarks 
* Real-time updates across browser tabs
* Deployed on Vercel

## Tech Stack

* Next.js
* Supabase 
* Prisma ORM
* Tailwind CSS
* Vercel (deployment)



## Setup

Install dependencies:
npm install

Generate Prisma client:
npx prisma generate

Run locally:
npm run dev

## Deployment

Environment variables were configured in Vercel and Supabase.
Google OAuth redirect URLs were added for both local and production environments.

---

This project demonstrates authentication, database security with RLS, realtime updates, and full-stack deployment using modern web tools.



