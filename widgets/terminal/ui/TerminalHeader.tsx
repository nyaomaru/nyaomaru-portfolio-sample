type TerminalHeaderProps = {
  /** Callback function triggered when the red button is clicked (reset terminal) */
  onRedButtonClick: () => void;
  /** Callback function triggered when the yellow button is clicked (toggle SVG) */
  onYellowButtonClick: () => void;
  /** Callback function triggered when the green button is clicked (show ASCII art) */
  onGreenButtonClick: () => void;
};

const TerminalHeader = ({
  onRedButtonClick,
  onYellowButtonClick,
  onGreenButtonClick,
}: TerminalHeaderProps) => (
  <div className='bg-[#1e1e1e] px-4 py-2 flex items-center border-b border-gray-700 shrink-0'>
    <div className='flex space-x-2'>
      <button
        onClick={onRedButtonClick}
        className='w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors cursor-pointer'
        title='Reset terminal'
      />
      <button
        onClick={onYellowButtonClick}
        className='w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors cursor-pointer'
        title='Toggle SVG'
      />
      <button
        onClick={onGreenButtonClick}
        className='w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors cursor-pointer'
        title='Show ASCII art'
      />
    </div>
    <div className='text-gray-400 text-sm flex-1 text-center'>Terminal</div>
  </div>
);
TerminalHeader.displayName = 'TerminalHeader';

export { TerminalHeader };
