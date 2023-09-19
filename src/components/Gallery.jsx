import { useState } from "react"
import {imageData} from "../utils/imageData"

export default function Gallery() {
  const [item, setItem] = useState(imageData)
   const [draggedItem, setDraggedItem] = useState(null);

 
 const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
  };

  const handleDragEnter = (e, index) => {
    e.preventDefault();
    if (index !== draggedItem) {
      const newList = [...item];
      newList.splice(draggedItem, 1);
      newList.splice(index, 0, item[draggedItem]);
      setItem(newList);
      setDraggedItem(index);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };


  return (
    <section className="w-full font-poppins md:pt-2 pt-0 pb-16 ">
      
      <div className="text-center flex flex-col gap-y-1 md:my-10 my-5">
        <h3 className="font-semibold md:text-3xl">Welcome to my Image Gallery</h3>
        <p className="text-sm italic text-pink-400">Use your mouse to move things arounds</p>
      </div>

      <div className="flex items-center justify-center flex-wrap sm:gap-10 gap-5">
        {item?.map((img, index) => (
          <div
            draggable="true"
           onDragStart={(e) => handleDragStart(e, index)}
          onDragEnter={(e) => handleDragEnter(e, index)}
          onDragOver={(e) => handleDragOver(e)}
          onDragEnd={handleDragEnd}
            key={img.id}
            className={`z-[1] transition-all ease-in duration-200 md:w-[200px] lg:w-[300px] xl:w-[350px] w-[130px] md:h-[200px] lg:h-[300px] xl:h-[350px] h-[130px] rounded-lg border-2 border-white/30 relative cursor-grab`}>
            <img
              src={img.source}
              alt={img.info}
              className="w-full h-full object-cover rounded-lg" />
            <p className="absolute top-2 right-4 text-pink-600 font-bold text-lg bg-black/50 px-2 rounded-md object-center">{img.tag}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


