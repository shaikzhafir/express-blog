class Post {
    constructor(postData,content){
        this.postData = postData
        this.content = content || undefined
    }

    getData(){
        return {
            title: this.postData.data.title,
            description : this.postData.data.slug,
            post: this.content,
            id: this.postData.data.id,
        }
    }
}


module.exports = Post