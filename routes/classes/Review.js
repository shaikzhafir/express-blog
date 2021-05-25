class Review {
    constructor(reviewData,content){
        this.reviewData = reviewData
        this.content = content || undefined
    }

    getData(){

        return {
            title: this.reviewData.data.title,
            author : this.reviewData.data.author,
            verdict : this.reviewData.data.verdict,
            post: this.content,
            isbn: this.reviewData.data.isbn,
        }
        
    }

}

module.exports = Review