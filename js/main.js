const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            postslist: [],
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



        }
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
