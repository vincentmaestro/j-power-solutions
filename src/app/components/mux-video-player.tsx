import MuxPlayer from '@mux/mux-player-react';

type SanityVideo = {
  asset?: {
    playbackId?: string
  }
}

export function VideoPlayer({ video }: { video: SanityVideo }) {
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