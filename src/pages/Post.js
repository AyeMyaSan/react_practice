import React from 'react';

const Post = ({match}) => {
    return (
        <p>
            posts #{match.params.id}
        </p>

    )
};

export default Post;
