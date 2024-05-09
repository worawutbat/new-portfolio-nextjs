import { AnimatePresence, motion } from 'framer-motion';

interface ISliceShow {
  src: string;
}

function SliceShow({ src }: ISliceShow) {
  return (
    <AnimatePresence>
      <motion.img key={src} src={src} initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }} />
    </AnimatePresence>
  );
}

export default SliceShow;
