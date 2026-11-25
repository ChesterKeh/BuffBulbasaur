# Common Table website

Clean, hand-written HTML/CSS (no framework). Font: Inter.

```
website/
  index.html   ← design + behaviour (you rarely need to touch this)
  content.js   ← ALL words, prices, links and image paths
  images/      ← put your photos here
```

## Editing text and images

**Option 1: on the page (easiest)**
1. Open `index.html?edit` in your browser (add `?edit` to the address).
2. Click any text to retype it. Click any image to replace it with a photo from your computer.
3. Under *Selected collabs*, use **＋ Add a collab**, **Story** (the popup text) and **Remove**.
4. Change the highlight colour with **Colour**.
5. **Preview** shows your edits as a visitor would see them.
6. When you're happy, press **Download content.js** and replace the old `content.js` in this folder. That's what publishes your changes.

Edits are autosaved in your browser until you download them, so you won't lose them if you close the tab.

**Option 2: edit `content.js` directly** in any text editor. Every section is labelled.

## Opening index.html on its own
`index.html` carries a built-in copy of the content and images, so it still shows everything when it's opened alone (e.g. in a chat preview). When `content.js` sits next to it, `content.js` always wins.
After editing `content.js` or `images/`, you can refresh that built-in copy with `node build.js` (optional).

## Before going live
- `brand.email`, `brand.instagram` and `brand.linkedin` in `content.js`.
- The 4 **Selected collabs** are examples. Replace them with your real ones.
- Swap the illustrated placeholder images in `images/` for real photos (hero: landscape, about 2000px wide).
- **Contact form:** by default it opens the visitor's email app addressed to you. For direct delivery, create a free form at formspree.io and paste its URL into `brand.formEndpoint`.

## Hosting
Upload the whole `website` folder to Netlify Drop, Vercel or GitHub Pages.

## Photo credits
Photos in `images/` are from [Unsplash](https://unsplash.com) (free to use under the Unsplash License). Replace them with your own as you go.
