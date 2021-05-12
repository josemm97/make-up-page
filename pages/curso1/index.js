/* eslint-disable consistent-return */
/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
/* eslint-disable eol-last */
import dbConnect from '../../../utils/dbConnect';
import Curso1 from '../../../models/Curso1';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const cursos = await Curso1.find();
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

        const newCurso1 = Curso1({
          nombre,
          apellidoPaterno,
          apellidoMaterno,
          edad,
          correo,
          telefono,

        });
        const student = await newCurso1.save();
        return res.status(200).json({ success: true, data: student });
      } catch (error) {
        return res.status(500).json({ error });
      }
    default:
  }
};