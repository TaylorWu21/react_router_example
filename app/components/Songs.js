import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class Songs extends React.Component {
	constructor(props) {
		super(props);
		this.addSong = this.addSong.bind(this);
		this.state = { songs: [] }
	}

	componentWillMount() {
		$.ajax({
			url: '/api/songs',
			type: 'GET'
		}).done( songs => {
			this.setState({ songs });
		})
	}

	addSong(e) {
		e.preventDefault();
		let title = this.refs.title.value
		let artist = this.refs.artist.value
		let lyrics = this.refs.lyrics.value
		$.ajax({
			url: '/api/songs',
			type: 'POST',
			data: { title: title, artist: artist, lyrics: lyrics }
		}).done( song => {
			this.refs.form.reset();
			this.setState({
			songs: [ {...song}, ...this.state.songs ]
			});
		})
	}

	render() {
			let songs = this.state.songs.map( song => {
				return(
					<li key={song._id} className="collection-item">
						<Link to={`/songs/${song._id}`}>
							{song.title}
						</Link>
					</li>
				);
			});
		return(
			<div className='row'>
				<form className="col m4" ref="form" onSubmit={this.addSong}>
					<input ref="title" placeholder="title" />
					<input ref="artist" placeholder="artist" />
					<label>Lyrics</label>
					<textarea ref="lyrics"></textarea>
					<button className='btn' type='submit'>Add Song</button>
				</form>
				<ul className="col m8 collection">
					{songs}
				</ul>
			</div>
		)
	}
}

export default Songs;