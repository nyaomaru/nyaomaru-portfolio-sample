import { motion } from 'framer-motion';
import { Terminal } from '@/widgets/terminal/ui';
import { useAnimation } from '@/shared/lib/animation';

const Top = () => {
  const { isVisible } = useAnimation();

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-4 pt-24'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 1 }}
        className='text-4xl font-bold mb-8'
      >
        nyaomaru is?
      </motion.div>
      <div className='w-full flex justify-center'>
        <Terminal />
      </div>
    </div>
  );
};
Top.displayName = 'Top';

export { Top };
