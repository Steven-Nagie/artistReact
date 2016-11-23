import React from "react";

// Have to get name, etc from the Select page.
// My thinking is that we either have to use redux to pass the state of the select page over, or create a function on the select page that selects a certain user, and then import that function.
//Here's another comment.

export default class Hero extends React.Component {
  render() {
    console.log(this.props);
    return(
      <h1>{}</h1>
    )
  }
}
