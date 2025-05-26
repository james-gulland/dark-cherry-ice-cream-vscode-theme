// import { useRef } from "react";

import { ProfilePic } from "@/components/ProfilePic/ProfilePic";
import Link from "next/link";
import { TextBounce } from "../../utils/TextBounce";
import { Pill } from "../Pill/Pill";
import { ContactButtons } from "../ContactButtons/ContactButtons";

export default function Header() {
  // little easter egg ;)
  // function handleClick() {

  //   const container = containerRef.current
  //   const left = (1 - (container.offsetLeft / window.innerWidth)) - 0.05
  //   const top = container.offsetTop / container.offsetHeight

  //   confetti({
  //     particleCount: 100,
  //     spread: 70,
  //     origin: {
  //       x: left,
  //       y: top,
  //     },
  //   })

  // }

  // const containerRef = useRef(null);

  return (
    // <header id="intro-container" ref={containerRef}>
    <header className="relative my-8 mx-0">
      {/* <div id="current-status" className="pill active" onClick={handleClick}> */}
      <div className="absolute top-0 right-0 flex justify-center items-center gap-1">
        <Pill icon="☺️" text="Currently busy" />
      </div>
      <div className="mb-8">
        <ProfilePic href="/about" />
      </div>
      <p className="text-lg mt-4 mb-3">Hello there!</p>
      <p id="profile-description" className="text-lg max-w-2xl">
        I&apos;m&nbsp;
        <span className="link">
          <Link href="/about">James</Link>
        </span>
        , a full-stack web&nbsp;
        <TextBounce colour="text-primary" text="developer" />
        with a background in product management.
      </p>
      <div className="flex flex-wrap gap-4 my-8">
        <ContactButtons />
      </div>
    </header>
  );
}
