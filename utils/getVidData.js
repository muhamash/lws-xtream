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
    console.error( 'Video not found!', error );
    throw error;
  }
};

export const patchUpdateVid = async ( id, updatedData ) =>
{
  try
  {
    const data = await getVidById( id );
    // console.log(data)
    if ( !data )
    {
      return null;
    }

    if ( updatedData.title )
    {
      data.title = updatedData.title
    }

    if ( updatedData.description )
    {
      data.description = updatedData.description
    }

    const database = await videosData.vidData();
    // console.log(database)
    const index = database.findIndex( ( vid ) => vid.videoId === id );
    database[ index ] = data;
    console.log( data )
    return data;
  } catch ( error )
  {
    console.error( "Unable to update!!", error );
  }
};

export const deleteVidById = async ( id ) =>
{
  try
  {
    const database = await videosData.vidData();
    const index = database.findIndex( ( vid ) => vid.videoId === id );

    if ( index === -1 )
    {
      return false;
    }

    database.splice( index, 1 );
    return true;
  } catch ( error )
  {
    console.error( "Error deleting video:", error );
    throw error;
  }
};