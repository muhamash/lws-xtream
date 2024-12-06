import 'server-only';

const videosData = {
  vidData: () =>
    import('../public/data/videos.json').then((module) => module.default),
};

export const getVidData = async () => {
  try {
    const data = await videosData.vidData();
    return data;
  } catch (error) {
    console.error('Error loading video data:', error);
    throw error;
  }
};

export const getVidById = async ( id ) =>
{
  try
  {
    const data = await videosData.vidData();
    const findData = data?.find( d => d.videoId === id );
    if ( findData )
    {
      return findData;
    }
    else
    {
      return null
    }
  } catch ( error )
  {
    console.error('Video not found!', error);
    throw error;
  }
}