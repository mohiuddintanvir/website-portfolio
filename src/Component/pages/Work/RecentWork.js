import React from 'react';

import { useLoaderData } from 'react-router-dom';

const RecentWork = ({work}) => {
   console.log(work)
    return (
        <div className='main'>
        
     <section >
      {
        work.map(wo=><dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </form>
      </dialog>)
      }
     
      </section>      


          
     
        </div>
    );
};

export default RecentWork;