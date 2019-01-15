import {Router} from 'express';
import {Usuario} from '../models/Usuario';

export const usuarios = Router();

usuarios.post('/', async (req, res, next) => {
  try {
    const inquilino = await Usuario.create(req.body);
    res.status(201).json(inquilino);
  } catch (e) {
    next(e);
  }
});

usuarios.get('', async (req, res, next) => {
  try {
    res.json(await Usuario.scope(req.query['scope']).findAll());
  } catch (e) {
    next(e);
  }
});

usuarios.get('/:id', async (req, res, next) => {
  try {
    const inquilino = await Usuario.scope(req.query['scope']).findById(req.params['id']);
    res.json(inquilino);
  } catch (e) {
    next(e);
  }
});

usuarios.put('/:id', async (req, res, next) => {
  try {
    await Usuario.update(req.body, {where: {id: req.params['id']}});
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

usuarios.delete('/:id', async (req, res, next) => {
  try {
    await Usuario.destroy({where: {id: req.params['id']}});
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});
