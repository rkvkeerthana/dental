import "./EnquirySection.css";

export default function EnquirySection() {
  return (
    <section className="enquiry-section" id="enquiry">
      <div className="enquiry-container">

        <div className="enquiry-left">
  <h2 className="enquiry-title">Book Your Appointment</h2>

  <p>
    Fill out the enquiry form and our dental specialists will contact
    you shortly to schedule your appointment.
  </p>

  <ul>
    <li>✔ Experienced Doctors</li>
    <li>✔ Modern Equipment</li>
    <li>✔ Affordable Treatments</li>
    <li>✔ Emergency Support</li>
  </ul>
</div>

<div className="enquiry-right">
  <form>

    <div className="form-row">
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter phone number"
          required
        />
      </div>

      <div className="form-group">
        <label>Treatment</label>
        <select required>
          <option>Select Treatment</option>
          <option>Dental Checkup</option>
          <option>Teeth Cleaning</option>
          <option>Dental Implant</option>
          <option>Root Canal</option>
          <option>Braces</option>
        </select>
      </div>
    </div>

    <div className="form-group">
      <label>Message</label>
      <textarea
        rows="5"
        placeholder="Write your enquiry..."
      ></textarea>
    </div>

    <button type="submit">
      Submit Enquiry
    </button>

  </form>
</div>     </div>
    </section>
  );
}