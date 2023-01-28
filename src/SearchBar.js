import { Component } from 'react';

class SearchBar extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.onChangeSearch = this.onChangeSearch.bind(this);
  //   }

  state = { term: '' };

  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onSubmitForm} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(event) => this.setState({ term: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
