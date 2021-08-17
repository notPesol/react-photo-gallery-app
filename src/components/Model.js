import { motion } from "framer-motion"

const Model = ({ selectedImg, onClick }) => {
  return (
    <motion.div onClick={onClick} className="backdrop"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
      <motion.img src={selectedImg} alt="Model"
        initial={{y: "-100vh"}}
        animate={{y: 0}}
      />
    </motion.div>
  )
}

export default Model
