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

Get a free API key at [my.plantnet.org](https://my.plantnet.org/), then copy `.env.example` to
`.env` and fill it in:

```env
REACT_APP_PLANTNET_API_KEY=your-key
```

CRA embeds `REACT_APP_*` values in the built JavaScript, so the key is visible to anyone using the
site. Restrict it to your domain in the Pl@ntNet dashboard.

To deploy:

```bash
npm run build
firebase deploy
```
