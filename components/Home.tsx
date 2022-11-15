import { Button } from "@mui/material";
import { animate, motion } from "framer-motion";
import { useState } from "react";

function MyAnimation() {
  return <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  />
}

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-3">
      <h1
        className="text-3xl font-bold underline"
      >
        Welcome to nextjs
      </h1>
      <Button
        variant="contained"
        className="text-blue-400 mt-2"
      >
        hi
      </Button>

      <MyAnimation key={count} />
    </div>
  )
}
