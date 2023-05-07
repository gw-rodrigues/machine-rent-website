export function ContactFormFull() {
  return (
    <section className="relative h-auto">
      <div className="absolute z-0 w-full h-[600px] overflow-hidden">
        <div className="h-full bg-banner-form bg-cover bg-no-repeat animate-breathe">
          <div className="bg-gray-900/40 h-full"></div>
        </div>
      </div>

      <div className="relative z-10 px-4 py-8 mx-4 mt-40 rounded bg-gray-100 text-gray-700 ">
        <header className="text-center">
          <h2>Plan the booking with us</h2>
          <h3 className="pt-2">
            Get in touch with us. We answer promptly to all messages.
          </h3>
        </header>
        <form className="grid grid-cols-1 gap-2 mt-8">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <label htmlFor="phone">Telephone:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Telephone"
            required
          />
          <label htmlFor="checkin">Check-in:</label>
          <input
            type="date"
            name="checkin"
            id="checkin"
            placeholder="Check-in"
            required
          />
          <label htmlFor="checkout">Check-out:</label>
          <input
            type="date"
            name="checkout"
            id="checkout"
            placeholder="Check-out"
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Message"
            required
          ></textarea>
          <div className="flex gap-2 items-center my-2">
            <input type="checkbox" name="terms" id="terms" required />
            <span className="text-sm">I consent to the GDPR Terms.</span>
          </div>
          <button className="btn-big" type="submit">
            Send Email
          </button>
        </form>
      </div>
    </section>
  )
}
