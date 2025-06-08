export default function YouTubeVideo({ id }: { id: string }) {
  return (
    <div>
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  )
}
