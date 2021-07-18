const paginate = (articles) => {
  const itemsPerPage = 10
  const numberOfPages = Math.ceil(articles.length / itemsPerPage)

  const newArticles = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage
    return articles.slice(start, start + itemsPerPage)
  })

  return newArticles;
}

export default paginate
