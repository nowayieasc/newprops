# Proposal for Muna ❤️

This is a special, interactive proposal website designed to ask the big question. It features a romantic intro sequence, a playful "No" button that runs away, and a celebration when she says "Yes".

## Features
- **Intro Sequence**: A beautiful narrative build-up.
- **Elusive No Button**: The "No" button escapes the cursor/touch, making "Yes" the only option.
- **Mobile Optimized**: Enforces landscape mode on phones for the best cinematic experience.
- **Celebration**: Confetti and a success message upon acceptance.
- **Easy Customization**: All text and images are managed in a single file.

## 🛠️ How to Customize

### 1. Change Text & Images
Everything is controlled by `app/config.ts`. Open this file to change:
- **Intro Messages**: The `steps` array controls the text and images shown in the beginning.
- **Proposal Question**: Change "Muna, will you be mine?" to whatever you like.
- **Button Text**: Customize the "Yes" button or the cheeky phrases on the "No" button.
- **Success Message**: What the card says after she clicks "Yes".

### 2. Add Your Own Photos & Media
1.  Put your photos and media in the `public/media/` folder (e.g., `us1.jpg`, `intro.mp4`, `background.m3a`).
2.  Open `app/config.ts` and update the paths:
    ```typescript
    image: "/media/us1.jpg",
    video: "/media/our_video.mp4",
    music: "/media/background_music.m4a",
    ```

## How to Run Locally

1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Run the server**:
    ```bash
    npm run dev
    ```
3.  **Open in browser**:
    Visit [http://localhost:3000](http://localhost:3000).

## How to Deploy (Vercel)

The easiest way to share this is using Vercel (it's free!).

1.  **Push to GitHub**:
    - Create a repository on GitHub.
    - Push this code to it.
2.  **Deploy on Vercel**:
    - Go to [vercel.com](https://vercel.com/new).
    - Import your GitHub repository.
    - Click **Deploy**.
    - Send the link to Muna! ❤️
