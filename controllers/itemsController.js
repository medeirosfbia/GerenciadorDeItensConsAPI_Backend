const express = require('express');
const router = express.Router()
const Item = require('../models/Item')

router.get('/', async (req, res) => {
    try {
        const items = await Item.findAll();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao buscar itens.',
            details: error.message
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, price, used, fk_category } = req.body;
        await Item.create({ name, price, used, fk_category });
        res.status(200).json({ message: 'Cadastrado com sucesso' });
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao cadastrar item.',
            details: error.message
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findByPk(req.params.id);
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao buscar item pelo ID.',
            details: error.message
        });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        await Item.destroy({
            where: { id_item: req.params.id },
        });
        res.status(200).json({ message: 'Excluído com sucesso' });
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao excluir item.',
            details: error.message
        });
    }
});

router.put('/:id', async(req, res) => {
    try {
        const { name, price, used, fk_category } = req.body;
        await Item.update(
            { name, price, used, fk_category },
            {
                where: { id_item: req.params.id },
            }
        );
        res.status(200).json({ message: 'Atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao atualizar item.',
            details: error.message
        });
    }
});

module.exports = router;