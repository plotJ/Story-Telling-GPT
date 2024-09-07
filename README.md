# Story Telling App

## Overview
This Story Telling App is an interactive web application that generates custom stories based on user-defined characters, genres, and tones. It leverages local AI models to create unique narratives tailored to user preferences.

[homework1.png]
[homework2.png]

## Features
- Character Creation: Add, edit, and delete custom characters with names, descriptions, and personalities.
- Genre Selection: Choose from Fantasy, Mystery, Romance, or Sci-Fi genres.
- Tone Selection: Set the story's tone as Happy, Sad, Sarcastic, or Funny.
- AI-Powered Story Generation: Uses locally hosted AI models to create stories incorporating user-defined elements.
- Dark Mode Interface: Features a sleek, eye-friendly dark mode design.

## Tech Stack
- Next.js
- React
- TypeScript
- Tailwind CSS
- text-generation-webui (for local AI model hosting)

## Prerequisites
- [text-generation-webui](https://github.com/oobabooga/text-generation-webui) installed and set up
- A compatible AI model loaded in text-generation-webui

## Setup and Installation

1. Set up text-generation-webui:
   - Install text-generation-webui following the instructions in their GitHub repository.
   - Enable the "API" and "OpenAI" extensions in the Session tab.
   - Load a compatible language model.

2. Clone the Story Telling App repository:
   ```
   git clone https://github.com/plotJ/Story-Telling-GPT
   ```

3. Navigate to the project directory:
   ```
   cd story-telling-app
   ```

4. Install dependencies:
   ```
   npm install
   ```

5. Set up environment variables:
   Create a `.env.local` file in the root directory and add:
   ```
   OPENAI_API_BASE=http://127.0.0.1:5000/v1
   ```

6. Run the development server:
   ```
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage
1. Ensure text-generation-webui is running with a model loaded.
2. Add characters using the character creation form in the app.
3. Select a genre and tone for your story.
4. Click "Generate Story" to create a unique narrative.
5. Read and enjoy your custom-generated story!

## AI Usage and Homework Assignment Aspects

This project demonstrates several key aspects related to AI usage:

1. Local AI Model Integration:
   - Utilizes text-generation-webui to host and run AI models locally.
   - Demonstrates how to interface a web application with locally hosted AI models.

2. Custom Prompt Engineering:
   - Generates dynamic prompts based on user input (characters, genre, tone).
   - Showcases how to structure prompts for creative text generation tasks.

3. Character-Driven Narrative Generation:
   - Incorporates user-created characters into the story generation process.
   - Demonstrates complex prompt construction to guide AI in using specific elements in its output.

4. Genre and Tone Control:
   - Allows users to specify the genre and tone of the generated story.
   - Shows how to influence AI output through high-level style instructions.

5. Model Flexibility:
   - The app's design allows for easy testing of different AI models through text-generation-webui.
   - Enables experimentation with various model sizes and capabilities.

6. API Integration:
   - Implements API calls to the local AI service, mimicking real-world AI service integration.

7. Asynchronous AI Content Generation:
   - Handles asynchronous story generation, providing a responsive user experience.

8. Context Window Utilization:
   - The app's structure allows for testing different context window sizes by adjusting prompt length and complexity.

## Future Enhancements
- Implement comparison functionality between different AI models.
- Add options for adjusting generation parameters (temperature, top_p, etc.).
- Incorporate a feature to fine-tune models on custom datasets.
- Implement a system for users to rate and provide feedback on generated stories.

## Contributing
We welcome contributions to improve the Story Telling App, especially in areas of AI integration and prompt engineering. Please feel free to submit issues, fork the repository and send pull requests!

## License
[MIT License](https://opensource.org/licenses/MIT)

## Acknowledgments
- The oobabooga team for creating text-generation-webui.
- The open-source AI community for providing accessible language models.
- All contributors and testers who helped shape this project.