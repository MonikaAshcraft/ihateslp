import { useCallback, useEffect, useRef, useState } from "react";
import { PageName, pages } from "../data/pages";
import { NavForm } from "../navform/NavForm";
import "./Page.css";

type Props = {
  page: PageName;
};

export const Page = ({ page }: Props) => {
  const { title, image, audio, background } = pages[page];

  const [isPlaying, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlaying = useCallback(() => {
    setPlaying(!isPlaying);
  }, [isPlaying]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <audio className="page-audio" ref={audioRef} loop>
        <source src={audio} type="audio/mpeg" />
      </audio>
      <div className="page" style={{ background }}>
        <div className="page-image-wrapper">
          <img
            className={`page-image ${isPlaying ? "spinning" : ""}`}
            src={image}
            alt="The one and only"
            onClick={togglePlaying}
          />
        </div>
        <NavForm />
      </div>
    </>
  );
};
