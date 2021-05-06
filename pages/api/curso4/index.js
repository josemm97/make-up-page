/* eslint-disable consistent-return */
import dbConnect from '../../../utils/dbConnect';
import Curso4 from '../../../models/Curso4';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const cursos = await Curso4.find();
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

        const newCurso2 = Curso4({
          nombre,
          apellidoPaterno,
          apellidoMaterno,
          edad,
          correo,
          telefono,

        });
        const student = await newCurso2.save();
        return res.status(200).json({ success: true, data: student });
      } catch (error) {
        return res.status(500).json({ error });
      }
    default:
  }
};
