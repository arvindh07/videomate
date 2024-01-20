import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { Link } from 'react-router-dom';
TimeAgo.addDefaultLocale(en)

const VideoCard = ({ info }: any) => {
    const { title, channelTitle, publishedAt, thumbnails } = info.snippet;
    const timeAgo = new TimeAgo('en-US');
    const date = new Date(publishedAt);

    return (
        <Link to={"/watch?v=" + info?.id} className='m-2 mb-4 h-fit'>
            <div className="max-w-[350px] cursor-pointer">
                <img src={thumbnails?.maxres?.url} alt="thumbnail"
                    className="w-full rounded-lg" />
                <div className='flex gap-x-2 pt-3'>
                    <img
                        src={info?.channel?.snippet?.thumbnails?.medium?.url}
                        alt="profile"
                        className='w-[40px] h-[40px] rounded-full' />
                    <div>
                        <p className="font-semibold">{title}</p>
                        <p className="text-black/60 pt-2">{channelTitle}</p>
                        <div className="text-black/60">
                            <span>{Math.ceil(info?.statistics?.viewCount / 1000000)}M views . {timeAgo.format(date)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard