/* eslint-disable eol-last */
import dbConnect from '../../../utils/dbConnect';
import Curso6 from '../../../models/Curso6';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const inscritos = await Curso6.find({});
        res.status(200).json({ success: true, data: inscritos });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const nuevoIngreso = await Curso6.create(req.body);
        res.status(201).json({ success: true, data: nuevoIngreso });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
  }
};