import React from 'react';


class SearchBar extends React.Component{
    state = {term:" "}
     
     //this allow us to change the input text so i have updated state  
     onInputChange = (Event) => {
         //setState allow us to update the state 
     this.setState({term: Event.target.value})
     };


     onFormSubmit = (Event)=>{ 
        // Preventing by default allow us to prevent when we submit to the form input to not reload the browser
         Event.preventDefault();
         this.props.onFormSubmit(this.state.term);
         
     }

    render(){
        return (
            <div className="search-bar ui segment"> 
             <form className="ui form"   onSubmit={this.onFormSubmit}>
               <div className="ui field">
                   <label> Search Bar</label>
                   <input 
                   type="text" 
                   value={this.state.term} 
                   placeholder="Search for everything" 
                   onChange={this.onInputChange}
                   />
               </div>
             </form>
             </div>
        )
    }
}


export default SearchBar;