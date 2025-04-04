import React, { useState } from 'react';
import Button from './Button';

const PageSelectionDialog = () => {
  // State for page selections with initial state (all unselected)
  const [pages, setPages] = useState([
    { id: 0, text: "All pages", selected: false },
    { id: 1, text: "Page 1", selected: false },
    { id: 2, text: "Page 2", selected: false },
    { id: 3, text: "Page 3", selected: false },
    { id: 4, text: "Page 4", selected: false }
  ]);
  
  // Function to handle the "All pages" selection
  const handleAllPages = () => {
    const allPagesCurrentState = pages[0].selected;
    // Toggle all pages based on current state of "All pages"
    setPages(pages.map(page => ({ ...page, selected: !allPagesCurrentState })));
  };
  
  // Function to toggle individual page selection
  const togglePage = (id) => {
    if (id === 0) {
      // If "All pages" is clicked, use the handler above
      handleAllPages();
    } else {
      // For individual pages, just toggle that specific page
      setPages(pages.map(page => 
        page.id === id ? { ...page, selected: !page.selected } : page
      ));
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full flex justify-center items-center p-4">
      {/* Frame identifier at top */}
      <div className="w-full max-w-md">
        
        {/* White card container with shadow */}
        <div className="bg-white rounded-lg shadow-lg">
          <div className="px-6 py-6">
            {/* Page selection items */}
            <div className="space-y-5 mb-6">
              {pages.map((page) => (
               <div>
                 <div 
                  key={page.id} 
                  className="flex items-center justify-between cursor-pointer" 
                  onClick={() => togglePage(page.id)}
                >
                  <span className="text-gray-800 text-base">{page.text}</span>
                
                  <input
                    type="checkbox"
                    checked={page.selected}
                    onChange={() => togglePage(page.id)}
                    className="form-checkbox h-5 w-5 text-yellow-400 border-gray-300 rounded focus:ring-yellow-500"
                  />
                </div>
                {page.id ==0&&<hr  className=' opacity-10 mt-5'/>}
               </div>
              ))}
            </div>
            <hr  className=' opacity-10'/>
            {/* Done button */}
            <Button title="Done" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSelectionDialog;