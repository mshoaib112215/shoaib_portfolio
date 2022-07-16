import react from "react"
import { motion } from "framer-motion"

const MotionWrap = ( component, className ) => function HOC(){
  return (
    <motion.div
        whileInView = {{opacity: [0 ,1]}, }
    >

    </motion.div>
  )
}

export default MotionWrap