import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native'
import { Scene, Router, Actions, Drawer, Lightbox } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import LibraryList from './components/LibraryList';
import HomePage from './components/HomePage';
import UserProfile from './components/UserProfile';
import EditProfile from './components/EditProfile';
import BlogList from './components/BlogList';
import ItineraryList from './components/ItineraryList';
import ItineraryView from './components/ItineraryView';
import ItineraryCreate from './components/ItineraryCreate';
import DrawerPanel from './components/DrawerPanel';
import BlogForm from './components/BlogForm';
import BlogExpand from './components/BlogExpand';
import MapModal from './components/MapModal';
import { Icon } from 'react-native-elements'

//Needs to be consolidated with other features
const RouterComponent = () => {
	return (
		<Router>	
			<Lightbox>
				<Scene key="root" hideNavBar>
						<Scene key="main" drawer drawerIcon={() => <Icon name='menu'/>} contentComponent={DrawerPanel} navigationBarStyle={headerStyle}>
							<Scene 
								key="homepage" 
								component={HomePage} 
								title="Home" 
								initial />
							<Scene 
								key="login" 
								back 
								component={LoginForm} 
								title="Please Login" />
							<Scene 
								key="itinerary" 
								component={LibraryList} 
								title="Itinerary" />
							<Scene 
								onRight={() => Actions.editProfile()}
								rightTitle="Edit"
								key="userProfile" 
								component={UserProfile} 
								title="User Profile" />
							<Scene 
								key="editProfile" 
								back 
								onBack={()=> Actions.userProfile()} 
								component={EditProfile} 
								title="Edit Profile" />
							<Scene 
								rightTitle="Add Blog"
								onRight={()=> Actions.BlogForm()}
								title="Blog"
								component={BlogList}
								key="blog" />
							<Scene 
								key="BlogForm" 
								back 
								onBack={()=> Actions.blog()}
								component = {BlogForm}
								title="Create Blog" />
							<Scene
								key="BlogExpand"
								back 
								onBack={()=> Actions.blog()}
								component = {BlogExpand}
								title="[Blog Name]" />
							<Scene 
								back
								rightTitle="Add"
								onRight={()=> Actions.itineraryCreate()}
								key="itineraryList" 
								component={ItineraryList} 
								title="Itineraries"/>
							<Scene 
								key="itineraryCreate" 
								back 
								onBack={()=> 
								Actions.itineraryList()} 
								component={ItineraryCreate} 
								title="Create Itinerary" />
							<Scene 
								key="eventList" 
								component={EventList} 
								title="Events" />
						</Scene>
				</Scene>
				<Scene key="mapModal" component={MapModal} />
			</Lightbox>
		</Router>
	);
};


//Quick fix to status bar issue
const headerStyle = {
  paddingTop: 20,
  height: 75,
};

export default RouterComponent;