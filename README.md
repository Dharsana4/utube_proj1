YouTube  Clone - Project Documentation
Project Overview
This project is a YouTube Clone built using React.js and Vite. It provides video browsing, search functionality, and theme customization. The app follows a modular component-based architecture for better maintainability and scalability.
Tech Stack
•	Frontend: React.js, CSS
•	Build Tool: Vite
•	State Management: React Context API
•	Routing: React Router
•	Deployment: Netlify

Project Structure
Root Level
•	public/
o	images/ - Stores static image assets.
src/ Directory Structure
components/ - UI Components
•	common/ - Reusable components
o	Side Items
	Shorts.jsx - Shorts section component.
	Subscriptions.jsx - Subscriptions section component.
	WatchLater.jsx - Watch Later section component.
	YourVideos.jsx - Your Videos section component.
o	Categories
	Categories.jsx - Displays video categories.
	categories.css - Styles for categories.
o	Comment Related
	CommentItem.jsx - Displays individual comments.
	comment-item.css - Styles for comments.
o	Header
	Header.jsx - The main header component.
	header.css - Styles for the header.
o	Search
	SearchBar.jsx - Search input bar component.
	search-bar.css - Styles for the search bar.
o	Sidebar
	Sidebar.jsx - Sidebar navigation component.
	sidebar.css - Styles for the sidebar.
o	Skeleton Loader
	SkeletonLoader.jsx - Loader animation component for loading states.
	skeleton-loader.css - Styles for skeleton loaders.
o	Theme
	ThemeModal.jsx - Modal for changing theme.
	theme-modal.css - Styles for the theme modal.
o	Video
	VideoCard.jsx - Displays individual video cards.
	video-card.css - Styles for video cards.
layout/ - Main Layout Components
•	MainLayout.jsx - Defines the overall structure of the application.
•	main-layout.css - Styles for the layout.
pages/ - Application Pages
•	HomePage.jsx - The main home page displaying video feeds.
•	SearchResult.jsx - Displays search results for videos.
•	VideoDetail.jsx - Shows the video player and details for a selected video.
utils/ - Utility Functions
•	api.jsx - Handles API requests.
•	constants.jsx - Defines constants used across the project.
•	formatters.jsx - Functions for formatting data such as timestamps.
Core Files
•	App.jsx - Main entry point for the React app.
•	App.css - Global styles.
•	main.jsx - React DOM rendering entry point.
•	index.css - Global CSS styles.
Features
•	Home Page: Displays a list of videos based on categories.
•	Search Functionality: Allows users to search for videos.
•	Sidebar Navigation: Provides quick access to different sections such as Shorts, Subscriptions, and Watch Later.
•	Categories: Provides quick access to different categories such as Data Science, DSA, Web Development .
•	Video Details Page: Displays video information along with comments.
•	Theme Toggle: Users can switch between light and dark themes. Click on Profile icon to change the theme.
•	Responsive Design: The app is optimized for mobile, tablet, and desktop views.

How It Works
•	The application fetches video data from videos.json (mock data for now, replaceable with an API in the future).
•	Clicking on a video navigates to VideoDetail.jsx, where the video plays.
•	Categories and search terms filter the displayed videos dynamically.
•	The sidebar enables quick navigation to different sections.
•	Clicking on the theme toggle updates the UI theme.


Project Setup Instructions:
1.	git clone <repository-url>  
2.	cd project1
3.	npm install 
4.	npm run dev  

Conclusion
This YouTube clone project demonstrates the capabilities of React in building a video-streaming platform with modern UI/UX design. With features like search, video playback, and dark mode, it provides a solid foundation for further development. Future improvements could include integrating real-time data, user authentication, and video uploads to enhance user experience.

