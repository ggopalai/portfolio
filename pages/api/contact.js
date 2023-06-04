export default function handler(req, res) {
    if (req.method === 'POST') {
      // Process the form data here
      const { name, email, phoneNumber, suggestions } = req.body;
      
      // TODO - Replace with email generation?
      console.log(name, email, phoneNumber, suggestions);
  
      // Send a response
      res.status(200).json({ message: 'Form data processed successfully' });
    } else {
      // Handle unsupported methods
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  