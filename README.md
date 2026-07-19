# Gandi Bachchi

A simple episode-based video player website powered by Google Drive.

## Adding Episodes

Edit `src/data/episodes.js` and add your episodes:

```js
export const episodes = [
  {
    id: 1,
    title: "Episode 1 - The Beginning",
    description: "The first episode of Gandi Bachchi.",
    driveUrl: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
  },
  {
    id: 2,
    title: "Episode 2",
    description: "Second episode.",
    driveUrl: "https://drive.google.com/file/d/ANOTHER_FILE_ID/view?usp=sharing",
  },
];
```

## Getting the Google Drive Link

1. Open your video on Google Drive.
2. Click "Share" then "Copy link".
3. Paste the link into the `driveUrl` field above.
4. The site automatically extracts the file ID and embeds the video.

## Development

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repo in Vercel.
3. Vercel auto-detects Vite and deploys.

## Deploy to GitHub Pages

1. Update the `homepage` field in `package.json` to match your repo:
   ```json
   "homepage": "https://<YOUR_USERNAME>.github.io/gandi-bachchi/"
   ```
2. Push to GitHub.
3. In your repo, go to **Settings > Pages > Build and deployment**.
4. Set **Source** to **GitHub Actions** or use a workflow to build and deploy.
5. Alternatively, run `npm run build` and push the `dist` folder contents to the `gh-pages` branch.
