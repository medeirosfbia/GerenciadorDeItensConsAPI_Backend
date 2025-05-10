const express = require('express');
const router = express.Router();

const Categories = require('../models/Category')

router.get('/', async (req, res) => {
    try {
        const categories = await Categories.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ 
            error: 'Erro ao buscar categorias.',
            details: error.message 
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, description } = req.body;
        await Categories.create({ name, description });
        res.status(200).json({ message: 'Cadastrado com sucesso' });
    } catch (error) {
        res.status(500).json({ 
            error: 'Erro ao cadastrar categoria.',
            details: error.message 
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const categories = await Categories.findByPk(req.params.id);
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ 
            error: 'Erro ao buscar categoria pelo ID.',
            details: error.message 
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Categories.destroy({
            where: { id_categories: req.params.id },
        });
        res.status(200).json({ message: 'Excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ 
            error: 'Erro ao excluir categoria.',
            details: error.message 
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { name, description } = req.body;
        await Categories.update(
            { name, description },
            {
                where: { id_categories: req.params.id },
            }
        );
        res.status(200).json({ message: 'Atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ 
            error: 'Erro ao atualizar categoria.',
            details: error.message 
        });
    }
});

module.exports = router;