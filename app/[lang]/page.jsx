import Hero from "../../components/Hero";
import VideoContainer from "../../components/VideoContainer";

export default function Home({params}) {
  return (
    <>
      <Hero lang={ params.lang } />
      <VideoContainer lang={ params.lang } />
    </>
  );
}
