import '../Styles/header.css';
import Profile from '../Icons/profile.png';

export default function Header(){
    return(
        <header className="header-container">   
            <div className="profile-container">
                <img src={Profile} className="profile"/>
            </div>
            <h1 className="header">Welcome back, Nathan!</h1>
        </header>
    )
}