import { Outlet,Navigate } from "react-router-dom"

const AuthLayout = () => {
  const isAuthenticated = false
  return (
    <>
    {isAuthenticated?(
      <Navigate to ="/"/>
    ):(
      <>
      <section className="flex flex-1 justify-center items-center flex-col py-10">
       <Outlet/> 
      </section>
      <img src="https://images.unsplash.com/photo-1562448079-b5631888445f?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="logo" 
      className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"/>
      </>
    )}
    </>
  )
}

export default AuthLayout