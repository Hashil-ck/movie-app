import { Component } from 'react';
import Popular from './Popular';
import Search from './Search';

class Home extends Component {


    state = { searchTerm: '' }

    handleInput = (e) => {
        
        this.setState({
            searchTerm: e.target.value,
        
        })
    }


    // Do not change the render function
    render() {
        return <div className="relative w-full">
            <div className="search-input w-full ">
                <input type="text" name="search"  className=' w-[98%] mx-2 p-3 my-2 rounded-lg h-12' onChange={(e) => this.handleInput(e)} placeholder="Start typing to show results..." />
            </div>
            {this.state.searchTerm.length == 0  ? <Popular {...this.props} /> : <Search searchTerm={this.state.searchTerm} />}
        </div>
    }
}

export default Home;