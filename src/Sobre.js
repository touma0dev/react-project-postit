import React from "react";

const Sobre = () => {
  return (
    <div className="Sobre">
      <div className="Sobre-Details">
        <h1>Projeto Not-sticky</h1>
        <h2>Objetivo</h2>
        <p>
          O projeto Not-sticky foi desenvolvido com o objetivo de proporcionar
          uma solução de bloco de notas web em React, permitindo ao usuário
          criar e organizar tarefas de forma eficiente e intuitiva. Ele utiliza
          as bibliotecas React Icons, React Beautiful DnD e React Router Dom.
        </p>
        <h2>Descrição</h2>
        <p>
          O Not-sticky é um bloco de notas web que oferece diversas
          funcionalidades para auxiliar na organização das suas tarefas. Com
          ele, você pode criar tarefas informando título, categoria, descrição e
          data de conclusão. As tarefas são exibidas de forma ordenada por data,
          facilitando o acompanhamento das atividades.
        </p>
        <h2>Funcionalidades</h2>
        <ul>
          <li>
            Criação de tarefas: Crie novas tarefas com informações detalhadas.
          </li>
          <li>
            Organização por data: Visualize as tarefas em ordem de data para
            melhor planejamento.
          </li>
          <li>
            Edição e remoção de tarefas: Faça ajustes nas tarefas existentes ou
            remova aquelas que já foram concluídas.
          </li>
          <li>
            Ordenação por arrastar e soltar: Arraste e solte as tarefas para
            alterar sua ordem e prioridade.
          </li>
          <li>
            Copiar conteúdo: Copie facilmente o conteúdo de uma tarefa para a
            área de transferência.
          </li>
        </ul>
        <div className="alert">
          <h3>Atenção: Não delete os cookies da página!</h3>
          <p>
            Os cookies são usados para armazenar as tarefas e garantir que elas
            sejam exibidas corretamente mesmo após recarregar a página. Ao
            excluir os cookies, você pode perder suas tarefas salvas. Portanto,
            é importante evitar a exclusão dos cookies relacionados a este bloco
            de notas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
