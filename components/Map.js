export default function Map() {
  return (
    <div className="w-full h-96 mt-12 rounded-lg overflow-hidden shadow-lg">
      <iframe
        title="Broker Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.6587511931198!2d75.87634617460174!3d22.740921779372176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd5db277e8ed%3A0xd93d33f390833d20!2s1305%2C%20Nanda%20Nagar%20Main%20Rd%2C%20Janta%20Quarter%2C%20Indore%2C%20Madhya%20Pradesh%20452011!5e0!3m2!1sen!2sin!4v1756815188317!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="rounded-lg"
      ></iframe>
    </div>
  );
}


// <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>