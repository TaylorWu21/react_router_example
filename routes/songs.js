var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Song = require('../models/song');

router.get('/', (req, res) => {
	Song.find( (err, songs) => {
		res.json(songs);
	});
});

router.post('/', (req, res) => {
	new Song({
		title: req.body.title,
		artist: req.body.artist,
		lyrics: req.body.lyrics
	}).save( (err, song) => {
		res.json(song);
	});
});

router.get('/:id', (req, res) => {
	Song.findById(req.params.id, (err, song) => {
		res.json(song);
	});
});

module.exports = router;