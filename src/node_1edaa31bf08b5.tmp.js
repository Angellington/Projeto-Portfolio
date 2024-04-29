/* CSS em alta performace */
@charset "UTF-8";

/* Josefin Sans Font */
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Prata&display=swap');
/* Prata Font */
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Prata&display=swap');


html {
    color: #fff;
    scroll-behavior: smooth;
}

body {
    color: #ffffff;
    margin: auto 0;
    
    max-width: 100%;
    background: linear-gradient(150deg, #000000, #ff77b4);
	background-size: 120% 120%;
}


p {
    font-family: "Josefin Sans", sans-serif;
}

h1, h2 {
    font-family: "Prata", sans-serif;
}


/* cabecalho */
.cabecalho {
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: px 60px;
    margin: 40px;
}

/* cabecalho logo */
.cabecalho .logo {
    background-color: rgba(0, 0, 0, 0);
    width: 65px;
    height: 65px;
    text-align: center;
    line-height: 60px;
    border-radius: 100%;
    border: solid 3px #ffffff;
    transition: 0.2s;
    text-decoration: underline;

    
}

.cabecalho .logo:hover {
    background-color: rgb(0, 0, 0);
    width: 65px;
    height: 65px;
    text-align: center;
    line-height: 60px;
    border-radius: 100%;
    border: solid 0px #ffffff00;
    transition: 0.2s;
}

/* título */
@media screen and (max-width: 774px) {
    .cabecalho .titulo {
        user-select: none;
        display: none;
    }
}
.cabecalho .titulo {
    user-select: none;
}

/* cabecalho menu */
.cabecalho .menu ul {
    background-color: rgba(0, 0, 0, 0);
    border-radius: 70px;
    transition: 0.2s;
    border: solid 3px rgb(255, 255, 255);
    transition: 0.2px;
}

.cabecalho .menu ul:hover {
    background-color: black;
    border-radius: 70px;
    transition: 0.2s;
    border: solid 3px black;
}

.cabecalho .menu ul li {
    padding: 15px;
    font-size: 16px;
    text-transform: capitalize;
    font-family: Roboto;
    transition: 0.2s;
}


/* Bloco 1 */
.bloco-1 {
    
    display: flex;
    justify-content: space-between;
    min-height: calc(100vh - 95px);
    gap: 10px;
    align-items: center;
    margin-left: 10%;
    margin-right: 10%;
    flex-wrap: wrap;
    
}

@media screen and (max-width: 774px) {
    .bloco-1 {
    display: flex;
    justify-content: center;
    min-height: calc(100vh - 95px);
    gap: 10px;
    align-items: center;
    margin: 0px;
    
    
    flex-wrap: wrap;
    }

    .bloco-1 .informacoes {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin: 0px;
        max-width: 0%;
    }
}
}
.bloco-1 .informacoes {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 0px;
    max-width: 50%;
}

.bloco-1 .informacoes h1 {
    font-size: 32px;
    margin-bottom: 20px;
    font-family: "Prata", sans-serif;
}

.bloco-1 .informacoes p {
    font-size: 20px;
    letter-spacing: 2px;
}

.bloco-1 .redes {
    display: flex;
    gap: 20px;
}

.bloco-1 .redes i {
    border: solid #fff 3px;
    padding: 12px;
    border-radius: 100%;
    font-size: 26px;
    text-align: center;
    margin-top: 20px;
    transition: 0.2s;
}

.bloco-1 .redes i:hover {
    border: solid #858585 3px;
    color: #c5c5c5;
    transform: scale(1.2);
}

@media screen and (max-width: 500px) {
    .cabecalho .titulo {
        user-select: none;
        display: none;
    }
}
.container-foto > img {
    border-radius: 100%;
    width: 100%;
    border: solid rgba(255, 255, 255, 0) 10px;
    background: linear-gradient(to right, #8a35c8, #18c063, #00eea2);
	background-size: 180% 180%;
	animation: gradient-animation 5s ease infinite;
}

.projetos {
    padding-bottom: 80px;
    
}

.projetos .titulo {
    text-align: center;
    font-size: 40px;
    text-transform: uppercase;
    font-family: roboto;
    font-weight: 500;
    padding: 60px 0;
}

.projetos .projeto-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
}

.projetos .projeto-ativo {
    max-width: 260px;
	max-height: 500px;
	position: relative;
	display: display;

}

.projetos .projeto-ativo img {
    border-radius: 20px;
}

.projetos .projeto-ativo h2 {
    background-color: black;
    width: 100%;
	padding-bottom: 10px;
	padding-top: 10px;
	position: absolute;
	bottom: 0;
    text-align: center;
    border-radius: 0 0 20px 20px;

}

.projetos .projeto-ativo .informacao-projeto {
	background-color: #040203;
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	font-weight: 600;
	opacity: 0%;
	transition: 0.3s;
	padding: 20px;
    border-radius: 20px;
}

.projetos .projeto-ativo:hover .informacao-projeto {
	opacity: 0.7;
	background-color: #000;
}

button {
    display: none;
}


@keyframes gradient-animation {
	0% {
		background-position: 0% 50%;
	}

	50% {
		background-position: 100% 50%;
	}

	100% {
		background-position: 0% 50%;
	}
}