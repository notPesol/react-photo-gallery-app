import useFirestore from '../hooks/useFirestore';

import { motion } from 'framer-motion';

const ImagrGrid = ({setSelectedImg}) => {
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <motion.div onClick={()=> setSelectedImg(doc.url)} className="img-wrap" key={doc.id}
          whileHover={{scale: 1.1, cursor: 'pointer'}}
          layout
        >
          <motion.img src={doc.url} alt={doc.name}
            initial={{opacity: 0.1}}
            animate={{opacity: 1}}
            transition={{delay: 1}}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default ImagrGrid
