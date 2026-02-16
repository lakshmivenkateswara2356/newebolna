import React from 'react'
import PageHeader from '../components/PageHeader'
import ContactSection from '../components/ContactSection'

const Contacts = () => {
  return (
    <>
    <section className="py-20 bg-white">
           <PageHeader title="Contact Us" />
        </section>
        <ContactSection/>
        </>
  )
}

export default Contacts
