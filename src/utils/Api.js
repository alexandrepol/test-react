const endpoint = 'https://jsonplaceholder.typicode.com/';

const call = (route) => {
    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();
        const url = `${endpoint}${route}`;

        /**  Missing something ?? **/
        request.open("GET", url, true);
        request.send(null);


        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                resolve(JSON.parse(request.responseText));
            } else if (request.readyState === 4) {
                console.error("error here");
                reject(request.responseText);
            }
        }
    });
};


const Api = {

    getPosts: () => {
        return call('posts');
    },

    getPost: (idPost) => {
        return call(`posts/${idPost}`);
    },

    getUser: (userId) => {
        return call(`users/${userId}`);
    },

    getPostComments: (idPost) => {
        return call(`comments?postId=${idPost}`);
    },
};

export default Api;