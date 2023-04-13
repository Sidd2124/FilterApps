import {Component} from 'react'

import './index.css'

import LanguageList from '../LanguageFilterItem'
import RepositoryIten from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {FilterType: 'All', TotalList: ''}

  componentDidMount() {
    this.FinelStage()
  }

  FinelStage = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/popular-repos?language=ALL',
    )

    const data = await response.json()
    const NewData = data.popular_repos.map(each => ({
      name: each.name,
      issuesCount: each.issues_count,
      forksCount: each.forks_count,
      starsCount: each.stars_count,
      avatar: each.avatar_url,
    }))
    this.setState({TotalList: NewData})
  }

  Finel = id => {
    this.setState({FilterType: id})
  }

  render() {
    const {FilterType, TotalList} = this.state
    return (
      <div>
        <p>{FilterType}</p>
        <h1>Popular</h1>
        <div className="Main">
          {languageFiltersData.map(each => (
            <LanguageList Items={each} Filter={this.Finel} />
          ))}
        </div>
        {TotalList.map(each => (
          <RepositoryIten Repo={each} />
        ))}
      </div>
    )
  }
}
export default GithubPopularRepos
