import VideDetailsCard from '../../../../components/VideoDetailsCard'
import VideoYouMayLike from '../../../../components/VideoYouMayLike'

export default function VideoPage({params}) {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <VideDetailsCard/>
      <VideoYouMayLike lang={ params.lang } />
    </div>
  )
}
