import MuxPlayer from '@mux/mux-player-react';

export function VideoPlayer({ video }: { video: any }) {
  const playbackId = video?.asset?.playbackId

  if (!playbackId) return null

  return (
    <MuxPlayer
      playbackId={playbackId}
      streamType="on-demand"
      autoPlay={false}
      className="w-full aspect-video"
    />
  )
}