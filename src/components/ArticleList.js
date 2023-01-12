import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
    console.log(posts)
    const eachArticle = posts.map((post)=>{
        return (
            <Article key="id"title={posts.title}
            date={posts.date}
            preview={posts.preview}/>
        )
    })
  return (
    <main>
        {eachArticle}
    </main>

    
  )
}

export default ArticleList
