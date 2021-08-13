import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
	selectUserName,
	selectUserPhoto,
	setSignOut,
	setUserLogin,
} from "../features/user/userSlice";
import { auth, provider } from "../firebase";
import { useHistory } from "react-router-dom";

function Header() {
	const userName = useSelector(selectUserName);
	const userPhoto = useSelector(selectUserPhoto);
	const dispatch = useDispatch();
	const history = useHistory();

	const signIn = () => {
		auth.signInWithPopup(provider).then((result) => {
			let user = result.user;
			dispatch(
				setUserLogin({
					name: user.displayName,
					email: user.email,
					photo: user.photoURL,
				})
			);
		});
	};

	const signOut = () => {
		auth.signOut().then(() => {
			dispatch(setSignOut());
			history.push("/");
		});
	};

	return (
		<Nav>
			<Logo src={"/images/logo.svg"} />

			{/* {!userName ? (
				<Login onClick={signIn}>Login</Login>
			) : (
				<> */}
			<NavMenu>
				<a>
					<img src="/images/home-icon.svg" alt="" />
					<span>HOME</span>
				</a>
				<a>
					<img src="/images/search-icon.svg" alt="" />
					<span>SEARCH</span>
				</a>
				<a>
					<img src="/images/watchlist-icon.svg" alt="" />
					<span>WATCHLIST</span>
				</a>
				<a>
					<img src="/images/original-icon.svg" alt="" />
					<span>ORIGINALS</span>
				</a>
				<a>
					<img src="/images/movie-icon.svg" alt="" />
					<span>MOVIES</span>
				</a>
				<a>
					<img src="/images/series-icon.svg" alt="" />
					<span>SERIES</span>
				</a>
			</NavMenu>

			{/* <UserImg
				src="https://res.cloudinary.com/ayotheinspired/image/upload/v1620670514/samples/people/smiling-man.jpg"
				onClick={signOut}
			/> */}
			{/* </>
			)} */}
		</Nav>
	);
}

export default Header;

const Nav = styled.nav`
	height: 60px;
	background-color: #090b13;
	color: #fff;
	display: flex;
	align-items: center;
	padding: 0 36px;
	overflow-x: hidden;
`;

const Logo = styled.img`
	width: 80px;
`;

const NavMenu = styled.div`
	display: flex;
	flex: 1;
	margin-left: 25px;
	align-items: center;

	a {
		display: flex;
		align-items: center;
		padding: 0 12px;
		cursor: pointer;

		img {
			height: 20px;
		}

		span {
			font-size: 13px;
			letter-spacing: 1.42px;
			position: relative;

			&:after {
				content: "";
				height: 2px;
				width: 100%;
				background-color: #fff;
				position: absolute;
				left: 0;
				right: 0;
				bottom: -6px;
				opacity: 0;
				transform-origin: center;
				transform: scaleX(0);
				transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
			}
		}

		&:hover {
			span:after {
				transform: scaleX(1);
				opacity: 1;
			}
		}
	}
`;

const UserImg = styled.img`
	width: 48px;
	height: 48px;
	cursor: pointer;
	object-fit: cover;
	border-radius: 50%;
`;

const Login = styled.div`
	border: 1px solid #f9f9f9;
	padding: 8px 16px;
	border-radius: 4px;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	background-color: rgba(0, 0, 0, 0.6);
	cursor: pointer;
	margin-left: auto;
	font-weight: 600;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: #f9f9f9;
		color: #000;
		border-color: transparent;
	}
`;
