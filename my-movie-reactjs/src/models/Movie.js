
export class Movie {
    id
    title
    adult
    
    constructor(data){
        const {id, title, adult} = data
        Object.assign(this, {id, title, adult})
        

    }
}