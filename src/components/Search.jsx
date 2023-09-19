import { useState } from "react";
import {AiOutlineCloseSquare} from "react-icons/ai"

export default function Search({ filteredImages, setLoading, searchKey }) {
    const [item, setItem] = useState(filteredImages)
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
      <div className="absolute sm:top-[150px] top-[80px] left-0 w-full bg-black rounded-xl py-10 z-[99]">
          <AiOutlineCloseSquare className="absolute top-5 right-8 text-xl w-fit" onClick={setLoading} />
          <h2 className="sm:text-2xl text-lg sm:pl-28 pl-16 text-left">Search results for <span className="italic text-red-500">{searchKey}</span></h2>
          <h3 className="text-sm text-center italic text-pink-400 font-bold py-5 underline">You can move things around here too</h3>

           <div className="flex items-center justify-center flex-wrap sm:gap-10 gap-5">
        {item.map((img, index) => (
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
          
          </div>
        ))}
      </div>
    </div>
  )
}
