   Questão 4.1 - 

        1 - Ao se tratar de notificação instantanea eu pensaria em algo com websocket , como no firebase temos firebase realtime database, com o supabase algo similar , ou até mesmo um webhook , caso fosse inviável abrir tantas conexões ao mesmo tempo com o supabase 


        2- Se fosse em um servidor com backend eu teria uma noção que seria por em containers , orquestrando com Kubernetes , um load balancer para balancear as requisicoes e direcionar para os servidores com menos requisicoes , com o supabase nunca tive essa experiencia 



   Questão 4.2 - 

        1- O usuário se conecta ao WiFi (ou LAN) da rede, recebe um ip e um dns , e logo sua conexão é bloqueada pelo firewall do captive portal.

        Em seguida ele é redirecionado para página de login do captive portal que pode ser customizada , ele faz o login , o freeRadius faz a conexão do usuário com o banco de dados mysql que poode ser um servidor fora do pfsense ( e mais seguro !) 




        2- Primeiro eu tentaria identificar se o gateway / dns estão corretos , se ele consegue pingar algum site externo ( ou até mesmo algum tracert para ver até onde a rota dele está indo) 

        Para filtrar se não é problema no navegador , tentaria limpar o cache do navegador ou até mesmo um flushdns para limpar o cache do dns caso fosse preciso.

         Tentaria indetificar algum tipo de log no pfsense , sobre login do usuário , regras de firewall , algum tipo de token expirado , tentaria me conectar nessa rede com outro dispositivo para entender se o problema está no access point ou no cliente em específico, em ultimo caso eu pensaria em algunm tipo de vírus que esteja atrapalhando tudo.




         3 - Não fiz esse tipo de configuração ainda , porém estou estudando sobre como funciona 






   Questão 4.3 - 

    1- Verificaria a pipeline , se os testes estão ok ,
    2- variáveis de ambiente sempre no arquivo .env (adicionados no .gitignore para não subir pro github)
