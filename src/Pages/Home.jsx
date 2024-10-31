import React, { useRef, useState } from 'react'
import { collection, addDoc ,getDocs } from "firebase/firestore";
import { db } from '../Config/Firebase/Firebaseconfig';



const Home = () => {
  
  const [data , setData] = useState([])

  const title = useRef()
  const task = useRef()


  const addTask = async (event) => {
    event.preventDefault();
    console.log(title.current.value);
    console.log(task.current.value);
    // send data to firebase 
    try {
      const docRef = await addDoc(collection(db, "users task"), {
        title: title.current.value,
        task: task.current.value,
        // born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    title.current.value = ''
    task.current.value = ''
  }


  const getDataFromFirebase = async () => {
const querySnapshot = await getDocs(collection(db, "users task"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id}}`);
  console.log(doc.data());
  
  setData([...doc.data])
});
  }

  getDataFromFirebase()


  return (
    <>
      <h1 className='text-3xl font-serif text-center mt-7'>Task App</h1>
      <div className='flex justify-center items-center mt-[2rem]'>
        <div className='bg-slate-700 p-10 max-w-xs w-full rounded-lg shadow-2xl'>
          <form onSubmit={addTask} className='space-y-4'>
            <input type="text" className='border border-black p-2 w-full rounded-md' placeholder='Title' ref={title} />
            <input type="text" className='border border-black p-2 w-full rounded-md' placeholder='Enter Task' ref={task} />
            <button type="submit" className='btn btn-primary w-full '>Add Task</button>
          </form>
        </div>
      </div>


      {
  data.map((item,index) => {
    return (
      <div key={index}> {/* Assuming each item has a unique 'id' */}
        <h1>{item.task}</h1> {/* Displaying item.task */}
      </div>
    );
  })
}


    </>
  )
}

export default Home