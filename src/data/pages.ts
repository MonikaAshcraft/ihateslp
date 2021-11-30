export const pages = {
  default: {
    title: "SLP Makes me sad...",
    image: "https://gruss.cc/portrait_small.jpg",
    audio: `${process.env.PUBLIC_URL}/music/os.mp3`,
    background: "white",
    foreground: "grey",
    textColor: "black",
  },
  uwu: {
    title: "Daniel is kinda cute",
    image: `${process.env.PUBLIC_URL}/images/uwu.jpg`,
    audio: `${process.env.PUBLIC_URL}/music/uwu.mp3`,
    background: "pink",
    foreground: "white",
    textColor: "black",
  },
  mainthread: {
    title: "Seriously, there isn't",
    image: `${process.env.PUBLIC_URL}/images/matrix.jpg`,
    audio: `${process.env.PUBLIC_URL}/music/os.mp3`,
    background: "black",
    foreground: "#ffffff20",
    textColor: "lime",
  },
  thicc: {
    title: "That chin tho",
    image: `${process.env.PUBLIC_URL}/images/thicc.png`,
    audio: `${process.env.PUBLIC_URL}/music/os.mp3`,
    background: "white",
    foreground: "grey",
    textColor: "black",
  },
  cat: {
    title: "Send cat pics",
    image: `${process.env.PUBLIC_URL}/images/cat.jpg`,
    audio: `${process.env.PUBLIC_URL}/music/os.mp3`,
    background: "coral",
    foreground: "white",
    textColor: "black",
  },
} as const;

export type PageName = keyof typeof pages;
export const pageNames = Object.keys(pages) as PageName[];

export const isPageName = (
  potentialPageName: string
): potentialPageName is PageName => {
  return potentialPageName in pages;
};

export const sanitizePageName = (pageName: string): PageName =>
  pageName.toLowerCase().replace(/[- .]/g, "") as PageName;
