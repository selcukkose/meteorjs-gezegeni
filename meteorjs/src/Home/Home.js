import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <h3>Meteor Nedir?</h3>
            <p>
                Meteor.js gelişmiş web ve mobil 
                uygulamalar geliştirmenizi 
                sağlayan javascript tabanlı bir API'dır.
            </p>
            <p>
               Meteor ayrıca geliştirmiş
                olduğunuz uygulamanın etkileşimli
                olmasını da sağlar. Yani programınızda
                herhangi bir veri değişikliği olursa
                bu değişiklik hem mobil
                uygulamalarda hem de web sitesinde anında görülür. 
            </p>
            <p>
               Meteor programın yapımının her aşamasında
                javascript kullanır. Sadece
                 javascript bilerek hem server hem client
                hem de mobile uygulamalara hükmedebilirsiniz. 
            </p>
            <h3>Meteor'u Yükle</h3>
            <a href="https://www.meteor.com/install">
               Eğer Windows kullanıyorsanız buradan indirebilirsiniz
            </a><br/>
            <p>Eğer Linux veya OSX kullanıyorsanız aşağıdaki satırı terminalinize yazmanız yeterli olacaktır.</p>
            <p><label id="terminalKod">curl https://install.meteor.com/ | sh</label></p>
            <h3>Text Editörler</h3>
            <p>Meteor uygulamalarınızı istediğiniz ortamda
                 kodlayabilirsiniz ama tercihen Atom ve Visual Studio Code 
                 editörleri kod yazımınızı kolaylaştırıcı
                 ve hızlandırıcı eklentileriyle
                  size kolaylık sağlıyor.
            </p>
            <a href="https://atom.io">
               Atom
            </a><br/>
            <a href="https://code.visualstudio.com">
               Visual Studio Code
            </a>
        </div>
    );
};

export default Home;