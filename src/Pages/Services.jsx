
import PageHeader from '../components/PageHeader'

import ServicesSection from '../components/ServicesSection'
import ProcessSteps from '../components/ProcessSteps'
import Footer from '../components/Footer'

const Services = () => {
  return (
    
           <>
     

      <section className="py-20 bg-white">
         <PageHeader title="Services That Drive Real Business Results." />
       
      </section>
       <div className="max-w-7xl mx-auto px-6">
          
          <ServicesSection/>
          <ProcessSteps/>
        </div>
        <Footer/>
    </>

    
  )
}

export default Services
