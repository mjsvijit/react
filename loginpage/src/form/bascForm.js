import React,{useState} from 'react'

export const BascForm = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("")
   const [allEntry, setAllEntry] = useState([])
   const submitForm =(e)=>{
        e.preventDefault();
        const newEntry={email:email, password:password};
        setAllEntry([...allEntry, newEntry]);
   }
  return (
      <>
      <form action="" onSubmit={submitForm}>
    <div>
  
    <label htmlFor='email' >Email</label>
    <input type="text" name="email" id="email" autoComplete='off'   value={email}
        onChange={(e)=>{ setEmail(e.target.value)}}
    />
    
    </div>
    <div>
  
    <label htmlFor='password' >Password</label>
    <input type="text" name="password" id="password" autoComplete='off' value={password}
    onChange={(e)=>{ setPassword(e.target.value)
    }}
    />
    

    </div>
    <button type="submitForm" >Login</button>
   </form>

   <div>
        {
            allEntry.map((curelm)=>{ 
                return(
                    <div className='showDataStyle'>
                    <p>{curelm.email}</p>
                    <p>{curelm.password}</p>
                    </div>
                )
                 } )
        }
   
   </div>
    </>
  )
}

