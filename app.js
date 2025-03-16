<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Chatbot</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 20px;
        }

        #chat-container {
            background-color: white;
            padding: 10px;
            border-radius: 10px;
            width: 400px;
            margin: 0 auto;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        #chat-box {
            max-height: 300px;
            overflow-y: auto;
            padding: 10px;
            border-bottom: 1px solid #ccc;
        }

        #user-input {
            width: 80%;
            padding: 10px;
            margin-right: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }

        button {
            padding: 10px;
            border-radius: 5px;
            border: none;
            background-color: #4CAF50;
            color: white;
        }

        button:hover {
            background-color: #45a049;
        }

        .message {
            margin: 5px 0;
        }

        .user-message {
            color: #007bff;
        }

        .bot-message {
            color: #28a745;
        }
    </style>
</head>
<body>
    <h1 style="text-align: center;">AI Chatbot</h1>
    <div id="chat-container">
        <div id="chat-box"></div>
        <input type="text" id="user-input" placeholder="Type a message..." onkeydown="if(event.key === 'Enter'){sendMessage()}">
        <button onclick="sendMessage()">Send</button>
    </div>

    <script src="chatbot.js"></script>
</body>
</html>
