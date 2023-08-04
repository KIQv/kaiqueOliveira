<section class="contato" id="contato">
    <article class="innerWidth">
        <div class="conteudoContato">
            <div class="infoContato">
                <div class="titulo">
                    <span class="barTitle"></span>
                    <h2>CONTATO</h2>
                </div>
                <div class="conteudoInfo">
                    <p>Gostou do meu portfolio? entre em contato caso tenha alguma duvida ficaria feliz em responder</p>
                    <p>Caso queira me dar alguma dica ou sugestão também pode entrar em contato  :)</p>
                    <p id="contatoInfo">Telefone: +55 (11) 96967-0335</p>
                    <p id="contatoInfo">E-mail: kaiqueoliveira257@gmail.com</p>
                </div>
            </div>
            <div class="formContato">
                <form action="email.php" method="POST" onsubmit="enviarForm(event)">
                    <input type="text" name="name" id="nomeForm" placeholder="Nome:" autocomplete="off" required>
                    <input type="email" name="email" id="emailForm" placeholder="E-mail:" autocomplete="off" required>
                    <textarea name="message" id="mensagemForm" cols="30" rows="10" placeholder="Mensagem:" autocomplete="off" required></textarea>
                    <button class="button" type="submit" value="Enviar">ENVIAR</button>
                    <div class="alerta">
                        <p class="sucesso" id="sucesso">Sua mensagem foi enviada com sucesso!</p>
                        <p class="erro" id="erro">Sua mensagem não foi enviada :(<br>Verifique se preencheu tudo corretamente!</p>
                    </div>
                </form>
            </div>
        </div>
    </article>
</section>