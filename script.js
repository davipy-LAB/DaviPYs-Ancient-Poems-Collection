let currentPoem = 0;

const poems = [
  {
    title: "Heolstor",
    text: {
      pt: `Escuridão

Preciso gostar do meu pior lado,
Meu coração está cheio de demônios.
Você pode me ajudar?
Eu me encontro no inferno.

O que você está pensando?
Você e eu não estamos aqui.
Mas você é um anjo...
E eu tenho escuridão dentro de mim.

Eu tenho que ir.
Eu tenho que gostar dele.
Ele é manchado.

Seu sangue está cheio de escuridão
Mas eu não sou um bom homem.
Eu sou manchado.`,
      en: `Darkness

I need like my worst side,
My heart is full of demons.
Can you help me?
I find me in hell.

What're you thinking?
You and me aren't here.
But, you're an engel...
And I have darkness in myself.

I have to go.
I have to like him.
He's a tarnished.

Your blood is full of darkness 
But, I ain't a good man.
I'm a tarnished.`,
      ae: `Heolstor

Ic behōlf tō liċ mȳne wierst sīde
Mȳne heorte is full of dæmone
Cunnst þu mē helpan?
Ic āfand me in hel

Hwat Iart Þu gehygd?
Þu ond me iart nod hēore.
Ac, þu iart se engel
Ond ic habbe þe heolstor in me

Ic habbe to gōn.
Ic habbe to liċ him.
Hē is es heardsǣliġ.

Þin heolfor is full of heolstor,
Ac, Ic ne eom a micel mann...
Ic eom es heardsǣliġ.`
    },
    audio: "Heolstor.m4a"
  },
  {
    title: "þe dæmon ond þe engel",
    text: {
      pt: `O Demônio e o Anjo

O que você é?
Você vê o meu pior lado...
Preciso encontrar um jeito de me reerguer,
Mas eu não penso em nada.

Você é o homem antigo.
Mas por que eu preciso ser melhor que você?
Eu sou o pior homem...
E você é um grande homem.

Eu não cometi um crime...
Eu sinto minha dor no inferno.
Você prometeu que me levaria para o céu.

Mas você não consegue,
Você é o pior, cara...
Como eu.`,
      en: `The Demon and the Engel 

What're you?
You see my worst side...
I need to find a way to rise,
But, I don't think anything

You're the ancient man
But why do I need to be better than you?
I'm the worst man...
And you'te a great man.

I didn't have a crime...
I feel my pain in hell.
You promised me to take me to the heaven 

But, you can't do it,
You're the worst, man...
Like me.`,
      ae: `þe dæmom ond þe engel 

Hwāt Iart þu?
Þu sihst mȳne wierst sīde.
Ic behōlf āfand seo wise tō rȳse
Ac, Ic dōn nod gehygd...

Þu Iart þe ieldest Mann
Ac Hwȳ Ic behōlf tō be betera þæt þu?
Ic eom þe wierst mann
Ond Þu iart se micel mann.

Ic dȳde nod es mān
Ic fēlan mȳne sārnes in hel
þu hātan me tō tace me tō þe heafon

Ac, þu dōn nod cunnst.
Þu art þe wierst mann.
Liċ me.`
    },
    audio: "../static/audio/þe dæmon ond þe engel.m4a"
  }
];

let currentLang = "ae";

function updatePoem() {
  const poem = poems[currentPoem];
  document.getElementById("poem-title").innerText = poem.title;
  document.getElementById("poem-text").innerText = poem.text[currentLang];
  document.getElementById("poem-audio").src = poem.audio;
}

document.getElementById("next-btn").onclick = () => {
  currentPoem = (currentPoem + 1) % poems.length;
  updatePoem();
};

document.getElementById("prev-btn").onclick = () => {
  currentPoem = (currentPoem - 1 + poems.length) % poems.length;
  updatePoem();
};

document.getElementById("lang-toggle").onclick = () => {
  currentLang = currentLang === "ae" ? "pt" : currentLang === "pt" ? "en" : "ae";
  updatePoem();
};

document.getElementById("play-audio").onclick = () => {
  const audio = document.getElementById("poem-audio");
  audio.currentTime = 0;
  audio.play();
};

window.onload = updatePoem;