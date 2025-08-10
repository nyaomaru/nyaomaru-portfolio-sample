type InputLineProps = {
  /** The current text in the input field */
  value: string;
  /** Handler for when the input text changes */
  onChange: (s: string) => void;
  /** Handler for when the user submits the command (presses Enter) */
  onSubmit: (s: string) => void;
};

const InputLine: React.FC<InputLineProps> = ({ value, onChange, onSubmit }) => {
  /**
   * If the Enter key is pressed and the input is not empty,
   * submit the trimmed command.
   */
  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim()) onSubmit(value.trim());
  };

  return (
    <div className='flex items-center pt-4 shrink-0'>
      <span className='mr-2 text-[#50fa7b]'>{'>'}</span>
      <input
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKey}
        placeholder='Type a command to learn more about me...'
        className='flex-1 bg-transparent border-none outline-none text-[#f8f8f2]
                     placeholder-gray-500 caret-[#50fa7b]'
      />
    </div>
  );
};
InputLine.displayName = 'InputLine';

export { InputLine };
