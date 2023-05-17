const postReducer = (state = {posts: null, loading: false, error: false, uploading: false}, action) => {
    switch (action.type) {
        case 'UPLOAD_START':
            return {...state, error: false, uploading: true}
        default: return state;
    }
}

export default postReducer;