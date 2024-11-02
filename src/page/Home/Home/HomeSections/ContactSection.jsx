import { useForm } from "react-hook-form";
import SettingsPhoneSharpIcon from "@mui/icons-material/SettingsPhoneSharp";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import MailSharpIcon from "@mui/icons-material/MailSharp";
import SectionHeader from "../../../../Component/Utils/SectionHeader";
import toast from "react-hot-toast";
const contactInfo = [
  {
    label: "Address",
    info: "Mirpur, Dhaka 1216",
    icon: <LocationOnSharpIcon></LocationOnSharpIcon>,
  },
  {
    label: "Email",
    info: "exmple@gmail .com",
    icon: <MailSharpIcon></MailSharpIcon>,
  },
  {
    label: "Phone",
    info: "+880 17 715 504",
    icon: <SettingsPhoneSharpIcon></SettingsPhoneSharpIcon>,
  },
];

function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    toast.success("massage success");
  };

  return (
    <>
      <div id="contact" className="md:mt-28">
        <SectionHeader
          subHead={
            "Are You Ready to kickstart your project with a touch of magic?"
          }
          head={"I Wants To Hear From You"}
        ></SectionHeader>
        <div className="md:my-28 px-2 flex md:flex-row flex-col gap-2 items-start">
          <div className="w-full md:w-1/2 h-full flex-shrink-0 flex  bg-white shadow-md rounded-lg p-2 flex-col gap-2">
            {contactInfo.map((info, idx) => (
              <div key={idx}>
                <div className="flex items-start flex-col justify-center mr-2">
                  <h1>{info.icon}</h1>
                  <h2>{info.label}</h2>
                  <h2>{info.info}</h2>
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-1/2 mx-auto p-4 flex-shrink-0 bg-white shadow-md rounded-lg"
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full border-2 shadow-lg px-2 mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d942.1305940705679!2d90.43472670192493!3d23.760218868712606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1730556001300!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
