/* eslint-disable consistent-return */
/* eslint-disable eol-last */
import dbConnect from '../../../utils/dbConnect';
import Contacto from '../../../models/Contacto';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const contacto = await Contacto.find({});
        return res.status(200).json({ success: true, data: contacto });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
    case 'POST':
      try {
        const contacto = await Contacto.create(req.body);
        return res.status(201).json({ success: true, data: contacto });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
    default:
  }
};