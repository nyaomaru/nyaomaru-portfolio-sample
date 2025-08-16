import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button, Card } from '@/shared/ui';
import { profileSections } from '../model';

const Profile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % profileSections.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + profileSections.length) % profileSections.length
    );
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-4'>
      <div className='w-full max-w-2xl'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className='p-8 text-center min-h-[20rem] flex flex-col'>
              <div className='flex-1 flex flex-col justify-center'>
                <div className='text-4xl mb-4'>
                  {profileSections[currentIndex].icon}
                </div>
                <h2 className='text-2xl font-bold mb-4'>
                  {profileSections[currentIndex].title}
                </h2>
                <p className='text-lg leading-relaxed'>
                  {profileSections[currentIndex].content}
                </p>
              </div>

              <div className='mt-6 min-h-[2.5rem] flex items-end justify-center'>
                {profileSections[currentIndex].link && (
                  <motion.a
                    href={profileSections[currentIndex].link}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover='hover'
                    className='group inline-flex items-center gap-1 font-semibold
                   text-sky-500 hover:text-sky-600 focus:outline-none'
                  >
                    <span className='relative'>
                      View&nbsp;More
                      <span
                        className='absolute left-0 -bottom-0.5 h-0.5 w-full scale-x-0
                       bg-gradient-to-r from-sky-500 to-indigo-500
                       transition-transform duration-300 ease-out
                       group-hover:scale-x-100'
                      />
                    </span>

                    <motion.span
                      variants={{
                        hover: { x: 4 },
                        initial: { x: 0 },
                      }}
                      className='inline-block'
                    >
                      <ArrowRight size={18} strokeWidth={2} />
                    </motion.span>
                  </motion.a>
                )}
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className='flex justify-center mt-8 gap-4'>
          <Button onClick={prevSlide} variant={'profile'}>
            Previous
          </Button>
          <Button onClick={nextSlide} variant={'profile'}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
Profile.displayName = 'Profile';

export { Profile };
