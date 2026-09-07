import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Get In Touch
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quaerat unde quam dolor culpa veritatis inventore.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-3 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <LocationOnIcon className="mx-auto text-indigo-600 mb-3" fontSize="large" />
            <h3 className="font-semibold text-gray-800">
              102 Street 2714 Donovan
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Lorem ipsum dolor sit amet
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <PhoneIcon  className="mx-auto text-indigo-600 mb-3" fontSize="large"/>
            <h3 className="font-semibold text-gray-800">
              +02 1234 567 88
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Lorem ipsum dolor sit amet
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <EmailIcon className="mx-auto text-indigo-600 mb-3" fontSize="large" />
            <h3 className="font-semibold text-gray-800">
              info@example.com
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow p-6 md:p-10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">Send Us</h3>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your name *
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your email *
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject *
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your message
              </label>
              <textarea
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Write your message"
              ></textarea>
            </div>

            <div className="text-left">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
