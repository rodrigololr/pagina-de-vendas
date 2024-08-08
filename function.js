document.getElementById("saibaMais").addEventListener("click", function() {
    document.getElementById("ultimaSection").scrollIntoView({ behavior: 'smooth' });
});


document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            const answer = item.querySelector('.faq-answer');
            const isVisible = answer.style.display === 'block';

            // Fechar todas as respostas antes de abrir a resposta clicada
            faqItems.forEach(item => {
                const answer = item.querySelector('.faq-answer');
                answer.style.display = 'none';
                item.querySelector('.faq-question').classList.remove('active');
            });

            // Abrir a resposta clicada e mudar a cor da pergunta para azul
            answer.style.display = isVisible ? 'none' : 'block';
            question.classList.toggle('active');
        });
    });
});



setTimeout(function(){

    var request = new XMLHttpRequest();

    request.open('GET','https://jsonplaceholder.typicode.com/todos/1', true);

    request.onload = function(){
        if(this.status >= 200 && this.status <= 400){
            //tudo certo
            var data = JSON.parse(this.response);
            console.log(data)
        }
        else{
            //erro
        }
        
    }


    request.onerror = function(){

    }

    request.send();


},3000)