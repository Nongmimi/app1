import React from 'react'
import { Header, Content, Footer } from './func-components';
import Calendar from './class-components';
import Button from './class-components';
import {Calculator2} from './calculator';
import {EventData2} from './event-data';
import RefsFunc from './refs-func'
import MessageBox from './state-func';

// function App(){
//   return(
//     <>
//     <Header/>
//     <p><center><Calendar/></center></p>
//     <Content/>
//     <Footer/>
//     </>
//   )
// }
// export default App;

// function App() {
//   return <Button/>
// }
// export default App;

// export default function App(){
//   return <Calculator2/>
// }

// export default function App(){
//      return <EventData2/>
// }

// export default function App(){
//      return <RefsFunc/>
// }

export default function App(){
     return <MessageBox/>
}