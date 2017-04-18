import React from 'react';
import './IlkProgram.css';
import '.././App.css';

const İlkProgram = () => {
    return (
        <div>
            <h3>İlk Programımızı Nasıl Oluştururuz?</h3>
            <p>
                Öncelikle Meteor'da programımızı kurmak ve çalıştırma işlemlerimizi her zaman terminalden yada Windows'taki
                ismi ile komut satırından yapacağız. Programımızı oluşturmak için programımızı oluşturmak istediğimiz dosya
                dizinine giriyoruz(Dosya dizinine girmek için: "cd" kelimesinde sonra dosyanın adını yazarız).Daha sonra 
                "meteor create" yazıp hemen ardından programımızın ismini belirtiyoruz.
            </p>
            <p>
                Burada dikkat etmemmiz gereken şey 
                programın adının bitişik yazılması eğer ayırırsak ayrıldığı yerden itibaren ismi okumayacaktır.
            </p>
            <p>
                Örnek:
            </p>
            <p><label id="vurgulu">
                meteor create ilk programım
            </label></p>
            <p>
                Bu durum da programınızın ismi ilk olarak algılanır ve "programım" kısmı okunmaz.
            </p>
            <p><label id="vurgulu">
                meteor create ilkprogramım
            </label></p>
            <p>
                Burada programınızın ismi ilkprogramım olur.
            </p>
        </div>
    );
};

export default İlkProgram;