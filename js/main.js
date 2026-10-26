const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            postslist: [],
            postId: 3,
            userId: 1,
            id: 1,
            title: '',
            body: '',  
        }
    },
    methods: {
        myMethod(){

        },
        getAllPosts() {
            console.log('getAllPosts metoden')

            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    console.log(response.data)
                    this.postslist = response.data
                })
                .catch((error) => {
                    console.log(error)
                })


        },
        addPost() {
       console.log('addPost metoden')

      axios.post(`https://jsonplaceholder.typicode.com/posts/`,{
        "userId": this.userId,
        "id": this.id,
        "title": this.title,
        "body": this.body
      })
                .then((response) => {
                    this.postslist = []
                    console.log("post id er " + this.postId)
                    console.log("statuskode " + response.status)
                    console.log("response data" + response.data)  
                    this.postslist.push(response.data)
                    console.log("indehold af postslists " + this.postslist)
                    // Opdater postlisten med den nye post
                     
                })
                .catch((error) => {
                    console.log(error)
                })  
        

        
        }
        ,
        getOnePost() {
            console.log('getOnePost metoden')
            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.postId}`)
                .then((response) => {
                    this.postslist = []
                    console.log("post id er " + this.postId)
                    console.log(response.data)
                    this.postslist.push(response.data)
                    console.log("indehold af postslists " + this.postslist)
                    // Opdater postlisten med den nye post
                     
                })
                .catch((error) => {
                    console.log(error)
                })  
        }

    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
