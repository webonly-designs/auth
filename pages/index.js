import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  if(session) {
    return (
      <div className="bg-black flex flex-col items-center justify-center h-screen">
        <img src={session.user.image} className="w-16 h-16 rounded-full mb-3" />
        <h1 className="text-3xl text-white mb-1">Hello, {session.user.name}</h1>
        <h2 className="text-slate-100 mb-3 text-lg">Follow And Save The Reel for Later Reference!!</h2>
        <button onClick={() => signOut()} className="py-2 px-6 bg-sky-500 rounded-lg hover:bg-sky-400 text-white">Sign Out</button>
      </div>
    )
  } else {
    return (
      <div className="bg-black flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl text-white mb-3">Next Auth Tutorial</h1>
        <button onClick={() => signIn()} className="py-2 px-6 bg-sky-500 rounded-lg hover:bg-sky-400 text-white">Sign In</button>
      </div>
    )
  }
}
