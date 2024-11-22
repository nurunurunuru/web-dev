import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Router/Routes/router'
import { Toaster } from 'react-hot-toast'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <>
      <Helmet>
        <meta name="description"
          content="DevZone IT offers comprehensive web design and development solutions tailored to meet the needs of businesses seeking an impactful online presence. Our services prioritize SEO friendliness, ensuring your website ranks well on search engines and attracts organic traffic. With a keen understanding of the latest trends and technologies, our expert team crafts visually appealing and user-friendly websites that drive engagement and conversions. From responsive design to robust backend development, we deliver tailored solutions that align with your objectives and resonate with your target audience. Trust DevZone IT to elevate your online presence and propel your business forward in the digital landscape." />
        <meta name="author" content="DevZone IT" />
        <meta name="robots"
          content="web developer agency, web designer,devzone it, devzone it team member, devzone it web service, best web solution agency, bug fixing expert, web agency, frontend developer, backend developer, react developer, full stack web developer, web app, mern, node js, react js, express js, shopify, ecommerce, wordpress, landing design, web software company, digital marketing, graphics design, web developer team, web developer experts, best web agency, web service" />
        <meta name="keywords"
          content="devzoneit.com, devzoneit,web developer, web designer,devzone it, devzone it team member, devzone it web service, best web solution agency, bug fixing expert, web agency, frontend developer, backend developer, react developer, full stack web developer, web app, mern, node js, react js, express js, shopify, ecommerce, wordpress, landing design, web software company, digital marketing, graphics design, web developer team, web developer experts, best web agency, web service, best web service and solution" />
      </Helmet>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        toastOptions={{
          style: {
            padding: "20px 20px",
            fontSize: "20px",
            fontFamily: "var(--font-secondary)",
            backgroundColor: "rgba(0,0,0,0.8)",
            color: "var(--primary)",
            border: "2px solid var(--primary-trans-50)"
          },
          success: {
            iconTheme: {
              primary: "var(--primary)"
            }
          }
        }}
      ></Toaster>
    </>
  )
}

export default App
