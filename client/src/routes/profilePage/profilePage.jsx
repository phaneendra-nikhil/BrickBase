import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
import { Link } from "react-router-dom";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <div className="userImage">
            <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="profile image"
              />
            </div>
            <div className="userDetails">
              <div className="name">
                <b>Name: </b>
                <span>John Doe</span>
              </div>
              <div className="age">
                <b>Age: </b>
                <span>22</span>
              </div>
              <div className="mail">
                <b>Mail: </b>
                <span>johndoe@example.com</span>
              </div>
              <div className="phone">
                <b>phone: </b>
                <span>+123 456 789</span>
              </div>
              <div className="city">
                <b>City: </b>
                <span>brooklyn</span>
              </div>

            </div>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

