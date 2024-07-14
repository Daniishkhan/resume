// src/components/CLI.tsx

import React, { useState, useRef, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { processCommand } from '../utils/commandProcessor';

interface OutputLine {
  type: 'input' | 'output';
  content: string;
}

const CLI: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<OutputLine[]>([]);
  const outputEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!initializedRef.current) {
      executeCommand('help');
      initializedRef.current = true;
    }
  }, []);

  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  const executeCommand = (command: string) => {
    const result = processCommand(command);
    if (result === 'CLEAR_TERMINAL') {
      setOutput([]);
    } else {
      setOutput(prevOutput => [
        ...prevOutput,
        { type: 'input', content: `$ ${command}` },
        { type: 'output', content: result }
      ]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      executeCommand(input.trim());
      setInput('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const renderFormattedContent = (content: string) => {
    return (
      <Typewriter
        words={[content]}
        typeSpeed={20}
        deleteSpeed={50}
        delaySpeed={1000}
        cursor={false}
      />
    );
  };

  return (
    <div className="bg-cli-box p-4 rounded-lg w-full max-w-2xl shadow-lg h-[600px] flex flex-col">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Danish Afzal Khan</h1>
        <p className="text-cli-secondary">AI-focused Senior Software Engineer</p>
      </div>
      <div className="bg-cli-bg p-2 rounded flex-grow overflow-y-auto font-mono">
        {output.map((line, index) => (
          <div key={index} className="mb-2">
            {line.type === 'input' ? (
              <span className="text-cli-accent">{line.content}</span>
            ) : (
              renderFormattedContent(line.content)
            )}
          </div>
        ))}
        <div ref={outputEndRef} />
        <div className="flex items-center">
          <span className="text-cli-accent mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="bg-transparent outline-none flex-grow text-cli-text"
            autoFocus
          />
        </div>
      </div>
      <div className="mt-4 text-cli-secondary text-sm">
        Type 'help' for available commands and press Enter to execute.
      </div>
    </div>
  );
};

export default CLI;