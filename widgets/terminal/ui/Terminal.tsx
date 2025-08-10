import { useAutoScroll } from '@/shared/lib/scroll';
import { TerminalHeader } from './TerminalHeader';
import { History } from './History';
import { InputLine } from './InputLine';
import { TerminalWaiting } from './TerminalWriting';
import { useTerminal } from '../model/useTerminal';

const Terminal = () => {
  const {
    history,
    input,
    isLoading,
    setInput,
    execCommand,
    handleTypingComplete,
    resetTerminal,
    toggleSvg,
    showAsciiArt,
  } = useTerminal();
  const { containerRef } = useAutoScroll(history);

  return (
    <div className='w-full max-w-lg sm:max-w-2xl md:w-[40rem] sm:w-[40rem] sm:h-[30rem] h-[70vh] flex flex-col rounded-lg shadow-2xl overflow-hidden p-2 sm:p-0'>
      <TerminalHeader
        onRedButtonClick={resetTerminal}
        onYellowButtonClick={toggleSvg}
        onGreenButtonClick={showAsciiArt}
      />

      <div className='flex-1 bg-[#1e1e1e] p-4 text-[#f8f8f2] font-mono flex flex-col min-h-0'>
        <History
          ref={containerRef}
          history={history}
          onDone={handleTypingComplete}
        />

        {isLoading && <TerminalWaiting isLoading={isLoading} />}

        <InputLine value={input} onChange={setInput} onSubmit={execCommand} />
      </div>
    </div>
  );
};
Terminal.displayName = 'Terminal';

export { Terminal };
