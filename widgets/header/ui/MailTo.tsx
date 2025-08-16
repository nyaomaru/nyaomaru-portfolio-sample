import { Mail, Copy } from 'lucide-react';
import { toast } from 'sonner';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui';
import { CONTACT } from '@/shared/constants';

const MailTo = () => {
  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(CONTACT.EMAIL);
      toast('Mail address copied!');
    } catch (error) {
      console.error('Failed to copy mail address:', error);
      toast('Failed to copy mail address. Please try again.');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Mail className='h-4 w-4' />
          <span className='sr-only'>Send email</span>
        </Button>
      </DialogTrigger>
      <DialogContent className='text-center space-y-2 sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Contact via Email</DialogTitle>
          <DialogDescription className='text-sm text-gray-500'>
            Please copy the email address below
          </DialogDescription>
        </DialogHeader>
        <p className='font-medium text-lg'>{CONTACT.EMAIL}</p>
        <Button variant='outline' onClick={handleCopy} className='gap-2'>
          <Copy className='w-4 h-4' />
          Copy
        </Button>
      </DialogContent>
    </Dialog>
  );
};
MailTo.displayName = 'MailTo';

export { MailTo };
