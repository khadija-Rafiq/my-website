// // pages/api/contact-form.js
// export default async function handler(req, res) {
//     if (req.method === "POST") {
//       const { fullName, email, phone, message } = req.body;
  
//       // Validation
//       if (!fullName || !email || !message) {
//         return res.status(400).json({ error: "All required fields must be filled." });
//       }
  
//       try {
//         // Save data to database or log it (example: console.log)
//         console.log("Contact Form Submission:", { fullName, email, phone, message });
  
//         // Respond with success
//         res.status(200).json({ message: "Your message has been received!" });
//       } catch (error) {
//         console.error("Error saving contact form data:", error);
//         res.status(500).json({ error: "Something went wrong. Please try again later." });
//       }
//     } else {
//       res.status(405).json({ error: "Method not allowed" });
//     }
//   }
  