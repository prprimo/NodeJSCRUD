import {Router} from 'express';
import {Usuario} from '../models/Usuario';

export const usuarios = Router();

usuarios.get('', async (req, res, next) => {
  Usuario.findAll()
  .then(users => 
    res.status(200).json({ users })
  )
  .catch(err => 
    res.status(500).json({ err: ['oops', err] })
  );

  // try {
  //   res.json(await Usuario.scope(req.query['scope']).findAll());
  // } catch (e) {
  //   next(e);
  // }
});

usuarios.get('/:id', async (req, res, next) => {
  try {
    const usuario = await Usuario.scope(req.query['scope']).findById(req.params['id']);
    res.json(usuario);
  } catch (e) {
    next(e);
  }
});

usuarios.post('/', async (req, res, next) => {
  try {
    

    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (e) {
    
    res.status(202).json(e.message);
    next(e);
  }
});

usuarios.put('/:id', async (req, res, next) => {
  try {
    await Usuario.update(req.body, {where: {UsuarioID: req.params['id']}});
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

usuarios.delete('/:id', async (req, res, next) => {
  try {
    await Usuario.destroy({where: {UsuarioID: req.params['id']}});
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});
