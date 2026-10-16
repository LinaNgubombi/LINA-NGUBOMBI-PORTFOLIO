# Lina Ngubombi — Portfolio

A single-page portfolio built with React, Vite, TypeScript and Tailwind CSS.

## Run it locally (VS Code)

1. Unzip this folder.
2. Open the folder in VS Code.
3. Open the terminal (Ctrl + `) and run:

```bash
npm install
npm run dev
```

4. Hold Ctrl and click the link that appears (usually http://localhost:8080).

Stop the site with Ctrl + C.

## Deploy to Vercel

This folder is ready to push to a GitHub repository that Vercel already builds.
Vercel detects Vite automatically; `vercel.json` sets the build command, the
`dist` output folder, and a fallback so every route serves the page.

```bash
npm run build      # produces dist/
```

## Where to edit things

| Want to change | File |
| --- | --- |
| Your name, tagline, availability badge | `src/components/Hero.tsx` |
| About paragraphs | `src/components/About.tsx` |
| Skills list | `src/components/Skills.tsx` |
| Projects and their links | `src/components/Projects.tsx` |
| Contact details and the contact form | `src/components/Contact.tsx` |
| Colours, fonts, animations | `src/index.css` and `tailwind.config.ts` |
| Browser tab title and description | `index.html` |

## The contact form

Messages are sent through [Web3Forms](https://web3forms.com) straight to
`ngubombilina@gmail.com`. The access key sits at the top of
`src/components/Contact.tsx` as `WEB3FORMS_ACCESS_KEY`. To point it at a
different inbox, sign in at web3forms.com with that address, generate a new key
and paste it in.

## Notes

- The site is one page: the navigation jumps to sections with anchors.
- Sections start white and fade into their final colours as you scroll.
- On small screens the menu becomes a full-screen drawer.
