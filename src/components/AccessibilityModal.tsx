import { useState } from 'react';
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';

const AccessibilityModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-xs text-violet-400 hover:text-yellow-200 underline focus:outline-none focus:ring-2 focus:ring-violet-300"
        aria-label="Accessibility Statement"
        type="button"
      >
        Accessible site: built for all adventurers
      </button>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(false)}
        >
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              aria-hidden="true"
            />
          </TransitionChild>
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="bg-zinc-900 text-white rounded-lg p-6 max-w-md w-full border-2 border-violet-600 shadow-lg">
                <DialogTitle className="text-xl font-bold mb-2">
                  Accessibility Statement
                </DialogTitle>
                <Description as={'div'} className="mb-4">
                  This site was built with accessibility in mind:
                  <ul className="list-disc pl-6 my-2 text-sm">
                    <li>Semantic HTML &amp; ARIA</li>
                    <li>Keyboard navigation</li>
                    <li>Color contrast checked</li>
                    <li>Alt text for all images</li>
                    <li>Mobile friendly</li>
                  </ul>
                  If you spot an issue, please{' '}
                  <a
                    href="mailto:svanberg92@gmail.com"
                    className="underline text-yellow-300"
                  >
                    email me
                  </a>
                  !
                </Description>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  type="button"
                >
                  Close
                </button>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AccessibilityModal;
