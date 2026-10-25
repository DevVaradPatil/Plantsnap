# PlantSnap

**Identify a plant from a photo.** Upload a picture, choose which part of the plant it shows
(leaf, flower, fruit or bark), and PlantSnap returns the five most likely species from the
[Pl@ntNet](https://plantnet.org/) identification API, with confidence scores.

## Features

- Image upload with organ selection (leaf, flower, fruit, bark)
- Top 5 species matches from the Pl@ntNet `v2/identify` API, with scientific name, common names and
  confidence score
- Result cards with plant info
- About and Contact pages
- Hosted on Firebase Hosting

## Tech stack

React (Create React App) · Axios · React Router · Firebase Hosting · [Pl@ntNet API](https://my.plantnet.org/)

## Getting started

```bash
npm install
npm start       # http://localhost:3000
```

Get a free API key at [my.plantnet.org](https://my.plantnet.org/) and set `PLANTNET_API_KEY` in
`src/components/MainBody.js`.

To deploy:

```bash
npm run build
firebase deploy
```
