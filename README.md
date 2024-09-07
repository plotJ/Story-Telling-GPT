# Story Telling App

## Overview
This Story Telling App is an interactive web application that generates custom stories based on user-defined characters, genres, and tones. It leverages AI to create unique narratives tailored to user preferences.

## Features
- Character Creation: Users can add, edit, and delete custom characters with names, descriptions, and personalities.
- Genre Selection: Choose from Fantasy, Mystery, Romance, or Sci-Fi genres.
- Tone Selection: Set the story's tone as Happy, Sad, Sarcastic, or Funny.
- AI-Powered Story Generation: Utilizes advanced AI to create stories incorporating user-defined elements.
- Dark Mode Interface: Features a sleek, eye-friendly dark mode design.

## Tech Stack
- Next.js
- React
- TypeScript
- Tailwind CSS
- OpenAI API (or alternative AI service)

## Setup and Installation
1. Clone the repository:
   ```
   git clone https://github.com/your-username/story-telling-app.git
   ```
2. Navigate to the project directory:
   ```
   cd story-telling-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up environment variables:
   Create a `.env.local` file in the root directory and add your AI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```
5. Run the development server:
   ```
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage
1. Add characters using the character creation form.
2. Select a genre and tone for your story.
3. Click "Generate Story" to create a unique narrative.
4. Read and enjoy your custom-generated story!

## Homework Assignment Completion

This project fulfills the requirements of the weekend homework assignment as follows:

1. GitHub Repository: Created and maintained a GitHub repository for the project.
2. Collaborator Access: All group members were added as collaborators to the repository.
3. README.md: This file serves as the comprehensive README for the project.
4. Next.js Application: Developed a new application from scratch using Next.js.
5. Character Table Implementation:
   - Users can add, edit, and delete characters.
   - Each character has a name, description, and personality.
6. Custom Prompt Generation:
   - The app generates a story using user-created characters.
   - Genre and tone selections are incorporated into the prompt.
7. Character Summary:
   - The AI is instructed to provide a summary of each character's role after generating the story.
8. Model Testing:
   - The app is designed to work with different AI models.
   - Model selection can be easily implemented by modifying the API call in the backend.
9. Context Window and Model Size Experimentation:
   - The app's structure allows for easy testing of different context window sizes and model variations.
   - Observations on model performance can be documented separately.

## Future Enhancements
- Implement user authentication for saving and sharing stories.
- Add more genre and tone options.
- Incorporate visual elements or illustrations for generated stories.
- Implement a feature to export stories in various formats (PDF, ePub, etc.).

## Contributing
We welcome contributions to improve the Story Telling App. Please feel free to submit issues, fork the repository and send pull requests!

## License
[MIT License](https://opensource.org/licenses/MIT)

## Acknowledgments
- OpenAI for providing the AI capabilities.
- Next.js and React communities for excellent documentation and resources.
- All contributors and testers who helped shape this project.