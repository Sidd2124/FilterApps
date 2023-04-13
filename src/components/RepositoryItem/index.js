const RepositoryIten = props => {
  const {Repo} = props
  const {name, id, issuesCount, forksCount, starsCount, avatar} = Repo
  return (
    <div>
      <h1>{name}</h1>
      <p>{id}</p>
      <p>{issuesCount}</p>
      <p>{forksCount}</p>
      <p>{starsCount}</p>
      <img src={avatar} alt={name} />
    </div>
  )
}

export default RepositoryIten
