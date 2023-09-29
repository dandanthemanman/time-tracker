const mongoose = require('mongoose')
const Entries = require("../models/entryModel")

// function declaration
const getEntries = async (req, res) => {
    try {
        const entries = await Entries.find()
        res.status(200).json(entries)
    } catch (err) {
        res.status(400).json({'error': error})
    }
}

const getEntry = async (req, res) => {
    const { id } = req.params; 
    try {
        const entries = Entries.findById({ _id: id });
        res.status(200).json(entries)
    } catch (err) {
        res.status(400).json({'error': error})
    }
}

deleteEntry = async(req, res) => {
    const { id } = req.params;
    try {
        const entries = await Entries.findByIdAndDelete({ _id: id });
        res.status(200).json(entries)
    } catch (error) {
        res.status(400).json({"error": "coudlnt delete the document"})
    }
}

const updateEntry = async(req, res) => {
    const { id } = req.params; 
    try {
        const entries = await Entries.findByIdAndUpdate({ _id: id }, { ...req.body });
        res.status(200).json(entries)
    } catch {
        res.status(400).json({"error":"couldn't update the document"})
    }
}