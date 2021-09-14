
function geraCurriculo(event){
    
    event.preventDefault()

    const nome = document.getElementById( 'name' ).value;
    document.querySelector('.curriculo-nome').innerHTML = nome; 

    const nacionalidade = document.getElementById( 'nacionalidade' ).value;
    document.querySelector('.curriculo-nacionalidade').innerHTML = nacionalidade; 

    const endereco = document.getElementById( 'endereco' ).value;
    document.querySelector('.curriculo-endereco').innerHTML = endereco; 

    const bairro = document.getElementById( 'bairro' ).value;
    document.querySelector('.curriculo-bairro').innerHTML = bairro; 

    const telefone = document.getElementById( 'telefone' ).value;
    document.querySelector('.curriculo-telefone').innerHTML = telefone; 

    const email = document.getElementById( 'e-mail' ).value;
    document.querySelector('.curriculo-email').innerHTML = email; 

    const linkedin = document.getElementById( 'linkedin' ).value;
    document.querySelector('.curriculo-linkedin').innerHTML = linkedin; 

    const github = document.getElementById( 'github' ).value;
    document.querySelector('.curriculo-github').innerHTML = github; 

    const objetivo = document.getElementById( 'objetivo').value;
    document.querySelector('.curriculo-objetio').innerHTML = objetivo; 

    const formacao1 = document.getElementById( 'formacao1' ).value;
    document.querySelector('.curriculo-primeira-formacao').innerHTML = formacao1; 

    const instituicao1 = document.getElementById( 'instituicao1' ).value;
    document.querySelector('.curriculo-primeira-universidade').innerHTML = instituicao1 ; 

    const formacao2 = document.getElementById( 'formacao2' ).value;
    document.querySelector('.curriculo-segunda-formacao').innerHTML = formacao2; 

    const instituicao2 = document.getElementById( 'instituicao2' ).value;
    document.querySelector('.curriculo-segunda-universidade').innerHTML = instituicao2; 

    const empresa1 = document.getElementById( 'empresa1' ).value;
    document.querySelector('#curriculo-primeira-empresa').innerHTML = empresa1;

    const cargo1 = document.getElementById( 'cargo1' ).value;
    document.querySelector('#curriculo-primeiro-cargo').innerHTML = cargo1 ; 

    const atribuicoes1 = document.getElementById( 'atribuicoes1' ).value;
    document.querySelector('#curriculo-primeira-experiencia').innerHTML = atribuicoes1; 

    const empresa2 = document.getElementById( 'empresa2' ).value;
    document.querySelector('#curriculo-segunda-empresa').innerHTML = empresa2; 

    const cargo2 = document.getElementById( 'cargo2' ).value;
    document.querySelector('#curriculo-segundo-cargo').innerHTML = cargo2; 

    const atribuicoes2 = document.getElementById( 'atribuicoes2' ).value;
    document.querySelector('#curriculo-segunda-experiencia').innerHTML = atribuicoes2; 

    const empresa3 = document.getElementById( 'empresa3' ).value;
    document.querySelector('#curriculo-terceira-empresa').innerHTML = empresa3; 

    const cargo3 = document.getElementById( 'cargo3' ).value;
    document.querySelector('#curriculo-terceiro-cargo').innerHTML = cargo3; 

    const atribuicoes3 = document.getElementById( 'atribuicoes3' ).value;
    document.querySelector('#curriculo-terceira-experiencia').innerHTML = atribuicoes3; 

    const atividade1 = document.getElementById( 'atividade1' ).value;
    document.querySelector('.curriculo-primeira-atividade').innerHTML = atividade1; 

    const atividade2 = document.getElementById( 'atividade2' ).value;
    document.querySelector('.curriculo-segunda-atividade').innerHTML = atividade2; 

    const atividade3 = document.getElementById( 'atividade3' ).value;
    document.querySelector('.curriculo-terceira-atividade').innerHTML = atividade3; 

    const atividade4 = document.getElementById( 'atividade4' ).value;
    document.querySelector('.curriculo-quarta-atividade').innerHTML = atividade4; 

    const idioma1 = document.getElementById( 'idioma1' ).value;
    document.querySelector('.curriculo-primeiro-idioma').innerHTML = idioma1; 

    const idioma2 = document.getElementById( 'idioma2' ).value;
    document.querySelector('.curriculo-segundo-idioma').innerHTML = idioma2; 

    document.getElementById('form-input').style.display="none";
    document.getElementById('section-curriculo').style.display="flex";
    document.getElementById('buttons').style.display="flex";
}

function voltar(){

    document.getElementById('form-input').style.display="flex";
    document.getElementById('form-input').style.flexDirection="column";
    document.getElementById('buttons').style.display="none";
    document.getElementById('section-curriculo').style.display="none";


}


function modelo1(){

    const fotoPerfil = document.querySelector( '#section-curriculo' );
   
    const foto = document.querySelector( '#section-curriculo img' );
   
    fotoPerfil.removeChild(foto);

}



function modelo2() {

   const fotoPerfil = document.getElementById( 'section-curriculo' );
   const foto = document.createElement('img');
   foto.src="./assets/narutinho.jpg";
   fotoPerfil.appendChild(foto);

}
