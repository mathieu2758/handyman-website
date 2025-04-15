export default function HandymanPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-700 text-white py-6 px-4 shadow-md">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold">Mathieu Mouraire – Handyman Services</h1>
          <a href="tel:0449059081" className="mt-4 md:mt-0 bg-white text-blue-700 font-semibold px-4 py-2 rounded hover:bg-gray-100">Call Now: 0449 059 081</a>
        </div>
      </header>

      {/* About Section */}
      <section className="py-10 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          With over 10 years of experience in maintenance, repairs, and property care, I offer reliable and affordable handyman services across Kurrajong Heights and the Hawkesbury region. I take pride in delivering quality work with attention to detail and friendly service.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Services Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "General home repairs",
              "Gardening and landscaping",
              "Furniture assembly",
              "Airbnb maintenance",
              "Pressure washing",
              "Painting and patching",
              "Property management"
            ].map((service, i) => (
              <div key={i} className="p-4 bg-white rounded-xl shadow-md">
                <p className="text-lg">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-4">Call or text me directly at <strong>0449 059 081</strong> or send an email to <strong>mathieu1185@gmail.com</strong>.</p>
        <a href="mailto:mathieu1185@gmail.com" className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800">Email Me</a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600">
        <p>ABN: 26 776 018 147 · Serving Kurrajong Heights & Surrounds · Mon–Sat, 8am–5pm</p>
      </footer>
    </div>
  );
}
