import {NextApiRequest, NextApiResponse} from "next";
import {createTransport} from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const {name, email, phone, subject, message} = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

  if (!name || !email || !subject || !message) return res.status(400).json({message: "Missing fields"});
  if (!email.includes("@")) return res.status(400).json({message: "Invalid email"});
  if (phone && (phone.length < 10 || phone.length > 20)) return res.status(400).json({message: "Invalid phone number"});
  if (subject.length > 100) return res.status(400).json({message: "Subject too long"});
  if (message.length > 1000) return res.status(400).json({message: "Message too long"});
  if (name.length > 100) return res.status(400).json({message: "Name too long"});
  if (email.length > 100) return res.status(400).json({message: "Email too long"});

  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS
    }
  });

  transporter.sendMail({
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: "Demande de contact avec ValDesign",
    html: `
      <div style="
        background: linear-gradient(45deg, rgb(7, 0, 121) 0%, rgb(29, 29, 197) 35%, rgba(0,106,255,1) 100%);
        padding: 2rem;
        border-radius: 1rem;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      ">
        <div style="
          background: rgba(0, 0, 0, 0.5);
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          width: 100%;
        ">
          <h1 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;">Demande de contact</h1>
          <p style="font-size: 1.2rem; font-weight: 400; margin-bottom: 1rem;">Bonjour ${name}, vous venez de faire une demande de contact avec ValDesign.</p>
          <p style="font-size: 1.2rem; font-weight: 400; margin-bottom: 1rem;">Voici ses coordonnées:</p>
          <ul style="font-size: 1.2rem; font-weight: 400; margin-bottom: 1rem; list-style: none; padding: 0; text-align: left; margin-left: 1rem; margin-top: 1rem; line-height: 1.5;">
            <li>Email: <a href="mailto:${email}" style="color: rgb(230, 230, 230); text-decoration: none;">${email}</a></li>
            ${phone ? `<li>Téléphone: ${phone}</li>` : ""}
          </ul>
          <h1 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;">Sujet du message</h1>
          <p style="font-size: 1.2rem; font-weight: 400; margin-bottom: 1rem;">${subject}</p>
          <h1 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;">Message</h1>
          <p style="font-size: 1.2rem; font-weight: 400; margin-bottom: 1rem;">${message}</p>
        </div>
      </div>
    `
  }, (err, _info) => {
    if (err) return res.status(500).json({message: "Email failed to send",error: err});
    res.status(200).json({message: "Email_sent_successfully"});
  });
}
