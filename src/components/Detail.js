import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Detail() {
	const { id } = useParams();
	const [movie, setMovie] = useState();
	console.log(id);

	useEffect(() => {
		// Grab movies from database

		db.collection("movies")
			.doc(id)
			.get()
			.then((doc) => {
				if (doc.exists) {
					// save the movie data
					setMovie(doc.data());
					console.log(movie);
				} else {
					return;
				}
			});
	}, []);

	return (
		<Container>
			<Background>
				<img src={movie?.backgroundImg} alt="" />
			</Background>

			<ImgTitle>
				<img src="/images/logo.svg" alt="" />
			</ImgTitle>

			<Controls>
				<PlayButton>
					<img src="/images/play-icon-black.png" alt="" />
					<span>PLAY</span>
				</PlayButton>

				<TrailerButton>
					<img src="/images/play-icon-white.png" alt="" />
					<span>Trailer</span>
				</TrailerButton>

				<AddButton>
					<span>+</span>
				</AddButton>

				<GroupWatchButton>
					<img src="/images/group-icon.png" alt="" />
				</GroupWatchButton>
			</Controls>

			<Subtitle>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta aliquam
				magnam consectetur! cupiditate.
			</Subtitle>

			<Description>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit
				perferendis quidem, commodi ullam quae recusandae praesentium accusamus
				voluptatum debitis mollitia ratione nesciunt hic quisquam rerum, unde at
				vero a!
			</Description>
		</Container>
	);
}

export default Detail;

const Container = styled.div`
	min-height: calc(100vh - 60px);
	padding: 0 calc(3.5vw + 5px);
	position: relative;
`;

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -1;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.7;
	}
`;

const ImgTitle = styled.div`
	height: 20vh;
	width: 20vw;
	min-height: 170px;
	min-width: 200px;
	margin-top: 20px;
	margin-bottom: 20px;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

const Controls = styled.div`
	display: flex;
	align-items: center;
`;

const PlayButton = styled.button`
	border-radius: 4px;
	font-size: 15px;
	display: flex;
	align-items: center;
	height: 56px;
	background-color: rgb(249, 249, 249);
	border: none;
	padding: 0 24px;
	margin-right: 22px;
	letter-spacing: 1.8px;
	cursor: pointer;

	&:hover {
		background-color: rgb(198, 198, 198);
	}
`;

const TrailerButton = styled(PlayButton)`
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid rgb(249, 249, 249);
	color: rgb(249, 249, 249);
	text-transform: uppercase;
`;

const AddButton = styled.button`
	width: 44px;
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	cursor: pointer;
	border: 1px solid #fff;
	background-color: rgba(0, 0, 0, 0.6);
	margin-right: 16px;
	span {
		font-size: 30px;
		color: #fff;
	}
`;

const GroupWatchButton = styled(AddButton)`
	background-color: rgb(0, 0, 0);
`;

const Subtitle = styled.div`
	color: rgb(249, 249, 249);
	font-size: 15px;
	min-height: 20px;
	margin-top: 26px;
`;

const Description = styled.div`
	line-height: 1.4;
	font-size: 20px;
	margin-top: 20px;
	max-width: 700px;
`;
