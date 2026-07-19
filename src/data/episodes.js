export const episodes = [
  {
    id: 1,
    title: "Episode 1",
    description: "The beginning.",
    qualities: {
      "480p": "https://drive.google.com/file/d/15wZmq-n96DMqwq-2bJrkEvOq7lEgolkW/view?usp=drive_link",
      "720p": "https://drive.google.com/file/d/PLACEHOLDER_E1_720P/view?usp=sharing",
      "1080p": "https://drive.google.com/file/d/PLACEHOLDER_E1_1080P/view?usp=sharing",
    },
  },
  {
    id: 2,
    title: "Episode 2",
    description: "Second episode.",
    qualities: {
      "480p": "https://drive.google.com/file/d/1Aeakplyl-Qx_YTIsYBlpq-voVZDi2JhF/view?usp=drive_link",
      "720p": "https://drive.google.com/file/d/PLACEHOLDER_E2_720P/view?usp=sharing",
      "1080p": "https://drive.google.com/file/d/PLACEHOLDER_E2_1080P/view?usp=sharing",
    },
  },
  {
    id: 3,
    title: "Episode 3",
    description: "Third episode.",
    qualities: {
      "480p": "https://drive.google.com/file/d/1Szg1IQHuPG_ywi0dFiI0Zz2YsZD82vKf/view?usp=drive_link",
      "720p": "https://drive.google.com/file/d/PLACEHOLDER_E3_720P/view?usp=sharing",
      "1080p": "https://drive.google.com/file/d/PLACEHOLDER_E3_1080P/view?usp=sharing",
    },
  },
  {
    id: 4,
    title: "Episode 4",
    description: "Fourth episode.",
    qualities: {
      "480p": "https://drive.google.com/file/d/1SlNiIUWzLuV7ktc7FmT1_rLE3XTMvGCv/view?usp=drive_link",
      "720p": "https://drive.google.com/file/d/PLACEHOLDER_E4_720P/view?usp=sharing",
      "1080p": "https://drive.google.com/file/d/PLACEHOLDER_E4_1080P/view?usp=sharing",
    },
  },
  {
    id: 5,
    title: "Episode 5",
    description: "Fifth episode.",
    qualities: {
      "480p": "https://drive.google.com/file/d/19CZTsSTzIBQWIkzq_HsTHasGJutJBdne/view?usp=drive_link",
      "720p": "https://drive.google.com/file/d/PLACEHOLDER_E5_720P/view?usp=sharing",
      "1080p": "https://drive.google.com/file/d/PLACEHOLDER_E5_1080P/view?usp=sharing",
    },
  },
  {
    id: 6,
    title: "Episode 6",
    description: "Sixth episode.",
    qualities: {
      "480p": "https://drive.google.com/file/d/1DNDtxyP4_YINabS-PHnjAoeccWxswzXe/view?usp=drive_link",
      "720p": "https://drive.google.com/file/d/PLACEHOLDER_E6_720P/view?usp=sharing",
      "1080p": "https://drive.google.com/file/d/PLACEHOLDER_E6_1080P/view?usp=sharing",
    },
  },
  {
    id: 7,
    title: "Episode 7",
    description: "Seventh episode.",
    qualities: {
      "480p": "https://drive.google.com/file/d/1oTJscNIyLjki5Rhbj5MnOsYgdg9F1AkZ/view?usp=drive_link",
      "720p": "https://drive.google.com/file/d/PLACEHOLDER_E7_720P/view?usp=sharing",
      "1080p": "https://drive.google.com/file/d/PLACEHOLDER_E7_1080P/view?usp=sharing",
    },
  },
  {
    id: 8,
    title: "Episode 8",
    description: "Eighth episode.",
    qualities: {
      "480p": "https://drive.google.com/file/d/1JmzPTSzzb0NvKgjlbDcYDUyIwnaylzoW/view?usp=drive_link",
      "720p": "https://drive.google.com/file/d/PLACEHOLDER_E8_720P/view?usp=sharing",
      "1080p": "https://drive.google.com/file/d/PLACEHOLDER_E8_1080P/view?usp=sharing",
    },
  },
];

export function getDriveFileId(url) {
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

export function getEmbedUrl(driveUrl) {
  const fileId = getDriveFileId(driveUrl);
  return fileId
    ? `https://drive.google.com/file/d/${fileId}/preview`
    : driveUrl;
}


