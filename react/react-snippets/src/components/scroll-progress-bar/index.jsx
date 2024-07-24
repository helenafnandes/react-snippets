import React, { useEffect, useState } from 'react';
import './index.css';

const catNames = [
  'Bolinha',
  'Frajola',
  'Bidu',
  'Bibi',
  'Branquinho',
  'Fofinho',
  'Frajola',
  'Xuxu',
  'Pipoca',
  'Pretinho',
  'Felix',
  'Mel',
  'Pituco',
  'Sombra',
  'Marrom',
  'Nina',
  'Luna',
  'Tico',
  'Teca',
  'Tobias',
  'Tom',
  'Zé',
  'Pingo',
  'Gatinho',
  'Garfield',
  'Mingau',
  'Marie',
  'Bola de Neve',
  'Mimi',
  'Ziggy',
  'Miau',
  'Preta',
  'Mia',
  'Pandora',
  'Gato',
  'Gata',
  'Amora',
  'Neném',
  'Júnior',
  'Mariana',
  'Estrelinha',
  'Snow',
  'Neve',
  'Nevada',
  'Thor',
  'Fred',
  'Bebê',
  'Bebezinho',
  'Manchinha',
  'Lua',
  'Nico',
  'Nicolau',
  'Nick',
  'Princesa',
  'Bebel',
  'Pitoco',
  'Anjo',
  'Lolita',
  'Miauzinho',
  'Aurora',
  'Mimi',
  'Fumaça',
  'Whiskas',
  'Whisky',
  'Whiskinho',
  'Branquinha',
  'Frajolinha',
  'Branco',
  'Jasmim',
  'Dudu',
  'Duda',
  'Bolinha',
  'Nanico',
  'Tigrão',
  'Tigrinho',
  'Docinho',
  'Pérola',
  'Zézinho',
  'Marmaduke',
  'Frida',
  'Gugu',
  'Chiquinho',
  'Nala',
  'Príncipe',
  'Princesinha',
  'Romeu',
  'Julieta',
  'Pretinha',
  'Tico-Tico',
  'Sissi',
  'Milo',
  'Milu',
  'Pirata',
  'Tuca',
  'Fubá',
  'Nico',
  'Nicolau',
  'Tutu',
  'Cacau',
  'Naná',
];

const ScrollProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isPageEnd, setIsPageEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPercent = (scrollTop / (scrollHeight - windowHeight)) * 100;
      setScrollPercent(scrollPercent);
      setIsPageEnd(scrollPercent >= 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${isPageEnd ? 'page-end' : ''}`}>
      <header>
        <h1>Scroll Progress Bar</h1>
        <div id="bar-background"></div>
        <div
          id="bar-progress"
          className={`bar ${isPageEnd ? 'page-end' : ''}`}
          style={{ width: `${scrollPercent}%` }}
        ></div>
      </header>
      <div className={`container`}>
        <h4>Lista de Nomes de Gatos</h4>
        <ul id="cat-list">
          {catNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScrollProgressBar;
