/* eslint-disable consistent-return */
import dbConnect from '../../../utils/dbConnect';
import Curso3 from '../../../models/Curso3';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const cursos = await Curso3.find();
        // .then((cursos) => res.json({ data: cursos }));
        return res.status(200).json({ data: cursos });
      } catch (error) {
        return res.status(500).json({ error });
      }
    case 'POST':
      try {
        const { nombre } = req.body;
        const { apellidoPaterno } = req.body;
        const { apellidoMaterno } = req.body;
        const { edad } = req.body;
        const { correo } = req.body;
        const { telefono } = req.body;

        const newCurso3 = Curso3({
          nombre,
          apellidoPaterno,
          apellidoMaterno,
          edad,
          correo,
          telefono,

        });
        const student = await newCurso3.save();
        return res.status(200).json({ success: true, data: student });
      } catch (error) {
        return res.status(500).json({ error });
      }
    default:
  }
};
