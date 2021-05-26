import React from "react";
import styled from "styled-components";

function Login() {
	return (
		<Container>
			<CTA>
				<CTALogoOne src="/images/cta-logo-one.svg" />
				<SignUp>GET ALL THERE</SignUp>
				<Description>
					Get premier access to Raya and the alst dragon for an additional fee
					with a disney subscription. as of 03/05/28. The price of Disney+ and
					the Disney bundle will increase by $1.
				</Description>
				<CTALogoTwo src="/images/cta-logo-two.png" />
			</CTA>
		</Container>
	);
}

export default Login;

const Container = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: top;
	height: calc(100vh - 60px);
	&:before {
		position: absolute;
		content: "";
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-position: top;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url("/images/login-background.jpg");
		z-index: -1;
		opacity: 0.7;
	}
`;

const CTA = styled.div`
	max-width: 650px;
	padding: 80px 40px;
	width: 90%;
	display: flex;
	flex-direction: column;
	margin-top: 100px;
	align-items: center;
`;

const CTALogoOne = styled.img``;

const CTALogoTwo = styled.img`
	width: 90%;
`;

const SignUp = styled.a`
	width: 100%;
	background-color: #0063e5;
	font-weight: bold;
	padding: 15px 0;
	color: #f9f9f9;
	border-radius: 4px;
	text-align: center;
	font-size: 17px;
	cursor: pointer;
	transition: all 250ms linear;
	letter-spacing: 1.5px;
	margin-top: 8px;
	margin-bottom: 12px;

	&:hover {
		background-color: #0483ee;
	}
`;

const Description = styled.p`
	letter-spacing: 1.5px;
	font-size: 11px;
	text-align: center;
	text-transform: capitalize;
	line-height: 1.5;
`;
