class JSXDemo extends React.Component {
   render() {
      return (
         <div>
            <h1>My Image</h1>
            {/* img tag must have a closing /> for it to be valid JSX */}
            <img src="https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1776&q=80" />
         </div>
      )
   }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'))