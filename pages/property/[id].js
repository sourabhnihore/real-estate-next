import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function PropertyPage(){
  const router = useRouter()
  const { id } = router.query
  const [p, setP] = useState(null)

  useEffect(()=>{
    if(!id) return
    fetch('/api/listings').then(r=>r.json()).then(listings=>{
      const found = listings.find(x=>x.id===id)
      setP(found || null)
    })
  },[id])

  if(!p) return <div>Loading...</div>

  return (
    <div>
      <Head>
        <title>{p.title} - [City Name]</title>
        <meta name="description" content={`${p.title} available for ${p.price}. Contact agent to view.`} />
      </Head>
      <Header />
      <main className="container py-12">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <img src={p.image} alt={p.title} className="w-full h-96 object-cover rounded" />
            <h1 className="text-3xl font-bold mt-6">{p.title}</h1>
            <p className="mt-4 text-gray-700">The apartment areas is a lot panrt to 7thurno (e) area, an area dity on lucentheite in vlnaner. In home opative in proximity to metro/2enoi rever, maviem kitenen, eine a hystem at a plant bathrooms and swimming pool.</p>
            <h3 className="text-xl font-semibold mt-6">Property Features</h3>
            <ul className="mt-3 space-y-2">
              {p.features.map((f,i)=>(<li key={i}>• {f}</li>))}
            </ul>
          </div>
          <aside className="col-span-1">
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Request a Viewing</h4>
              <form onSubmit={(e)=>{e.preventDefault(); alert('Request submitted (demo)')}}>
                <input className="w-full mb-3 p-2 border rounded" placeholder="Name" />
                <input className="w-full mb-3 p-2 border rounded" placeholder="Email" />
                <input className="w-full mb-3 p-2 border rounded" placeholder="Phone" />
                <textarea className="w-full mb-3 p-2 border rounded" placeholder="Your Message"></textarea>
                <button className="w-full p-3 bg-blue-800 text-white rounded">Request a Viewing</button>
              </form>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
