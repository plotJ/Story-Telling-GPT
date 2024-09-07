"use client";

import { useState } from "react";
import { useChat } from "ai/react";

interface Character {
  id: number;
  name: string;
  description: string;
  personality: string;
}

export default function Chat() {
  const { messages, append, isLoading } = useChat();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [newCharacter, setNewCharacter] = useState<Omit<Character, 'id'>>({ name: '', description: '', personality: '' });

  const genres = [
    { emoji: "🧙", value: "Fantasy" },
    { emoji: "🕵️", value: "Mystery" },
    { emoji: "💑", value: "Romance" },
    { emoji: "🚀", value: "Sci-Fi" },
  ];
  const tones = [
    { emoji: "😊", value: "Happy" },
    { emoji: "😢", value: "Sad" },
    { emoji: "😏", value: "Sarcastic" },
    { emoji: "😂", value: "Funny" },
  ];

  const [state, setState] = useState({
    genre: "",
    tone: "",
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleCharacterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCharacter({ ...newCharacter, [e.target.name]: e.target.value });
  };

  const addCharacter = () => {
    if (newCharacter.name && newCharacter.description && newCharacter.personality) {
      setCharacters([...characters, { ...newCharacter, id: Date.now() }]);
      setNewCharacter({ name: '', description: '', personality: '' });
    }
  };

  const editCharacter = (id: number, field: keyof Character, value: string) => {
    setCharacters(characters.map(char => 
      char.id === id ? { ...char, [field]: value } : char
    ));
  };

  const deleteCharacter = (id: number) => {
    setCharacters(characters.filter(char => char.id !== id));
  };

  const generateStory = () => {
    const characterInfo = characters.map(char => 
      `${char.name}: ${char.description}. Personality: ${char.personality}`
    ).join('\n');

    const prompt = `Generate a ${state.genre} story in a ${state.tone} tone.${characters.length > 0 ? `\n\nIncorporate the following characters into your story:\n${characterInfo}\n\nEnsure that each character plays a significant role in the narrative. After the story, provide a brief summary of each character's role and development in the narrative.` : ''}`;

    append({
      role: "user",
      content: prompt,
    });
  };
  return (
    <main className="mx-auto w-full p-8 flex flex-col bg-gray-900 text-white min-h-screen">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center">Story Telling App</h2>
        <p className="text-gray-300 text-center mt-2">
          Create characters and customize the story by selecting the genre and tone.
        </p>
      </div>

      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-4">Characters</h3>
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                name="name"
                value={newCharacter.name}
                onChange={handleCharacterChange}
                placeholder="Character Name"
                className="p-2 text-black rounded bg-gray-200 w-full md:w-2/3"
              />
              <textarea
                name="description"
                value={newCharacter.description}
                onChange={handleCharacterChange}
                placeholder="Character Description"
                className="p-2 text-black rounded bg-gray-200 w-full md:w-2/3 h-20"
              />
              <textarea
                name="personality"
                value={newCharacter.personality}
                onChange={handleCharacterChange}
                placeholder="Character Personality"
                className="p-2 text-black rounded bg-gray-200 w-full md:w-2/3 h-20"
              />
              <button
                onClick={addCharacter}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-2/3"
              >
                Add Character
              </button>
            </div>
            <div className="mt-4 max-h-60 overflow-y-auto">
              {characters.map(char => (
                <div key={char.id} className="mb-2 p-2 bg-gray-700 rounded">
                  <input
                    value={char.name}
                    onChange={(e) => editCharacter(char.id, 'name', e.target.value)}
                    className="p-1 text-black rounded mb-1 bg-gray-200 w-full"
                  />
                  <textarea
                    value={char.description}
                    onChange={(e) => editCharacter(char.id, 'description', e.target.value)}
                    className="p-1 text-black rounded mb-1 bg-gray-200 w-full h-16"
                  />
                  <textarea
                    value={char.personality}
                    onChange={(e) => editCharacter(char.id, 'personality', e.target.value)}
                    className="p-1 text-black rounded mb-1 bg-gray-200 w-full h-16"
                  />
                  <button
                    onClick={() => deleteCharacter(char.id)}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mt-1 w-full"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <div className="bg-gray-800 rounded-lg p-4 mb-4">
            <h3 className="text-xl font-semibold mb-4">Genre</h3>
            <div className="grid grid-cols-2 gap-2">
              {genres.map(({ value, emoji }) => (
                <div
                  key={value}
                  className="p-2 bg-gray-700 rounded-lg flex items-center"
                >
                  <input
                    id={value}
                    type="radio"
                    value={value}
                    name="genre"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor={value}>
                    {`${emoji} ${value}`}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 mb-4">
            <h3 className="text-xl font-semibold mb-4">Tones</h3>
            <div className="grid grid-cols-2 gap-2">
              {tones.map(({ value, emoji }) => (
                <div
                  key={value}
                  className="p-2 bg-gray-700 rounded-lg flex items-center"
                >
                  <input
                    id={value}
                    type="radio"
                    name="tone"
                    value={value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor={value}>
                    {`${emoji} ${value}`}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 w-full"
            disabled={isLoading || !state.genre || !state.tone}
            onClick={generateStory}
          >
            Generate Story
          </button>
        </div>
      </div>

      <div
        hidden={
          messages.length === 0 ||
          messages[messages.length - 1]?.content.startsWith("Generate")
        }
        className="bg-gray-800 rounded-lg p-4 w-full mt-8"
      >
        {messages[messages.length - 1]?.content}
      </div>
    </main>
  );
}
