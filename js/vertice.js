//menu

const navbar = document.querySelector('.cont_menu');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

if (window.scrollY >= 300) {
    navbar.classList.add('nav-active');
} else {
    navbar.classList.remove('nav-active');
}

const navbar_mn = document.querySelector('.mn_mv_logo');
const navbar_mn_list = document.querySelector('.lista_movil');

window.addEventListener("load", function (event) {
    navbar_mn.addEventListener("click", (e)=>{
        
        var list_class = navbar_mn_list.classList[1] ;

        if(list_class === 'desplegado' ){
            navbar_mn_list.classList.remove("desplegado");
            document.body.style.overflowY = 'hidden';
        }
        else{
            if(list_class !== 'desplegado')
            {
                navbar_mn_list.classList.add("desplegado");
                document.body.style.overflowY = 'scroll';
            }
            
        }
    });
});




//proyectos arquitectura

const lista_tip = document.querySelectorAll(".arquitec_tipo div");
const tip_todo = document.getElementById('tp_todo');
const tp_concurso = document.getElementById('tp_concurso');
const tp_familiar = document.getElementById('tp_familiar');
const tp_educacion = document.getElementById('tp_educacion');
const tp_comercio = document.getElementById('tp_comercio');

if(tip_todo){

    tip_todo.addEventListener("click", (e)=>{

        [].forEach.call(lista_tip, (el) => {
            el.classList.remove("activado");
        });
    
        tip_todo.classList.add('activado');
    
        document.querySelector(".arquitec_lista.concurso").style.display = "none";
        document.querySelector(".arquitec_lista.familiar").style.display = "none";
        document.querySelector(".arquitec_lista.educacion").style.display = "none";
        document.querySelector(".arquitec_lista.comercio").style.display = "none";
        document.querySelector(".arquitec_lista.todos").style.display = "grid";
    });
    
    tp_concurso.addEventListener("click", (e)=>{
    
        [].forEach.call(lista_tip, (el) => {
            el.classList.remove("activado");
        });
        
        tp_concurso.classList.add('activado');
    
        document.querySelector(".arquitec_lista.todos").style.display = "none";
        document.querySelector(".arquitec_lista.familiar").style.display = "none";
        document.querySelector(".arquitec_lista.educacion").style.display = "none";
        document.querySelector(".arquitec_lista.comercio").style.display = "none";
        document.querySelector(".arquitec_lista.concurso").style.display = "grid";
    
    });
    
    tp_familiar.addEventListener("click", (e)=>{
    
        [].forEach.call(lista_tip, (el) => {
            el.classList.remove("activado");
        });
        tp_familiar.classList.add('activado');
    
        document.querySelector(".arquitec_lista.todos").style.display = "none";
        document.querySelector(".arquitec_lista.concurso").style.display = "none";
        document.querySelector(".arquitec_lista.educacion").style.display = "none";
        document.querySelector(".arquitec_lista.comercio").style.display = "none";
        document.querySelector(".arquitec_lista.familiar").style.display = "grid";
    
    });
    
    tp_educacion.addEventListener("click", (e)=>{
    
        [].forEach.call(lista_tip, (el) => {
            el.classList.remove("activado");
        });
        tp_educacion.classList.add('activado');
    
        document.querySelector(".arquitec_lista.todos").style.display = "none";
        document.querySelector(".arquitec_lista.concurso").style.display = "none";
        document.querySelector(".arquitec_lista.familiar").style.display = "none";
        document.querySelector(".arquitec_lista.comercio").style.display = "none";
        document.querySelector(".arquitec_lista.educacion").style.display = "grid";    
    
    });
    
    tp_comercio.addEventListener("click", (e)=>{
    
        [].forEach.call(lista_tip, (el) => {
            el.classList.remove("activado");
        });
        tp_comercio.classList.add('activado');
    
        document.querySelector(".arquitec_lista.todos").style.display = "none";
        document.querySelector(".arquitec_lista.concurso").style.display = "none";
        document.querySelector(".arquitec_lista.familiar").style.display = "none";
        document.querySelector(".arquitec_lista.educacion").style.display = "none";
        document.querySelector(".arquitec_lista.comercio").style.display = "grid";
    
    });

}

//proyectos bim

const tip_bim_todo = document.getElementById('tp_all_bim');
const tip_bim_curso = document.getElementById('tp_cursos');
const tip_bim_implement = document.getElementById('tp_implementacion');
const tip_bim_modelo = document.getElementById('tp_modelado');

if(tip_bim_todo){

    tip_bim_todo.addEventListener("click", (e)=>{

        [].forEach.call(lista_tip, (el) => {
            el.classList.remove("activado");
        });
    
        tip_bim_todo.classList.add('activado');
    
        document.querySelector(".arquitec_lista.curs").style.display = "none";
        document.querySelector(".arquitec_lista.modelados").style.display = "none";
        document.querySelector(".arquitec_lista.implementacion").style.display = "none";
        document.querySelector(".arquitec_lista.all_bim").style.display = "grid";
    });

    tip_bim_curso.addEventListener("click", (e)=>{

        [].forEach.call(lista_tip, (el) => {
            el.classList.remove("activado");
        });
    
        tip_bim_todo.classList.add('activado');
    
        document.querySelector(".arquitec_lista.all_bim").style.display = "none";
        document.querySelector(".arquitec_lista.modelados").style.display = "none";
        document.querySelector(".arquitec_lista.implementacion").style.display = "none";
        document.querySelector(".arquitec_lista.curs").style.display = "grid";
    });
    
    tip_bim_implement.addEventListener("click", (e)=>{
    
        [].forEach.call(lista_tip, (el) => {
            el.classList.remove("activado");
        });
    
        tip_bim_implement.classList.add('activado');
    
        document.querySelector(".arquitec_lista.all_bim").style.display = "none";
        document.querySelector(".arquitec_lista.modelados").style.display = "none";
        document.querySelector(".arquitec_lista.curs").style.display = "none";
        document.querySelector(".arquitec_lista.implementacion").style.display = "grid";
    });
    
    tip_bim_modelo.addEventListener("click", (e)=>{
    
        [].forEach.call(lista_tip, (el) => {
            el.classList.remove("activado");
        });
    
        tip_bim_modelo.classList.add('activado');
    
        document.querySelector(".arquitec_lista.all_bim").style.display = "none";
        document.querySelector(".arquitec_lista.implementacion").style.display = "none";
        document.querySelector(".arquitec_lista.curs").style.display = "none";
        document.querySelector(".arquitec_lista.modelados").style.display = "grid";
    });

}



