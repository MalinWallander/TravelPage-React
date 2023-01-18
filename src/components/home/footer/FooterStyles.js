import styled from 'styled-components';
export const Box = styled.div`
padding: 2rem;
background: #F9F9F9;
bottom: 0;
width: 100%;
@media (max-width: 1000px) {
	padding: 2rem 1rem;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
gap:.75rem;
text-align: left;
color:#000000;
`;

export const Row = styled.div`
display: grid;
padding :0 6rem;
grid-template-columns: repeat(5,1fr);
grid-gap: 1rem;
@media (max-width: 768px) {
	grid-template-columns: repeat(3,1fr);
	padding :0 4rem;
}
@media (max-width: 600px) {
	grid-template-columns: repeat(2,1fr);
	padding :0 2rem;
}
`;

export const FooterLink = styled.a`
white-space: nowrap;
color:#000000;
font-size: 1rem;
text-decoration: none;
transition:all .5s ease-in;
font-weight:400;

&:hover {
	font-weight:600;
	color: green;
}
`;

export const Heading = styled.div`
font-size: 1.25rem;

font-weight: bold;
`;

export const HeadingWide = styled.p`
width: 250px;
font-size: 16px;


font-weight: bold;
`;


export const Input = styled.input`
 border:none;
 letter-spacing:1.5px;
outline:none

`;
export const ImageContainer = styled.div`
display: flex;
align-items:center ;
justify-content:flex-start ;

`;

export const Img = styled.img`
    width:34px;
		height:34px;
		margin-right:1rem;
`;
export const Imgbusiness = styled.img`
    width:20px;
		height20px;
		margin-left:.5rem;
`;
export const Subscribe = styled.div`
width:100%;
display:flex;
padding:0rem 1rem;
align-items:center;
gap:.75rem;
background-color:'#F9F9F9';
`;
export const Leftdiv = styled.div`
width:80%;
display:flex;
align-items:center;
background-color:#ffffff;
justify-content:center ;
padding:.75rem 1rem;
gap:.75rem;
border-radius:1rem;
`;
export const Rightdiv = styled.div`
width:20%;
`;
export const InputContainer = styled.div`
width:70%;
`;
export const ImageButton = styled.img`
    width:50px;
		height50px;
	
`;


