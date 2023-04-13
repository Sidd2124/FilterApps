const LanguageList = props => {
  const {Items, Filter} = props
  const {id, language} = Items

  const Search = () => {
    Filter(id)
  }
  return (
    <div>
      <h1 onClick={Search}>{language}</h1>
    </div>
  )
}
export default LanguageList
