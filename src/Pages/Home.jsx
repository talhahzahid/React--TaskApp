import React, { useEffect, useRef, useState } from 'react'
import { collection, addDoc, getDocs , deleteDoc , doc} from "firebase/firestore";
import { db } from '../Config/Firebase/Firebaseconfig';
import { MdModeEdit } from "react-icons/md";




const Home = () => {

  const [data, setData] = useState([])

  const title = useRef()
  const task = useRef()


  const addTask = async (event) => {
    event.preventDefault();
    console.log(title.current.value);
    console.log(task.current.value);
    const currentDate = new Date();
    console.log(currentDate.toDateString());
    // send data to firebase 
    try {
      const docRef = await addDoc(collection(db, "users task"), {
        title: title.current.value,
        task: task.current.value,
        date: currentDate.toDateString(),
      });
      getDataFromFirebase()
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    title.current.value = ''
    task.current.value = ''
  }
  const getDataFromFirebase = async () => {
    const querySnapshot = await getDocs(collection(db, "users task"));
    const task = []
    querySnapshot.forEach((doc) => {
      task.push({ id: doc.id, ...doc.data() })
      console.log(`${doc.id}}`);
      console.log(doc.data());
    });
    setData(task)
  }
  useEffect(() => {
    getDataFromFirebase()
  }, [])

  const deleteData = async (id) =>{
    await deleteDoc(doc(db, "users task", id));
    getDataFromFirebase()
  }





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


      <div className='flex justify-center items-center   flex-wrap gap-10  mt-10'>
        {
          data.map((item) => {
            return (
              <div key={item.id}>
                <div className='bg-slate-600 mt-3 p-7 w-[400px] h-[200px]  rounded-lg text-center text-white'>
                  <h1 className='text-2xl font-semibold '>Title : {item.title}</h1>
                  <h1 className='text-xl font-semibold'>Task : {item.task.slice(0, 20)}....</h1>
                  <h1 className='text-xl font-semibold'>{item.date}</h1>
                  <div className='flex justify-center gap-10 mt-4'>
                    <button className='btn btn-success'><MdModeEdit />
                    </button>
                    <button className='btn btn-error' onClick={()=> deleteData(item.id)}>Delete</button>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>


    </>
  )
}

export default Home