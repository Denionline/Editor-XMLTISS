// interface MensagemTISS {
//   "ans:ans": {
// '_text': string;
// };
//   "ans:xsi": {
// '_text': string;
// };
//   "ans:schemaLocation": {
// '_text': string;
// };
// }

interface IdentificacaoTransacao {
  "ans:tipoTransacao": {
    _text: string;
  };
  "ans:sequencialTransacao": {
    _text: string;
  };
  "ans:dataRegistroTransacao": {
    _text: string;
  };
  "ans:horaRegistroTransacao": {
    _text: string;
  };
}

interface IdentificacaoPrestador {
  "ans:codigoPrestadorNaOperadora": {
    _text: string;
  };
}

interface Origem {
  "ans:identificacaoPrestador": IdentificacaoPrestador;
}

interface Destino {
  "ans:registroANS": {
    _text: string;
  };
}

interface Cabecalho {
  "ans:identificacaoTransacao": IdentificacaoTransacao;
  "ans:origem": Origem;
  "ans:destino": Destino;
  "ans:Padrao": {
    _text: string;
  };
}

interface CabecalhoGuia {
  "ans:registroANS": {
    _text: string;
  };
  "ans:numeroGuiaPrestador": {
    _text: string;
  };
  "ans:guiaPrincipal": {
    _text: string;
  };
}

interface DadosAutorizacao {
  "ans:numeroGuiaOperadora": {
    _text: string;
  };
  "ans:dataValidadeSenha"?: {
    _text: string;
  };
  "ans:dataAutorizacao": {
    _text: string;
  };
  "ans:senha": {
    _text: string;
  };
}

interface DadosBeneficiario {
  "ans:numeroCarteira": {
    _text: string;
  };
  "ans:atendimentoRN": {
    _text: string;
  };
  "ans:nomeBeneficiario": {
    _text: string;
  };
}

interface ContratadoSolicitante {
  "ans:cnpjContratado": {
    _text: string;
  };
  "ans:nomeContratado": {
    _text: string;
  };
}

interface ProfissionalSolicitante {
  "ans:nomeProfissional": {
    _text: string;
  };
  "ans:conselhoProfissional": {
    _text: string;
  };
  "ans:numeroConselhoProfissional": {
    _text: string;
  };
  "ans:UF": {
    _text: string;
  };
  "ans:CBOS": {
    _text: string;
  };
}

interface DadosSolicitante {
  "ans:contratadoSolicitante": ContratadoSolicitante;
  "ans:profissionalSolicitante": ProfissionalSolicitante;
}

interface DadosSolicitacao {
  "ans:dataSolicitacao": {
    _text: string;
  };
  "ans:caraterAtendimento": {
    _text: string;
  };
  "ans:indicacaoClinica": {
    _text: string;
  };
}

interface ContratadoExecutante {
  "ans:cnpjContratado": {
    _text: string;
  };
  "ans:nomeContratado": {
    _text: string;
  };
}

interface DadosExecutante {
  "ans:contratadoExecutante": ContratadoExecutante;
  "ans:CNES": {
    _text: string;
  };
}

interface DadosAtendimento {
  "ans:tipoAtendimento": {
    _text: string;
  };
  "ans:indicacaoAcidente": {
    _text: string;
  };
  "ans:tipoConsulta": {
    _text: string;
  };
}

interface Procedimento {
  "ans:codigoTabela": {
    _text: string;
  };
  "ans:codigoProcedimento": {
    _text: string;
  };
  "ans:descricaoProcedimento": {
    _text: string;
  };
}

interface EquipeSadt {
  "ans:grauPart": {
    _text: string;
  };
  codProfissional:
    | {
        "ans:cpfContratado": {
          _text: string;
        };
      }
   ;
  "ans:nomeProf": {
    _text: string;
  };
  "ans:conselho": {
    _text: string;
  };
  "ans:numeroConselhoProfissional": {
    _text: string;
  };
  "ans:UF": {
    _text: string;
  };
  "ans:CBOS": {
    _text: string;
  };
}

export interface ProcedimentosExecutados {
  "ans:procedimentoExecutado": ProcedimentoExecutado[];
}

export interface ProcedimentoExecutado {
  "ans:sequencialItem": number;
  "ans:dataExecucao": {
    _text: string;
  };
  "ans:horaInicial": {
    _text: string;
  };
  "ans:horaFinal": {
    _text: string;
  };
  "ans:procedimento": Procedimento;
  "ans:quantidadeExecutada": {
    _text: string;
  };
  "ans:viaAcesso": {
    _text: string;
  };
  "ans:reducaoAcrescimo": {
    _text: string;
  };
  "ans:valorUnitario": {
    _text: string;
  };
  "ans:valorTotal": {
    _text: string;
  };
  "ans:equipeSadt": EquipeSadt;
}

interface ServicosExecutados {
  "ans:dataExecucao": {
    _text: string;
  };
  "ans:codigoTabela": {
    _text: string;
  };
  "ans:codigoProcedimento": {
    _text: string;
  };
  "ans:quantidadeExecutada": {
    _text: string;
  };
  "ans:unidadeMedida": {
    _text: string;
  };
  "ans:reducaoAcrescimo": {
    _text: string;
  };
  "ans:valorUnitario": {
    _text: string;
  };
  "ans:valorTotal": {
    _text: string;
  };
  "ans:descricaoProcedimento": {
    _text: string;
  };
}

export interface OutrasDespesas {
  "ans:despesa": OutraDespesa[];
}

export interface OutraDespesa {
  "ans:sequencialItem": number;
  "ans:codigoDespesa": {
    _text: string;
  };
  "ans:servicosExecutados": ServicosExecutados;
}

interface ValorTotal {
  "ans:valorProcedimentos": {
    _text: string;
  };
  "ans:valorDiarias": {
    _text: string;
  };
  "ans:valorTaxasAlugueis": {
    _text: string;
  };
  "ans:valorMateriais": {
    _text: string;
  };
  "ans:valorMedicamentos": {
    _text: string;
  };
  "ans:valorOPME": {
    _text: string;
  };
  "ans:valorGasesMedicinais": {
    _text: string;
  };
  "ans:valorTotalGeral": {
    _text: string;
  };
}

export interface GuiaSPSADT {
  "ans:cabecalhoGuia": CabecalhoGuia;
  "ans:dadosAutorizacao": DadosAutorizacao;
  "ans:dadosBeneficiario": DadosBeneficiario;
  "ans:dadosSolicitante": DadosSolicitante;
  "ans:dadosSolicitacao": DadosSolicitacao;
  "ans:dadosExecutante": DadosExecutante;
  "ans:dadosAtendimento": DadosAtendimento;
  "ans:procedimentosExecutados": ProcedimentosExecutados | undefined;
  "ans:outrasDespesas": OutrasDespesas | undefined;
  "ans:valorTotal": ValorTotal;
}

interface LoteGuias {
  "ans:numeroLote": {
    _text: string;
  };
  "ans:guiasTISS": {
    "ans:guiaSP-SADT": GuiaSPSADT[];
  };
}

interface PrestadorParaOperadora {
  "ans:loteGuias": LoteGuias;
}

interface Epilogo {
  "ans:hash": {
    _text: string;
  };
}

export interface ObjectXml {
  "ans:mensagemTISS": {
    "ans:cabecalho": Cabecalho;
    "ans:prestadorParaOperadora": PrestadorParaOperadora;
    "ans:epilogo": Epilogo;
  };
}
