import { transporter, mailOptions } from "../../utils/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  phone: "Phone",
  offer: "Offer",
};

const generateEmailContent = (data) => {
  const generatePlainText = (data) => {
    return Object.entries(data).reduce((string, [key, val]) => {
      return (string += `${CONTACT_MESSAGE_FIELDS[key]}:\n${val}\n\n`);
    }, "New Contact Message:\n\n");
  };

  const emailTemplate = (body: any) => {
    return `
      <div style="font-family: Arial, sans-serif; background-color: #f0f0f0;">
        <table style="width: 100%; margin: 0 auto; background-color: #ffffff; border-collapse: collapse; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style="padding: 20px;">
            <h2 style="color: #333333; margin-bottom: 20px;">New Contact Message</h2>
              <ul style="list-style: none; padding-left: 0;">
                <li><strong style="color: #333333;">Name:</strong> ${body.name}</li>
                <li><strong style="color: #333333;">Phone:</strong> ${body.phone}</li>
                <li><strong style="color: #333333;">Email:</strong> ${body.email}</li>
              </ul>
              <p style="color: #555555;">Offer:</p>
              <p style="color: #555555;">${body.offer}</p>
            </td>
          </tr>
          <tr>
            <td style="background-color: #333333; padding: 20px; text-align: center; border-radius: 0 0 5px 5px;">
              <p style="color: #ffffff; margin: 0;">Best regards,</p>
              <p style="color: #ffffff; margin: 0;">Maksym Kopych</p>
            </td>
          </tr>
        </table>
      </div>
    `;
  };
  const plainTextData = generatePlainText(data);
  const htmlData = emailTemplate(data);

  const emailContent = {
    text: plainTextData,
    html: htmlData,
  };

  return emailContent;
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (
      !data.name ||
      !data.email ||
      !data.subject ||
      !data.phone ||
      !data.offer
    ) {
      res.status(400).json({ message: "Bad Request" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.subject,
      });
      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  } else {
    res.status(400).json({ message: "Bad Request" });
  }
};
export default handler;
