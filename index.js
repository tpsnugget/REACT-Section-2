function getMood() {
   const moods = ['angry', 'hungry', 'silly', 'quiet', 'paranoid']
   return moods[Math.floor(Math.random() * moods.length)]
}

class JSXDemo extends React.Component {
   render() {
      var msg  = ''
      var mood = getMood()
      switch(mood) {
         case 'angry':
         msg = 'Angry: I need some space'
         break
         case 'hungry':
         msg = 'Hungry: Lets eat!'
         break
         case 'silly':
         msg = 'Silly: I feel silly'
         break
         case 'quite':
         msg = 'Quiet: Can we not talk right now'
         break
         case 'paranoid':
         msg = 'Paranoid: Is that guy following us?'
         break
      }
      return (
         <div> 
            <h1>My current mood is: {msg}</h1>
         </div>
      )
   }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'))