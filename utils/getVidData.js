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