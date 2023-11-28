import { Login } from './Login';
import { Header } from './header';
import './home.css';


export function Home(){
    return(
        <div id="body">
          <Header/>
          <Login/>
        </div>
    )
}