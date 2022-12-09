const posts = [
    {
        title: 'Post One ', body: 'this is post one', createdAt: new Date().getTime()
    },
    { title: 'Post two', body: 'this is post two', createdAt: new Date().getTime() }

];

function getPost() {
    setTimeout(() => {
        let output = '';
        for (let i = 0; i < posts.length; i++) {
            output += `<li>${posts[i].title}-last updated ${new Date().getTime() - posts[i].createdAt}</li>`
        }
        document.body.innerHTML = output;
    }, 1000)

}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ ...post, createdAt: new Date().getTime() });
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject('Error:something went wrong')
            }
        }, 3000);
    });
}

const user = {
username: 'tanukeshari',
lastActivityTime:'21nd of march'
}

function updateLastActivityTime(){
    return new Promise((resolve, reject )=>{
        setTimeout(()=>{
            user.lastActivityTime= new Date().getTime();
            resolve(user.lastActivityTime)
        },1000)
    })
}
function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const lastelement = posts.pop()
                resolve(lastelement);
            }
            else {
                reject('Array is Empty now');
            }

        }, 1000);
    });

}



createPost({ title: 'post three', body: ' this is  post three ' })
    .then(() => {
        getPost();
        deletePost().then((deletedElement) => {
            console.log(deletedElement)
            getPost();
            deletePost().then(() => {
                getPost();
                deletePost().then(() => {
                    getPost();
                    deletePost().then(() => {})
.catch ((err) => {
                            console.log('inside catch block', err)

                        })
                })
            })
        })

    })
    
   
    const promises1= Promise.resolve('hello world');
    const promise2= 11;
    const promise3=new Promise((resolve, reject)=>
    setTimeout(resolve, 2000 , 'GoodBye'));
    

    Promise.all([promises1, promise2, promise3, ]).then(values=>
        console.log(values));




        //question 
        // The Promise.all() method takes an iterable of promises as input and returns a single Promise . This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values.


        // callback function is passed as an argument to another function whereas Promise is something that is achieved or completed in the future. In JavaScript, a promise is an object and we use the promise constructor to initialize a promise. 