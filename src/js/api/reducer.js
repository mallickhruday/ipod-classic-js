const initialState = {
   artists: [],
   albums: [],
   playlists: {},
   artistData: {},
   albumData: {},
};

const apiReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'UPDATE_ARTIST_LIST':
         return {
            ...state,
            artists: action.artists,
            artistData: action.artistData,
         };
      case 'FETCH_ARTIST_SUCCESS':
         return {
            ...state,
            artistData: {
               ...state.artistData,
               [action.name]: action.albums,
            },
            albumData: {
               ...state.albumData,
               ...action.albumData,
            },
         };
      case 'FETCH_ALBUM_LIST_SUCCESS':
         return {
            ...state,
            albumData: {
               ...state.albumData,
               ...action.albumData,
            },
            albums: action.albums,
         };
      case 'FETCH_ALBUM_SUCCESS':
         return {
            ...state,
            albumData: {
               ...state.albumData,
               [action.album]: action.tracks,
            },
         };
      case 'FETCH_PLAYLIST_LIST_SUCCESS':
         return {
            ...state,
            playlists: action.playlists,
         };
      case 'CREATE_PLAYLIST':
         return {
            ...state,
            playlists: action.playlists,
         };
      case 'UPDATE_PLAYLIST':
         return {
            ...state,
            playlists: action.playlists,
         };
      default:
         return state;
   }
};

export default apiReducer;
