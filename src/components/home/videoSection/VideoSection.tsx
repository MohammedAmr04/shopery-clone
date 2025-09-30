import { useState } from "react";

function VideoSection() {
  const [play, setPlay] = useState(false);

  return (
    <section className="bg-gray-100 py-15 flex justify-center items-center">
      <div className="container">
        {!play ? (
          <div className="relative w-full max-w-[700px] h-[400px] mx-auto aspect-video ">
            <img
              className="w-full h-full object-contain  cursor-pointer"
              src="/home/video/video.png"
              alt="YouTube thumbnail"
              onClick={() => setPlay(true)}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h3 className="text-3xl font-semibold text-white text-center max-w-md">
                We’re the Best Organic Farm in the World
              </h3>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full max-w-[700px] h-[400px] mx-auto"
            src="https://www.youtube.com/embed/Qfozqrom7Bk?autoplay=1&mute=1"
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </section>
  );
}

export default VideoSection;
