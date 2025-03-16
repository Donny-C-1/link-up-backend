# Link Up - Chat App Backend

Welcome to the backend of Link Up, a chat application built with Express.js. This backend provides access to a custom language model (LLM) and allows users to send messages to an AI.

## Features

- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
- **Custom LLM**: Access to a custom language model for enhanced chat capabilities.
- **AI Messaging**: Send and receive messages to/from an AI.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/link-up-backend.git
    ```
2. Navigate to the project directory:
    ```sh
    cd link-up-backend
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

### Running the Application

1. Start the server:
    ```sh
    npm start
    ```
2. The server will be running on `http://localhost:3000`.

## API Endpoints

### Send Message to AI

- **Endpoint**: `/api/message`
- **Method**: `POST`
- **Description**: Send a message to the AI and receive a response.
- **Request Body**:
    ```json
    {
        "message": "Your message here"
    }
    ```
- **Response**:
    ```json
    {
        "response": "AI response here"
    }
    ```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please contact [your-email@example.com].
