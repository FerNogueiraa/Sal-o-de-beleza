import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import "../styles/Servicos.css";

export default function Servicos() {
  const servicos = [
    {
      titulo: "Micropigmentação - Sobrancelha",
      descricao: "A micropigmentação de sobrancelhas é um procedimento estético que utiliza pigmentos para desenhar fios que imitam os pelos naturais. Isso melhora a definição e simetria, ideal para quem deseja sobrancelhas mais cheias ou corrigir falhas.",
      preco: "R$ 398,00 Avista ou 450,00 em 3X",
      imagem: "https://pe.unit.br/wp-content/uploads/2021/11/jpg-1024x511.jpg",
    },
    {
      titulo: "Micropigmentação - Lábios",
      descricao: "A micropigmentação labial realça a cor dos lábios, trazendo uma aparência saudável e uniforme. O procedimento utiliza pigmentos orgânicos que deixam os lábios com um tom natural, corrigindo assimetrias e proporcionando um contorno mais definido.",
      preco: "R$ 440,00 Avista ou 490,00 em 3X",
      imagem: "https://selecoes.ig.com.br/media/_versions/2023/12/micropigmentacao-labial_widelg.jpg",
    },
    {
      titulo: "Micropigmentação - Delineado Superior",
      descricao: "O delineado superior permanente realça os olhos, aplicando pigmento na linha dos cílios. Ideal para quem deseja um olhar mais marcado e prático, sem a necessidade de usar delineador diariamente.",
      preco: "R$ 380,00 Avista ou 420,00 em 3X",
      imagem: "https://makevida.com/wp-content/uploads/2021/12/micropigmentacao-dos-olhos-2.jpg.webp",
    },
    {
      titulo: "Micropigmentação - Delineado Inferior",
      descricao: "Este procedimento consiste em aplicar pigmento na linha inferior dos cílios, criando um olhar mais definido. É uma ótima opção para quem busca praticidade e um visual bem delineado.",
      preco: "R$ 220,00 Avista ou 250,00 em 3X",
      imagem: "https://www.primor.eu/blog/wp-content/uploads/2023/12/EYELINER-PERMANENTE.jpg",
    },
    {
      titulo: "Limpeza de Pele",
      descricao: "A limpeza de pele remove impurezas, células mortas e cravos, promovendo uma pele mais saudável e revitalizada. O procedimento inclui higienização, esfoliação, extração, máscara calmante e hidratação.",
      preco: "R$ 198,00 Avista ou 212,00 em 3X",
      imagem: "https://blogcasadaestetica.com.br/wp-content/uploads/2015/11/shutterstock_246976234.jpg",
    },
    {
      titulo: "Sobrancelha - Designer Normal",
      descricao: "O designer de sobrancelhas envolve a remoção de pelos para criar um formato harmônico que valorize o rosto. Utiliza-se pinça para ajustar o contorno das sobrancelhas, deixando-as mais definidas.",
      preco: "R$ 30,00",
      imagem: "https://www.janpodologia.com.br/img/produtos/design-de-sobrancelha.webp",
    },
    {
      titulo: "Sobrancelha - Designer com Henna",
      descricao: "Além do design tradicional, é aplicada henna para preencher falhas e dar mais volume às sobrancelhas. O resultado é natural e dura de 7 a 15 dias, dependendo do tipo de pele.",
      preco: "R$ 55,00",
      imagem: "https://blog.dellaedellecosmeticos.com/wp-content/uploads/2024/01/20231221090926.jpg",
    },
    {
      titulo: "Buço na Pinça",
      descricao: "O buço é cuidadosamente depilado com pinça, proporcionando precisão e menos irritação. Este método é indicado para quem busca um acabamento detalhado e delicado.",
      preco: "R$ 13,00",
      imagem: "https://static1.minhavida.com.br/symptoms/af/5f/48/ea/mulher-depilando-buco-com-uma-pinca-card_m-1.jpg",
    },
  ];

  return (
    <>
      <div className="content-cadastro">
        <Nav />
      </div>

      <div className="container-servicos">
        <h2>Serviços Disponíveis</h2>
        {servicos.map((servico, index) => (
          <div
            key={index}
            className={`card-servico ${index % 2 === 0 ? "left" : "right"}`}
          >
            <img src={servico.imagem} alt={servico.titulo} className="imagem-servico" />
            <div className="texto-servico">
              <h3>{servico.titulo}</h3>
              <p>{servico.descricao}</p>
              <p className="preco">{servico.preco}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="footer-position">
        <Footer />
      </div>
    </>
  );
}
