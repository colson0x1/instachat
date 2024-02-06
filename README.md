# instaChat - Real-time Chat Application

InstaChat is a real-time chat application built with React for the frontend and Node.js with Express for the backend. It allows users to create accounts, log in securely, and engage in real-time conversations with other users.

![instachat](https://i.imgur.com/lsYiRFp.png)

![instachat](https://i.imgur.com/xX20Hj2.png)

## Features

- **User Authentication**: Users can sign up for new accounts and log in securely using JWT (JSON Web Tokens) for authentication.
- **Real-time Messaging**: Chat messages are delivered instantly using WebSocket technology for real-time communication.
- **User Search**: Users can search for other users by username and initiate conversations.
- **Responsive Design**: The application is designed to be responsive and user-friendly across various devices and screen sizes.

## Technologies Used

### Frontend
- **React**: JavaScript library for building user interfaces. Utilizes functional components and hooks for improved performance and readability.
- **React Router**: For declarative routing in the application, enabling navigation between different views.
- **Zustand**: A lightweight, state management library for React applications, providing a simple and efficient way to manage global state.
- **Socket.IO Client**: Enables real-time, bidirectional and event-based communication between the client and server.

### Backend
- **Node.js**: JavaScript runtime for building server-side applications. Utilizes the Express framework for routing and middleware management.
- **Express**: Web application framework for Node.js, simplifying the creation of APIs with robust routing and middleware capabilities.
- **MongoDB**: NoSQL database for storing user information, conversations, and messages. Utilizes Mongoose for schema-based modeling.
- **Socket.IO**: Library for real-time web applications, used for server-side WebSocket integration to enable real-time messaging.

## Project Structure

The project follows a modular and organized structure for both frontend and backend components:

### Frontend Structure
- **src/components**: Contains reusable UI components used across the application, promoting code reuse and maintainability.
- **src/context**: Houses context providers for managing global state using React Context API, ensuring state is accessible throughout the application.
- **src/hooks**: Custom hooks for managing various functionalities such as user authentication, messaging, etc., promoting code reuse and encapsulation of logic.
- **src/utils**: Utility functions and helper methods used throughout the frontend application for common tasks such as date formatting, API requests, etc.

### Backend Structure
- **api**: Contains API routes for user authentication, messaging, and other functionalities, organized by resource or feature.
- **models**: Defines MongoDB schemas for users, conversations, and messages, ensuring consistency and data integrity.
- **services**: Implements business logic for user authentication, message handling, etc., keeping route handlers lean and focused on handling requests.
- **config**: Configuration files for environment variables, database connections, etc., enabling easy configuration and deployment across different environments.
- **utils**: Utility functions and middleware used in the backend for common tasks such as error handling, authentication, etc.

## Additional Features

### Notification Sound
- **Custom Sound**: A distinctive notification sound alerts users to new messages, enhancing the overall user experience.
- **Audio Playback**: Utilizes the Web Audio API to play notification sounds seamlessly when new messages are received.

### UI Features
- Latest messages have a shake animation.
- Automatically scrolls to the latest messages when clicked on one of the members if contains longer conversations.
- Has solid client + server side validations
- Good design pattern is used to architect apps for writing less code, splitting into modules like controllers, middleware, routes, pages, components, hooks, and more.

## Architecture and Design Patterns

- **MVC (Model-View-Controller)**: The backend follows the MVC architecture, separating concerns between models, views, and controllers for a clear and maintainable codebase.
- **Single Responsibility Principle**: Each component, hook, or service is designed to have a single responsibility, promoting code reusability and maintainability.
- **Container-Presenter Pattern**: UI components are divided into container components (handling logic) and presentational components (rendering UI), ensuring separation of concerns and better testability.
- **Dependency Injection**: The application utilizes dependency injection principles to inject dependencies (e.g., services, database connections) into components and modules, promoting loose coupling and easier testing.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/instachat.git`
2. Navigate to the project directory: `cd instachat`
3. Install dependencies:
   - On root dir (Configured to install on both Backend + Frontend): `npm run build`

4. Set up environment variables:
   - Create a `.env` file in the root directory and define environment variables like `PORT`, `MONGO_URI`, `JWT_SECRET`, and `NODE_ENV=development`.
5. Start the development servers:
   - Express Server (Configured to run both backend + frontend at port 4000): `npm run server`
7. Access the application at `http://localhost:4000` in your web browser.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

Grateful to all the open-source libraries used in this project.
