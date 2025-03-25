// import { ArquiveType } from "@/context/ContextXml";

// export const exampleXmlObject: ArquiveType = {
//     "ID": 2,
//     "mensagemTISS": {
//         "ans": "http://www.ans.gov.br/padroes/tiss/schemas",
//         "xsi": "http://www.w3.org/2001/XMLSchema-instance",
//         "schemaLocation": "http://www.ans.gov.br/padroes/tiss/schemas http://www.ans.gov.br/padroes/tiss/schemas/tissV3_03_03.xsd"
//     },
//     "objetoXML": {
//         "ans:mensagemTISS": {
//             "ans:cabecalho": {
//                 "ans:identificacaoTransacao": {
//                     "ans:tipoTransacao": "ENVIO_LOTE_GUIAS",
//                     "ans:sequencialTransacao": "87299",
//                     "ans:dataRegistroTransacao": "2023-11-08",
//                     "ans:horaRegistroTransacao": "11:10:13"
//                 },
//                 "ans:origem": {
//                     "ans:identificacaoPrestador": {
//                         "ans:codigoPrestadorNaOperadora": "00623106000494"
//                     }
//                 },
//                 "ans:destino": {
//                     "ans:registroANS": "999999"
//                 },
//                 "ans:Padrao": "3.03.03"
//             },
//             "ans:prestadorParaOperadora": {
//                 "ans:loteGuias": {
//                     "ans:numeroLote": "143112",
//                     "ans:guiasTISS": [
//                         {
//                             "ans:cabecalhoGuia": {
//                                 "ans:registroANS": "999999",
//                                 "ans:numeroGuiaPrestador": "4832947",
//                                 "ans:guiaPrincipal": "4832947"
//                             },
//                             "ans:dadosAutorizacao": {
//                                 "ans:numeroGuiaOperadora": "4832947",
//                                 "ans:dataAutorizacao": "2023-10-16",
//                                 "ans:senha": "4832947",
//                                 "ans:dataValidadeSenha": "2023-10-27"
//                             },
//                             "ans:dadosBeneficiario": {
//                                 "ans:numeroCarteira": "010347985",
//                                 "ans:atendimentoRN": "N",
//                                 "ans:nomeBeneficiario": "Meiriany Carvalho Garieri"
//                             },
//                             "ans:dadosSolicitante": {
//                                 "ans:contratadoSolicitante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:profissionalSolicitante": {
//                                     "ans:nomeProfissional": "Rhayanna Kelly de Lima Vieira Ravanelli",
//                                     "ans:conselhoProfissional": "06",
//                                     "ans:numeroConselhoProfissional": "18519",
//                                     "ans:UF": "53",
//                                     "ans:CBOS": "225125"
//                                 }
//                             },
//                             "ans:dadosSolicitacao": {
//                                 "ans:dataSolicitacao": "2023-10-27",
//                                 "ans:caraterAtendimento": "1",
//                                 "ans:indicacaoClinica": "Outr exam invest esp pess s/queix diag relat - Exame ginecologico"
//                             },
//                             "ans:dadosExecutante": {
//                                 "ans:contratadoExecutante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:CNES": "9264426"
//                             },
//                             "ans:dadosAtendimento": {
//                                 "ans:tipoAtendimento": "05",
//                                 "ans:indicacaoAcidente": "9",
//                                 "ans:tipoConsulta": "1"
//                             },
//                             "ans:procedimentosExecutados": [
//                                 {
//                                     "ans:dataExecucao": "2023-10-27",
//                                     "ans:horaInicial": "13:45:16",
//                                     "ans:horaFinal": "13:45:16",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40901122",
//                                         "ans:descricaoProcedimento": "Abdome Total (Inclui Abdome Inferior)"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "117.51",
//                                     "ans:valorTotal": "117.51",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "47088150182"
//                                         },
//                                         "ans:nomeProf": "Marcelo Gonzaga Peres",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "8207",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 },
//                                 {
//                                     "ans:dataExecucao": "2023-10-27",
//                                     "ans:horaInicial": "13:45:16",
//                                     "ans:horaFinal": "13:45:16",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40901114",
//                                         "ans:descricaoProcedimento": "Mamas"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "49.68",
//                                     "ans:valorTotal": "49.68",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "47088150182"
//                                         },
//                                         "ans:nomeProf": "Marcelo Gonzaga Peres",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "8207",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 },
//                                 {
//                                     "ans:dataExecucao": "2023-10-27",
//                                     "ans:horaInicial": "13:45:16",
//                                     "ans:horaFinal": "13:45:16",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40901386",
//                                         "ans:descricaoProcedimento": "Doppler Colorido De Orgao Ou Estrutura Isolada"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "43.42",
//                                     "ans:valorTotal": "43.42",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "47088150182"
//                                         },
//                                         "ans:nomeProf": "Marcelo Gonzaga Peres",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "8207",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 },
//                                 {
//                                     "ans:dataExecucao": "2023-10-27",
//                                     "ans:horaInicial": "13:45:16",
//                                     "ans:horaFinal": "13:45:16",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40808041",
//                                         "ans:descricaoProcedimento": "Mamografia Digital Bilateral"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "139.09",
//                                     "ans:valorTotal": "139.09",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "64728510182"
//                                         },
//                                         "ans:nomeProf": "Iris Gardenia Cavalca E Silva",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "10842",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225255"
//                                     }
//                                 },
//                                 {
//                                     "ans:dataExecucao": "2023-10-27",
//                                     "ans:horaInicial": "13:45:16",
//                                     "ans:horaFinal": "13:45:16",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40901203",
//                                         "ans:descricaoProcedimento": "Orgaos Superficiais (Tireoide Ou Escroto Ou Penis Ou Cranio)"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "49.68",
//                                     "ans:valorTotal": "49.68",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "47088150182"
//                                         },
//                                         "ans:nomeProf": "Marcelo Gonzaga Peres",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "8207",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 },
//                                 {
//                                     "ans:dataExecucao": "2023-10-27",
//                                     "ans:horaInicial": "13:45:16",
//                                     "ans:horaFinal": "13:45:16",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40901211",
//                                         "ans:descricaoProcedimento": "Estruturas Superficiais (Cervical Ou Axilas Ou Musculo Ou Tendao)"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "49.68",
//                                     "ans:valorTotal": "49.68",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "47088150182"
//                                         },
//                                         "ans:nomeProf": "Marcelo Gonzaga Peres",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "8207",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 }
//                             ],
//                             "ans:valorTotal": {
//                                 "ans:valorProcedimentos": "449.0600",
//                                 "ans:valorTotalGeral": "449.0600"
//                             }
//                         },
//                         {
//                             "ans:cabecalhoGuia": {
//                                 "ans:registroANS": "999999",
//                                 "ans:numeroGuiaPrestador": "4930626",
//                                 "ans:guiaPrincipal": "4930626"
//                             },
//                             "ans:dadosAutorizacao": {
//                                 "ans:numeroGuiaOperadora": "4930626",
//                                 "ans:dataAutorizacao": "2023-10-28",
//                                 "ans:senha": "4930626",
//                                 "ans:dataValidadeSenha": "2023-10-30"
//                             },
//                             "ans:dadosBeneficiario": {
//                                 "ans:numeroCarteira": "010067035",
//                                 "ans:atendimentoRN": "N",
//                                 "ans:nomeBeneficiario": "Neile Maria Matos de Lima"
//                             },
//                             "ans:dadosSolicitante": {
//                                 "ans:contratadoSolicitante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:profissionalSolicitante": {
//                                     "ans:nomeProfissional": "Jo Ocer Castro Sousa",
//                                     "ans:conselhoProfissional": "06",
//                                     "ans:numeroConselhoProfissional": "20706",
//                                     "ans:UF": "53",
//                                     "ans:CBOS": "225125"
//                                 }
//                             },
//                             "ans:dadosSolicitacao": {
//                                 "ans:dataSolicitacao": "2023-10-30",
//                                 "ans:caraterAtendimento": "1",
//                                 "ans:indicacaoClinica": "Outr exam invest esp pess s/queix diag relat - Exame dos olhos e da vi"
//                             },
//                             "ans:dadosExecutante": {
//                                 "ans:contratadoExecutante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:CNES": "9264426"
//                             },
//                             "ans:dadosAtendimento": {
//                                 "ans:tipoAtendimento": "05",
//                                 "ans:indicacaoAcidente": "9",
//                                 "ans:tipoConsulta": "1"
//                             },
//                             "ans:procedimentosExecutados": [
//                                 {
//                                     "ans:dataExecucao": "2023-10-30",
//                                     "ans:horaInicial": "11:21:30",
//                                     "ans:horaFinal": "11:21:30",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "41001079",
//                                         "ans:descricaoProcedimento": "Torax"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "309.25",
//                                     "ans:valorTotal": "309.25",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "03148414748"
//                                         },
//                                         "ans:nomeProf": "Marcello Antonio Rezende Basilio",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "11857",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 }
//                             ],
//                             "ans:valorTotal": {
//                                 "ans:valorProcedimentos": "309.2500",
//                                 "ans:valorTotalGeral": "309.2500"
//                             }
//                         },
//                         {
//                             "ans:cabecalhoGuia": {
//                                 "ans:registroANS": "999999",
//                                 "ans:numeroGuiaPrestador": "4936557",
//                                 "ans:guiaPrincipal": "4936557"
//                             },
//                             "ans:dadosAutorizacao": {
//                                 "ans:numeroGuiaOperadora": "4936557",
//                                 "ans:dataAutorizacao": "2023-10-30",
//                                 "ans:senha": "4936557",
//                                 "ans:dataValidadeSenha": "2023-10-30"
//                             },
//                             "ans:dadosBeneficiario": {
//                                 "ans:numeroCarteira": "000366063",
//                                 "ans:atendimentoRN": "N",
//                                 "ans:nomeBeneficiario": "Olimar dos Santos de Oliveira"
//                             },
//                             "ans:dadosSolicitante": {
//                                 "ans:contratadoSolicitante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:profissionalSolicitante": {
//                                     "ans:nomeProfissional": "Sarah Liz Lages Machado",
//                                     "ans:conselhoProfissional": "06",
//                                     "ans:numeroConselhoProfissional": "21077",
//                                     "ans:UF": "53",
//                                     "ans:CBOS": "225250"
//                                 }
//                             },
//                             "ans:dadosSolicitacao": {
//                                 "ans:dataSolicitacao": "2023-10-30",
//                                 "ans:caraterAtendimento": "1",
//                                 "ans:indicacaoClinica": "Outr exam invest esp pess s/queix diag relat - Exame ginecologico"
//                             },
//                             "ans:dadosExecutante": {
//                                 "ans:contratadoExecutante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:CNES": "9264426"
//                             },
//                             "ans:dadosAtendimento": {
//                                 "ans:tipoAtendimento": "05",
//                                 "ans:indicacaoAcidente": "9",
//                                 "ans:tipoConsulta": "1"
//                             },
//                             "ans:procedimentosExecutados": [
//                                 {
//                                     "ans:dataExecucao": "2023-10-30",
//                                     "ans:horaInicial": "14:51:30",
//                                     "ans:horaFinal": "14:51:30",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40808041",
//                                         "ans:descricaoProcedimento": "Mamografia Digital Bilateral"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "139.09",
//                                     "ans:valorTotal": "139.09",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "08315512676"
//                                         },
//                                         "ans:nomeProf": "Rafael Gustavo dos Santos Oliveira",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "23744",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 }
//                             ],
//                             "ans:valorTotal": {
//                                 "ans:valorProcedimentos": "139.0900",
//                                 "ans:valorTotalGeral": "139.0900"
//                             }
//                         },
//                         {
//                             "ans:cabecalhoGuia": {
//                                 "ans:registroANS": "999999",
//                                 "ans:numeroGuiaPrestador": "4858051",
//                                 "ans:guiaPrincipal": "4858051"
//                             },
//                             "ans:dadosAutorizacao": {
//                                 "ans:numeroGuiaOperadora": "4858051",
//                                 "ans:dataAutorizacao": "2023-10-18",
//                                 "ans:senha": "4858051",
//                                 "ans:dataValidadeSenha": "2023-10-28"
//                             },
//                             "ans:dadosBeneficiario": {
//                                 "ans:numeroCarteira": "000590578",
//                                 "ans:atendimentoRN": "N",
//                                 "ans:nomeBeneficiario": "Paula dos Anjos Goncalves da Silva"
//                             },
//                             "ans:dadosSolicitante": {
//                                 "ans:contratadoSolicitante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:profissionalSolicitante": {
//                                     "ans:nomeProfissional": "Roberto Ramalho de Andrade Melo",
//                                     "ans:conselhoProfissional": "06",
//                                     "ans:numeroConselhoProfissional": "22799",
//                                     "ans:UF": "53",
//                                     "ans:CBOS": "225250"
//                                 }
//                             },
//                             "ans:dadosSolicitacao": {
//                                 "ans:dataSolicitacao": "2023-10-28",
//                                 "ans:caraterAtendimento": "1",
//                                 "ans:indicacaoClinica": "Outr exam invest esp pess s/queix diag relat - Exame ginecologico"
//                             },
//                             "ans:dadosExecutante": {
//                                 "ans:contratadoExecutante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:CNES": "9264426"
//                             },
//                             "ans:dadosAtendimento": {
//                                 "ans:tipoAtendimento": "05",
//                                 "ans:indicacaoAcidente": "9",
//                                 "ans:tipoConsulta": "1"
//                             },
//                             "ans:procedimentosExecutados": [
//                                 {
//                                     "ans:dataExecucao": "2023-10-28",
//                                     "ans:horaInicial": "07:54:03",
//                                     "ans:horaFinal": "07:54:03",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40901122",
//                                         "ans:descricaoProcedimento": "Abdome Total (Inclui Abdome Inferior)"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "117.51",
//                                     "ans:valorTotal": "117.51",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "47088150182"
//                                         },
//                                         "ans:nomeProf": "Marcelo Gonzaga Peres",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "8207",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 }
//                             ],
//                             "ans:valorTotal": {
//                                 "ans:valorProcedimentos": "117.5100",
//                                 "ans:valorTotalGeral": "117.5100"
//                             }
//                         },
//                         {
//                             "ans:cabecalhoGuia": {
//                                 "ans:registroANS": "999999",
//                                 "ans:numeroGuiaPrestador": "4944091",
//                                 "ans:guiaPrincipal": "4944091"
//                             },
//                             "ans:dadosAutorizacao": {
//                                 "ans:numeroGuiaOperadora": "4944091",
//                                 "ans:dataAutorizacao": "2023-10-31",
//                                 "ans:senha": "4944091",
//                                 "ans:dataValidadeSenha": "2023-10-31"
//                             },
//                             "ans:dadosBeneficiario": {
//                                 "ans:numeroCarteira": "000195266",
//                                 "ans:atendimentoRN": "N",
//                                 "ans:nomeBeneficiario": "Rosely Angelina Maranhao Camargo"
//                             },
//                             "ans:dadosSolicitante": {
//                                 "ans:contratadoSolicitante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:profissionalSolicitante": {
//                                     "ans:nomeProfissional": "Sebastiao Monteiro de Melo",
//                                     "ans:conselhoProfissional": "06",
//                                     "ans:numeroConselhoProfissional": "2939",
//                                     "ans:UF": "53",
//                                     "ans:CBOS": "225250"
//                                 }
//                             },
//                             "ans:dadosSolicitacao": {
//                                 "ans:dataSolicitacao": "2023-10-31",
//                                 "ans:caraterAtendimento": "1",
//                                 "ans:indicacaoClinica": "Outr exam invest esp pess s/queix diag relat - Exame ginecologico"
//                             },
//                             "ans:dadosExecutante": {
//                                 "ans:contratadoExecutante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:CNES": "9264426"
//                             },
//                             "ans:dadosAtendimento": {
//                                 "ans:tipoAtendimento": "05",
//                                 "ans:indicacaoAcidente": "9",
//                                 "ans:tipoConsulta": "1"
//                             },
//                             "ans:procedimentosExecutados": [
//                                 {
//                                     "ans:dataExecucao": "2023-10-31",
//                                     "ans:horaInicial": "10:23:28",
//                                     "ans:horaFinal": "10:23:28",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40808041",
//                                         "ans:descricaoProcedimento": "Mamografia Digital Bilateral"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "139.09",
//                                     "ans:valorTotal": "139.09",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "08315512676"
//                                         },
//                                         "ans:nomeProf": "Rafael Gustavo dos Santos Oliveira",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "23744",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 },
//                                 {
//                                     "ans:dataExecucao": "2023-10-31",
//                                     "ans:horaInicial": "10:23:28",
//                                     "ans:horaFinal": "10:23:28",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40901300",
//                                         "ans:descricaoProcedimento": "Transvaginal (Inclui Abdome Inferior Feminino)"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "83.77",
//                                     "ans:valorTotal": "83.77",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "08315512676"
//                                         },
//                                         "ans:nomeProf": "Rafael Gustavo dos Santos Oliveira",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "23744",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 }
//                             ],
//                             "ans:valorTotal": {
//                                 "ans:valorProcedimentos": "222.8600",
//                                 "ans:valorTotalGeral": "222.8600"
//                             }
//                         },
//                         {
//                             "ans:cabecalhoGuia": {
//                                 "ans:registroANS": "999999",
//                                 "ans:numeroGuiaPrestador": "4931362",
//                                 "ans:guiaPrincipal": "4931362"
//                             },
//                             "ans:dadosAutorizacao": {
//                                 "ans:numeroGuiaOperadora": "4931362",
//                                 "ans:dataAutorizacao": "2023-10-30",
//                                 "ans:senha": "4931362",
//                                 "ans:dataValidadeSenha": "2023-10-30"
//                             },
//                             "ans:dadosBeneficiario": {
//                                 "ans:numeroCarteira": "000144503",
//                                 "ans:atendimentoRN": "N",
//                                 "ans:nomeBeneficiario": "Samaita Maria da Silva"
//                             },
//                             "ans:dadosSolicitante": {
//                                 "ans:contratadoSolicitante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:profissionalSolicitante": {
//                                     "ans:nomeProfissional": "Thereza Racquel Moura Baptista de Mello",
//                                     "ans:conselhoProfissional": "06",
//                                     "ans:numeroConselhoProfissional": "20674",
//                                     "ans:UF": "53",
//                                     "ans:CBOS": "225255"
//                                 }
//                             },
//                             "ans:dadosSolicitacao": {
//                                 "ans:dataSolicitacao": "2023-10-30",
//                                 "ans:caraterAtendimento": "1",
//                                 "ans:indicacaoClinica": "Displasias mamarias benignas - Mastopatia cistica difusa"
//                             },
//                             "ans:dadosExecutante": {
//                                 "ans:contratadoExecutante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:CNES": "9264426"
//                             },
//                             "ans:dadosAtendimento": {
//                                 "ans:tipoAtendimento": "05",
//                                 "ans:indicacaoAcidente": "9",
//                                 "ans:tipoConsulta": "1"
//                             },
//                             "ans:procedimentosExecutados": [
//                                 {
//                                     "ans:dataExecucao": "2023-10-30",
//                                     "ans:horaInicial": "07:00:00",
//                                     "ans:horaFinal": "07:00:00",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40901114",
//                                         "ans:descricaoProcedimento": "Mamas"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "70.97",
//                                     "ans:valorTotal": "70.97",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "08315512676"
//                                         },
//                                         "ans:nomeProf": "Rafael Gustavo dos Santos Oliveira",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "23744",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 },
//                                 {
//                                     "ans:dataExecucao": "2023-10-30",
//                                     "ans:horaInicial": "07:00:00",
//                                     "ans:horaFinal": "07:00:00",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40901211",
//                                         "ans:descricaoProcedimento": "Estruturas Superficiais (Cervical Ou Axilas Ou Musculo Ou Tendao)"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "49.68",
//                                     "ans:valorTotal": "49.68",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "08315512676"
//                                         },
//                                         "ans:nomeProf": "Rafael Gustavo dos Santos Oliveira",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "23744",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 }
//                             ],
//                             "ans:valorTotal": {
//                                 "ans:valorProcedimentos": "120.6500",
//                                 "ans:valorTotalGeral": "120.6500"
//                             }
//                         },
//                         {
//                             "ans:cabecalhoGuia": {
//                                 "ans:registroANS": "999999",
//                                 "ans:numeroGuiaPrestador": "4942000",
//                                 "ans:guiaPrincipal": "4942000"
//                             },
//                             "ans:dadosAutorizacao": {
//                                 "ans:numeroGuiaOperadora": "4942000",
//                                 "ans:dataAutorizacao": "2023-10-31",
//                                 "ans:senha": "4942000",
//                                 "ans:dataValidadeSenha": "2023-10-31"
//                             },
//                             "ans:dadosBeneficiario": {
//                                 "ans:numeroCarteira": "010151798",
//                                 "ans:atendimentoRN": "N",
//                                 "ans:nomeBeneficiario": "Sedrac Rodrigues dos Santos"
//                             },
//                             "ans:dadosSolicitante": {
//                                 "ans:contratadoSolicitante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:profissionalSolicitante": {
//                                     "ans:nomeProfissional": "Gustavo Magalhaes Torres",
//                                     "ans:conselhoProfissional": "06",
//                                     "ans:numeroConselhoProfissional": "18193",
//                                     "ans:UF": "53",
//                                     "ans:CBOS": "225125"
//                                 }
//                             },
//                             "ans:dadosSolicitacao": {
//                                 "ans:dataSolicitacao": "2023-10-31",
//                                 "ans:caraterAtendimento": "1",
//                                 "ans:indicacaoClinica": "Exame geral invest pess s/queix diagn relat - Exame medico geral"
//                             },
//                             "ans:dadosExecutante": {
//                                 "ans:contratadoExecutante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:CNES": "9264426"
//                             },
//                             "ans:dadosAtendimento": {
//                                 "ans:tipoAtendimento": "05",
//                                 "ans:indicacaoAcidente": "9",
//                                 "ans:tipoConsulta": "1"
//                             },
//                             "ans:procedimentosExecutados": [
//                                 {
//                                     "ans:dataExecucao": "2023-10-31",
//                                     "ans:horaInicial": "09:18:21",
//                                     "ans:horaFinal": "09:18:21",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "41001036",
//                                         "ans:descricaoProcedimento": "Face Ou Seios Da Face"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "260.09",
//                                     "ans:valorTotal": "260.09",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "08315512676"
//                                         },
//                                         "ans:nomeProf": "Rafael Gustavo dos Santos Oliveira",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "23744",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 }
//                             ],
//                             "ans:valorTotal": {
//                                 "ans:valorProcedimentos": "260.0900",
//                                 "ans:valorTotalGeral": "260.0900"
//                             }
//                         },
//                         {
//                             "ans:cabecalhoGuia": {
//                                 "ans:registroANS": "999999",
//                                 "ans:numeroGuiaPrestador": "4902248",
//                                 "ans:guiaPrincipal": "4902248"
//                             },
//                             "ans:dadosAutorizacao": {
//                                 "ans:numeroGuiaOperadora": "4902248",
//                                 "ans:dataAutorizacao": "2023-10-24",
//                                 "ans:senha": "4902248",
//                                 "ans:dataValidadeSenha": "2023-10-26"
//                             },
//                             "ans:dadosBeneficiario": {
//                                 "ans:numeroCarteira": "000028035",
//                                 "ans:atendimentoRN": "N",
//                                 "ans:nomeBeneficiario": "Silvania Dias Barbosa Boaventura"
//                             },
//                             "ans:dadosSolicitante": {
//                                 "ans:contratadoSolicitante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:profissionalSolicitante": {
//                                     "ans:nomeProfissional": "Ludmilla Godoy Bezzan",
//                                     "ans:conselhoProfissional": "06",
//                                     "ans:numeroConselhoProfissional": "21483",
//                                     "ans:UF": "53",
//                                     "ans:CBOS": "225125"
//                                 }
//                             },
//                             "ans:dadosSolicitacao": {
//                                 "ans:dataSolicitacao": "2023-10-26",
//                                 "ans:caraterAtendimento": "1",
//                                 "ans:indicacaoClinica": "Outr exam invest esp pess s/queix diag relat - Exame ginecologico"
//                             },
//                             "ans:dadosExecutante": {
//                                 "ans:contratadoExecutante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:CNES": "9264426"
//                             },
//                             "ans:dadosAtendimento": {
//                                 "ans:tipoAtendimento": "05",
//                                 "ans:indicacaoAcidente": "9",
//                                 "ans:tipoConsulta": "1"
//                             },
//                             "ans:procedimentosExecutados": [
//                                 {
//                                     "ans:dataExecucao": "2023-10-26",
//                                     "ans:horaInicial": "13:39:25",
//                                     "ans:horaFinal": "13:39:25",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40808041",
//                                         "ans:descricaoProcedimento": "Mamografia Digital Bilateral"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "139.09",
//                                     "ans:valorTotal": "139.09",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "64728510182"
//                                         },
//                                         "ans:nomeProf": "Iris Gardenia Cavalca E Silva",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "10842",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225255"
//                                     }
//                                 }
//                             ],
//                             "ans:valorTotal": {
//                                 "ans:valorProcedimentos": "139.0900",
//                                 "ans:valorTotalGeral": "139.0900"
//                             }
//                         },
//                         {
//                             "ans:cabecalhoGuia": {
//                                 "ans:registroANS": "999999",
//                                 "ans:numeroGuiaPrestador": "4922142",
//                                 "ans:guiaPrincipal": "4922142"
//                             },
//                             "ans:dadosAutorizacao": {
//                                 "ans:numeroGuiaOperadora": "4922142",
//                                 "ans:dataAutorizacao": "2023-10-27",
//                                 "ans:senha": "4922142",
//                                 "ans:dataValidadeSenha": "2023-10-27"
//                             },
//                             "ans:dadosBeneficiario": {
//                                 "ans:numeroCarteira": "000236793",
//                                 "ans:atendimentoRN": "N",
//                                 "ans:nomeBeneficiario": "Silvia Maria Sousa de Medeiros"
//                             },
//                             "ans:dadosSolicitante": {
//                                 "ans:contratadoSolicitante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:profissionalSolicitante": {
//                                     "ans:nomeProfissional": "Sarah Liz Lages Machado",
//                                     "ans:conselhoProfissional": "06",
//                                     "ans:numeroConselhoProfissional": "21077",
//                                     "ans:UF": "53",
//                                     "ans:CBOS": "225250"
//                                 }
//                             },
//                             "ans:dadosSolicitacao": {
//                                 "ans:dataSolicitacao": "2023-10-27",
//                                 "ans:caraterAtendimento": "1",
//                                 "ans:indicacaoClinica": "Transt nao-infl ovario tromp Falop lig largo - Cisto folicular do ovar"
//                             },
//                             "ans:dadosExecutante": {
//                                 "ans:contratadoExecutante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:CNES": "9264426"
//                             },
//                             "ans:dadosAtendimento": {
//                                 "ans:tipoAtendimento": "05",
//                                 "ans:indicacaoAcidente": "9",
//                                 "ans:tipoConsulta": "1"
//                             },
//                             "ans:procedimentosExecutados": [
//                                 {
//                                     "ans:dataExecucao": "2023-10-27",
//                                     "ans:horaInicial": "10:03:04",
//                                     "ans:horaFinal": "10:03:04",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40901300",
//                                         "ans:descricaoProcedimento": "Transvaginal (Inclui Abdome Inferior Feminino)"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "83.77",
//                                     "ans:valorTotal": "83.77",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "47088150182"
//                                         },
//                                         "ans:nomeProf": "Marcelo Gonzaga Peres",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "8207",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 },
//                                 {
//                                     "ans:dataExecucao": "2023-10-27",
//                                     "ans:horaInicial": "10:03:04",
//                                     "ans:horaFinal": "10:03:04",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40808041",
//                                         "ans:descricaoProcedimento": "Mamografia Digital Bilateral"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "139.09",
//                                     "ans:valorTotal": "139.09",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "64728510182"
//                                         },
//                                         "ans:nomeProf": "Iris Gardenia Cavalca E Silva",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "10842",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225255"
//                                     }
//                                 }
//                             ],
//                             "ans:valorTotal": {
//                                 "ans:valorProcedimentos": "222.8600",
//                                 "ans:valorTotalGeral": "222.8600"
//                             }
//                         },
//                         {
//                             "ans:cabecalhoGuia": {
//                                 "ans:registroANS": "999999",
//                                 "ans:numeroGuiaPrestador": "4893556",
//                                 "ans:guiaPrincipal": "4893556"
//                             },
//                             "ans:dadosAutorizacao": {
//                                 "ans:numeroGuiaOperadora": "4893556",
//                                 "ans:dataAutorizacao": "2023-10-11",
//                                 "ans:senha": "4893556",
//                                 "ans:dataValidadeSenha": "2023-10-27"
//                             },
//                             "ans:dadosBeneficiario": {
//                                 "ans:numeroCarteira": "000236099",
//                                 "ans:atendimentoRN": "N",
//                                 "ans:nomeBeneficiario": "Valquiria Aparecida Ferreira"
//                             },
//                             "ans:dadosSolicitante": {
//                                 "ans:contratadoSolicitante": {
//                                     "ans:cnpjContratado": "26470585000105",
//                                     "ans:nomeContratado": "Matervida Servicos Medicos Ltda"
//                                 },
//                                 "ans:profissionalSolicitante": {
//                                     "ans:nomeProfissional": "Jose Antonio Peixoto",
//                                     "ans:conselhoProfissional": "06",
//                                     "ans:numeroConselhoProfissional": "11258",
//                                     "ans:UF": "53",
//                                     "ans:CBOS": "225250"
//                                 }
//                             },
//                             "ans:dadosSolicitacao": {
//                                 "ans:dataSolicitacao": "2023-10-27",
//                                 "ans:caraterAtendimento": "1",
//                                 "ans:indicacaoClinica": "Outr exam invest esp pess s/queix diag relat - Exame ginecologico"
//                             },
//                             "ans:dadosExecutante": {
//                                 "ans:contratadoExecutante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:CNES": "9264426"
//                             },
//                             "ans:dadosAtendimento": {
//                                 "ans:tipoAtendimento": "05",
//                                 "ans:indicacaoAcidente": "9",
//                                 "ans:tipoConsulta": "1"
//                             },
//                             "ans:procedimentosExecutados": [
//                                 {
//                                     "ans:dataExecucao": "2023-10-27",
//                                     "ans:horaInicial": "08:29:47",
//                                     "ans:horaFinal": "08:29:47",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40808041",
//                                         "ans:descricaoProcedimento": "Mamografia Digital Bilateral"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "139.09",
//                                     "ans:valorTotal": "139.09",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "64728510182"
//                                         },
//                                         "ans:nomeProf": "Iris Gardenia Cavalca E Silva",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "10842",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225255"
//                                     }
//                                 },
//                                 {
//                                     "ans:dataExecucao": "2023-10-27",
//                                     "ans:horaInicial": "08:29:47",
//                                     "ans:horaFinal": "08:29:47",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40901114",
//                                         "ans:descricaoProcedimento": "Mamas"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "49.68",
//                                     "ans:valorTotal": "49.68",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "47088150182"
//                                         },
//                                         "ans:nomeProf": "Marcelo Gonzaga Peres",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "8207",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 },
//                                 {
//                                     "ans:dataExecucao": "2023-10-27",
//                                     "ans:horaInicial": "08:29:47",
//                                     "ans:horaFinal": "08:29:47",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40901122",
//                                         "ans:descricaoProcedimento": "Abdome Total (Inclui Abdome Inferior)"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "117.51",
//                                     "ans:valorTotal": "117.51",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "47088150182"
//                                         },
//                                         "ans:nomeProf": "Marcelo Gonzaga Peres",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "8207",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 },
//                                 {
//                                     "ans:dataExecucao": "2023-10-27",
//                                     "ans:horaInicial": "08:29:47",
//                                     "ans:horaFinal": "08:29:47",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40901300",
//                                         "ans:descricaoProcedimento": "Transvaginal (Inclui Abdome Inferior Feminino)"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "58.64",
//                                     "ans:valorTotal": "58.64",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "47088150182"
//                                         },
//                                         "ans:nomeProf": "Marcelo Gonzaga Peres",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "8207",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 },
//                                 {
//                                     "ans:dataExecucao": "2023-10-27",
//                                     "ans:horaInicial": "08:29:47",
//                                     "ans:horaFinal": "08:29:47",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40901211",
//                                         "ans:descricaoProcedimento": "Estruturas Superficiais (Cervical Ou Axilas Ou Musculo Ou Tendao)"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "49.68",
//                                     "ans:valorTotal": "49.68",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "47088150182"
//                                         },
//                                         "ans:nomeProf": "Marcelo Gonzaga Peres",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "8207",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 }
//                             ],
//                             "ans:valorTotal": {
//                                 "ans:valorProcedimentos": "414.6000",
//                                 "ans:valorTotalGeral": "414.6000"
//                             }
//                         },
//                         {
//                             "ans:cabecalhoGuia": {
//                                 "ans:registroANS": "999999",
//                                 "ans:numeroGuiaPrestador": "4921352",
//                                 "ans:guiaPrincipal": "4921352"
//                             },
//                             "ans:dadosAutorizacao": {
//                                 "ans:numeroGuiaOperadora": "4921352",
//                                 "ans:dataAutorizacao": "2023-10-26",
//                                 "ans:senha": "4921352",
//                                 "ans:dataValidadeSenha": "2023-10-31"
//                             },
//                             "ans:dadosBeneficiario": {
//                                 "ans:numeroCarteira": "000088891",
//                                 "ans:atendimentoRN": "N",
//                                 "ans:nomeBeneficiario": "Vania Maria Rodrigues de Freitas"
//                             },
//                             "ans:dadosSolicitante": {
//                                 "ans:contratadoSolicitante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:profissionalSolicitante": {
//                                     "ans:nomeProfissional": "Adriana de Oliveira Souza",
//                                     "ans:conselhoProfissional": "06",
//                                     "ans:numeroConselhoProfissional": "8612",
//                                     "ans:UF": "53",
//                                     "ans:CBOS": "225255"
//                                 }
//                             },
//                             "ans:dadosSolicitacao": {
//                                 "ans:dataSolicitacao": "2023-10-31",
//                                 "ans:caraterAtendimento": "1",
//                                 "ans:indicacaoClinica": "Displasias mamarias benignas - Cisto solitario da mama"
//                             },
//                             "ans:dadosExecutante": {
//                                 "ans:contratadoExecutante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:CNES": "9264426"
//                             },
//                             "ans:dadosAtendimento": {
//                                 "ans:tipoAtendimento": "05",
//                                 "ans:indicacaoAcidente": "9",
//                                 "ans:tipoConsulta": "1"
//                             },
//                             "ans:procedimentosExecutados": [
//                                 {
//                                     "ans:dataExecucao": "2023-10-31",
//                                     "ans:horaInicial": "07:03:33",
//                                     "ans:horaFinal": "07:03:33",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "41101480",
//                                         "ans:descricaoProcedimento": "Mamas (bilateral)"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "803.86",
//                                     "ans:valorTotal": "803.86",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "08315512676"
//                                         },
//                                         "ans:nomeProf": "Rafael Gustavo dos Santos Oliveira",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "23744",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 }
//                             ],
//                             "ans:outrasDespesas": [
//                                 {
//                                     "ans:codigoDespesa": "02",
//                                     "ans:servicosExecutados": {
//                                         "ans:dataExecucao": "2023-10-31",
//                                         "ans:codigoTabela": "20",
//                                         "ans:codigoProcedimento": "0000035934",
//                                         "ans:quantidadeExecutada": "1.0000",
//                                         "ans:unidadeMedida": "023",
//                                         "ans:reducaoAcrescimo": "1.00",
//                                         "ans:valorUnitario": "8.77",
//                                         "ans:valorTotal": 8.77,
//                                         "ans:descricaoProcedimento": "CLORETO DE SODIO 09 SOLUFLEX Restrito Hosp."
//                                     }
//                                 },
//                                 {
//                                     "ans:codigoDespesa": "02",
//                                     "ans:servicosExecutados": {
//                                         "ans:dataExecucao": "2023-10-31",
//                                         "ans:codigoTabela": "20",
//                                         "ans:codigoProcedimento": "0000042366",
//                                         "ans:quantidadeExecutada": "1.0000",
//                                         "ans:unidadeMedida": "023",
//                                         "ans:reducaoAcrescimo": "1.00",
//                                         "ans:valorUnitario": "609.58",
//                                         "ans:valorTotal": 609.58,
//                                         "ans:descricaoProcedimento": "GADOVIST Restrito Hosp."
//                                     }
//                                 },
//                                 {
//                                     "ans:codigoDespesa": "03",
//                                     "ans:servicosExecutados": {
//                                         "ans:dataExecucao": "2023-10-31",
//                                         "ans:codigoTabela": "19",
//                                         "ans:codigoProcedimento": "0000282015",
//                                         "ans:quantidadeExecutada": "1.0000",
//                                         "ans:unidadeMedida": "036",
//                                         "ans:reducaoAcrescimo": "1.00",
//                                         "ans:valorUnitario": "18.45",
//                                         "ans:valorTotal": 18.45,
//                                         "ans:descricaoProcedimento": "Cateter Intravenoso  20 g"
//                                     }
//                                 },
//                                 {
//                                     "ans:codigoDespesa": "03",
//                                     "ans:servicosExecutados": {
//                                         "ans:dataExecucao": "2023-10-31",
//                                         "ans:codigoTabela": "19",
//                                         "ans:codigoProcedimento": "0000262532",
//                                         "ans:quantidadeExecutada": "1.0000",
//                                         "ans:unidadeMedida": "036",
//                                         "ans:reducaoAcrescimo": "1.00",
//                                         "ans:valorUnitario": "44.00",
//                                         "ans:valorTotal": 44,
//                                         "ans:descricaoProcedimento": "CONECTOR P/SER.INJECAO CONTRASTE"
//                                     }
//                                 },
//                                 {
//                                     "ans:codigoDespesa": "03",
//                                     "ans:servicosExecutados": {
//                                         "ans:dataExecucao": "2023-10-31",
//                                         "ans:codigoTabela": "19",
//                                         "ans:codigoProcedimento": "0000249253",
//                                         "ans:quantidadeExecutada": "1.0000",
//                                         "ans:unidadeMedida": "036",
//                                         "ans:reducaoAcrescimo": "1.00",
//                                         "ans:valorUnitario": "40.50",
//                                         "ans:valorTotal": 40.5,
//                                         "ans:descricaoProcedimento": "EXTENSOR 12FRX20CM FEMEA/MACHO C/VALVULA ANTI-REFLUXO"
//                                     }
//                                 },
//                                 {
//                                     "ans:codigoDespesa": "03",
//                                     "ans:servicosExecutados": {
//                                         "ans:dataExecucao": "2023-10-31",
//                                         "ans:codigoTabela": "19",
//                                         "ans:codigoProcedimento": "0000244011",
//                                         "ans:quantidadeExecutada": "1.0000",
//                                         "ans:unidadeMedida": "036",
//                                         "ans:reducaoAcrescimo": "1.00",
//                                         "ans:valorUnitario": "1.31",
//                                         "ans:valorTotal": 1.31,
//                                         "ans:descricaoProcedimento": "Fixador de Puncao"
//                                     }
//                                 },
//                                 {
//                                     "ans:codigoDespesa": "03",
//                                     "ans:servicosExecutados": {
//                                         "ans:dataExecucao": "2023-10-31",
//                                         "ans:codigoTabela": "19",
//                                         "ans:codigoProcedimento": "0000018481",
//                                         "ans:quantidadeExecutada": "1.0000",
//                                         "ans:unidadeMedida": "036",
//                                         "ans:reducaoAcrescimo": "1.00",
//                                         "ans:valorUnitario": "0.23",
//                                         "ans:valorTotal": 0.23,
//                                         "ans:descricaoProcedimento": "Gaze Dobrada Esteril Envelope7,5x7,5"
//                                     }
//                                 },
//                                 {
//                                     "ans:codigoDespesa": "03",
//                                     "ans:servicosExecutados": {
//                                         "ans:dataExecucao": "2023-10-31",
//                                         "ans:codigoTabela": "19",
//                                         "ans:codigoProcedimento": "0000092690",
//                                         "ans:quantidadeExecutada": "1.0000",
//                                         "ans:unidadeMedida": "036",
//                                         "ans:reducaoAcrescimo": "1.00",
//                                         "ans:valorUnitario": "273.80",
//                                         "ans:valorTotal": 273.8,
//                                         "ans:descricaoProcedimento": "SERINGA P/INJECAO CONTRASTE SSQK"
//                                     }
//                                 },
//                                 {
//                                     "ans:codigoDespesa": "03",
//                                     "ans:servicosExecutados": {
//                                         "ans:dataExecucao": "2023-10-31",
//                                         "ans:codigoTabela": "19",
//                                         "ans:codigoProcedimento": "0000295591",
//                                         "ans:quantidadeExecutada": "1.0000",
//                                         "ans:unidadeMedida": "036",
//                                         "ans:reducaoAcrescimo": "1.00",
//                                         "ans:valorUnitario": "2.30",
//                                         "ans:valorTotal": 2.3,
//                                         "ans:descricaoProcedimento": "SERINGA 10ML S/AG.LUER LOCK"
//                                     }
//                                 }
//                             ],
//                             "ans:valorTotal": {
//                                 "ans:valorProcedimentos": "803.8600",
//                                 "ans:valorDiarias": "0.00",
//                                 "ans:valorTaxasAlugueis": "0.00",
//                                 "ans:valorMateriais": "380.5900",
//                                 "ans:valorMedicamentos": "618.3500",
//                                 "ans:valorOPME": "0.00",
//                                 "ans:valorGasesMedicinais": "0.00",
//                                 "ans:valorTotalGeral": "1802.8000"
//                             }
//                         },
//                         {
//                             "ans:cabecalhoGuia": {
//                                 "ans:registroANS": "999999",
//                                 "ans:numeroGuiaPrestador": "4554928",
//                                 "ans:guiaPrincipal": "4554928"
//                             },
//                             "ans:dadosAutorizacao": {
//                                 "ans:numeroGuiaOperadora": "4554928",
//                                 "ans:dataAutorizacao": "2023-10-30",
//                                 "ans:senha": "4554928",
//                                 "ans:dataValidadeSenha": "2023-10-30"
//                             },
//                             "ans:dadosBeneficiario": {
//                                 "ans:numeroCarteira": "000086384",
//                                 "ans:atendimentoRN": "N",
//                                 "ans:nomeBeneficiario": "Veronilia Santos Aguiar"
//                             },
//                             "ans:dadosSolicitante": {
//                                 "ans:contratadoSolicitante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:profissionalSolicitante": {
//                                     "ans:nomeProfissional": "Isabela Esteves",
//                                     "ans:conselhoProfissional": "06",
//                                     "ans:numeroConselhoProfissional": "19370",
//                                     "ans:UF": "53",
//                                     "ans:CBOS": "225125"
//                                 }
//                             },
//                             "ans:dadosSolicitacao": {
//                                 "ans:dataSolicitacao": "2023-10-30",
//                                 "ans:caraterAtendimento": "1",
//                                 "ans:indicacaoClinica": "Nodulo mamario NE - Nodulo mamario NE"
//                             },
//                             "ans:dadosExecutante": {
//                                 "ans:contratadoExecutante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:CNES": "9264426"
//                             },
//                             "ans:dadosAtendimento": {
//                                 "ans:tipoAtendimento": "05",
//                                 "ans:indicacaoAcidente": "9",
//                                 "ans:tipoConsulta": "1"
//                             },
//                             "ans:procedimentosExecutados": [
//                                 {
//                                     "ans:dataExecucao": "2023-10-30",
//                                     "ans:horaInicial": "15:04:31",
//                                     "ans:horaFinal": "15:04:31",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40901300",
//                                         "ans:descricaoProcedimento": "Transvaginal (Inclui Abdome Inferior Feminino)"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "83.77",
//                                     "ans:valorTotal": "83.77",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "47088150182"
//                                         },
//                                         "ans:nomeProf": "Marcelo Gonzaga Peres",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "8207",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 }
//                             ],
//                             "ans:valorTotal": {
//                                 "ans:valorProcedimentos": "83.7700",
//                                 "ans:valorTotalGeral": "83.7700"
//                             }
//                         },
//                         {
//                             "ans:cabecalhoGuia": {
//                                 "ans:registroANS": "999999",
//                                 "ans:numeroGuiaPrestador": "4895555",
//                                 "ans:guiaPrincipal": "4895555"
//                             },
//                             "ans:dadosAutorizacao": {
//                                 "ans:numeroGuiaOperadora": "4895555",
//                                 "ans:dataAutorizacao": "2023-10-16",
//                                 "ans:senha": "4895555",
//                                 "ans:dataValidadeSenha": "2023-10-27"
//                             },
//                             "ans:dadosBeneficiario": {
//                                 "ans:numeroCarteira": "000180494",
//                                 "ans:atendimentoRN": "N",
//                                 "ans:nomeBeneficiario": "Violeta Pereira de Rezende"
//                             },
//                             "ans:dadosSolicitante": {
//                                 "ans:contratadoSolicitante": {
//                                     "ans:cnpjContratado": "00735860000173",
//                                     "ans:nomeContratado": "Associacao de Medicos E Hospitais Privados do Df"
//                                 },
//                                 "ans:profissionalSolicitante": {
//                                     "ans:nomeProfissional": "Josiane Fernandes Ferreira Rodrigues",
//                                     "ans:conselhoProfissional": "06",
//                                     "ans:numeroConselhoProfissional": "7134",
//                                     "ans:UF": "53",
//                                     "ans:CBOS": "225250"
//                                 }
//                             },
//                             "ans:dadosSolicitacao": {
//                                 "ans:dataSolicitacao": "2023-10-27",
//                                 "ans:caraterAtendimento": "1",
//                                 "ans:indicacaoClinica": "Outr exam invest esp pess s/queix diag relat - Exame ginecologico"
//                             },
//                             "ans:dadosExecutante": {
//                                 "ans:contratadoExecutante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:CNES": "9264426"
//                             },
//                             "ans:dadosAtendimento": {
//                                 "ans:tipoAtendimento": "05",
//                                 "ans:indicacaoAcidente": "9",
//                                 "ans:tipoConsulta": "1"
//                             },
//                             "ans:procedimentosExecutados": [
//                                 {
//                                     "ans:dataExecucao": "2023-10-27",
//                                     "ans:horaInicial": "14:39:02",
//                                     "ans:horaFinal": "14:39:02",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40901300",
//                                         "ans:descricaoProcedimento": "Transvaginal (Inclui Abdome Inferior Feminino)"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "83.77",
//                                     "ans:valorTotal": "83.77",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "47088150182"
//                                         },
//                                         "ans:nomeProf": "Marcelo Gonzaga Peres",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "8207",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 },
//                                 {
//                                     "ans:dataExecucao": "2023-10-27",
//                                     "ans:horaInicial": "14:39:02",
//                                     "ans:horaFinal": "14:39:02",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40901114",
//                                         "ans:descricaoProcedimento": "Mamas"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "49.68",
//                                     "ans:valorTotal": "49.68",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "47088150182"
//                                         },
//                                         "ans:nomeProf": "Marcelo Gonzaga Peres",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "8207",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 },
//                                 {
//                                     "ans:dataExecucao": "2023-10-27",
//                                     "ans:horaInicial": "14:39:02",
//                                     "ans:horaFinal": "14:39:02",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40901211",
//                                         "ans:descricaoProcedimento": "Estruturas Superficiais (Cervical Ou Axilas Ou Musculo Ou Tendao)"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "49.68",
//                                     "ans:valorTotal": "49.68",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "47088150182"
//                                         },
//                                         "ans:nomeProf": "Marcelo Gonzaga Peres",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "8207",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 },
//                                 {
//                                     "ans:dataExecucao": "2023-10-27",
//                                     "ans:horaInicial": "14:39:02",
//                                     "ans:horaFinal": "14:39:02",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40808041",
//                                         "ans:descricaoProcedimento": "Mamografia Digital Bilateral"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "139.09",
//                                     "ans:valorTotal": "139.09",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "64728510182"
//                                         },
//                                         "ans:nomeProf": "Iris Gardenia Cavalca E Silva",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "10842",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225255"
//                                     }
//                                 }
//                             ],
//                             "ans:valorTotal": {
//                                 "ans:valorProcedimentos": "322.2200",
//                                 "ans:valorTotalGeral": "322.2200",
//                                 "ans:valorMateriais": "0.0000",
//                                 "ans:valorMedicamentos": "0.0000"
//                             },
//                             "ans:outrasDespesas": [
//                                 {
//                                     "ans:codigoDespesa": "02",
//                                     "ans:sequencialItem": 1,
//                                     "ans:servicosExecutados": {
//                                         "ans:codigoProcedimento": "-",
//                                         "ans:codigoTabela": "-",
//                                         "ans:dataExecucao": 0,
//                                         "ans:descricaoProcedimento": "-",
//                                         "ans:quantidadeExecutada": 0,
//                                         "ans:reducaoAcrescimo": "1.00",
//                                         "ans:unidadeMedida": "-",
//                                         "ans:valorTotal": 0,
//                                         "ans:valorUnitario": 0
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "ans:cabecalhoGuia": {
//                                 "ans:registroANS": "999999",
//                                 "ans:numeroGuiaPrestador": "4909760",
//                                 "ans:guiaPrincipal": "4909760"
//                             },
//                             "ans:dadosAutorizacao": {
//                                 "ans:numeroGuiaOperadora": "4909760",
//                                 "ans:dataAutorizacao": "2023-10-26",
//                                 "ans:senha": "4909760",
//                                 "ans:dataValidadeSenha": "2023-10-27"
//                             },
//                             "ans:dadosBeneficiario": {
//                                 "ans:numeroCarteira": "000254400",
//                                 "ans:atendimentoRN": "N",
//                                 "ans:nomeBeneficiario": "Zeneide Maria de Paula"
//                             },
//                             "ans:dadosSolicitante": {
//                                 "ans:contratadoSolicitante": {
//                                     "ans:cnpjContratado": "03989821000433",
//                                     "ans:nomeContratado": "Acreditar Oncologia"
//                                 },
//                                 "ans:profissionalSolicitante": {
//                                     "ans:nomeProfissional": "Paula Miranda",
//                                     "ans:conselhoProfissional": "06",
//                                     "ans:numeroConselhoProfissional": "22127",
//                                     "ans:UF": "53",
//                                     "ans:CBOS": "225125"
//                                 }
//                             },
//                             "ans:dadosSolicitacao": {
//                                 "ans:dataSolicitacao": "2023-10-27",
//                                 "ans:caraterAtendimento": "1",
//                                 "ans:indicacaoClinica": "Displasias mamarias benignas - Mastopatia cistica difusa"
//                             },
//                             "ans:dadosExecutante": {
//                                 "ans:contratadoExecutante": {
//                                     "ans:codigoPrestadorNaOperadora": "00623106000494",
//                                     "ans:nomeContratado": "Clinica da Mama Diagnostico Por Imagem Ltda"
//                                 },
//                                 "ans:CNES": "9264426"
//                             },
//                             "ans:dadosAtendimento": {
//                                 "ans:tipoAtendimento": "05",
//                                 "ans:indicacaoAcidente": "9",
//                                 "ans:tipoConsulta": "1"
//                             },
//                             "ans:procedimentosExecutados": [
//                                 {
//                                     "ans:dataExecucao": "2023-10-27",
//                                     "ans:horaInicial": "14:23:41",
//                                     "ans:horaFinal": "14:23:41",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40808041",
//                                         "ans:descricaoProcedimento": "Mamografia Digital Bilateral"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "139.09",
//                                     "ans:valorTotal": "139.09",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "64728510182"
//                                         },
//                                         "ans:nomeProf": "Iris Gardenia Cavalca E Silva",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "10842",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225255"
//                                     }
//                                 },
//                                 {
//                                     "ans:dataExecucao": "2023-10-27",
//                                     "ans:horaInicial": "14:23:41",
//                                     "ans:horaFinal": "14:23:41",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40901211",
//                                         "ans:descricaoProcedimento": "Estruturas Superficiais (Cervical Ou Axilas Ou Musculo Ou Tendao)"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "49.68",
//                                     "ans:valorTotal": "49.68",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "47088150182"
//                                         },
//                                         "ans:nomeProf": "Marcelo Gonzaga Peres",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "8207",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 },
//                                 {
//                                     "ans:dataExecucao": "2023-10-27",
//                                     "ans:horaInicial": "14:23:41",
//                                     "ans:horaFinal": "14:23:41",
//                                     "ans:procedimento": {
//                                         "ans:codigoTabela": "22",
//                                         "ans:codigoProcedimento": "40901114",
//                                         "ans:descricaoProcedimento": "Mamas"
//                                     },
//                                     "ans:quantidadeExecutada": "1",
//                                     "ans:viaAcesso": "1",
//                                     "ans:reducaoAcrescimo": "1.00",
//                                     "ans:valorUnitario": "70.97",
//                                     "ans:valorTotal": "70.97",
//                                     "ans:equipeSadt": {
//                                         "ans:grauPart": "12",
//                                         "ans:codProfissional": {
//                                             "ans:cpfContratado": "47088150182"
//                                         },
//                                         "ans:nomeProf": "Marcelo Gonzaga Peres",
//                                         "ans:conselho": "06",
//                                         "ans:numeroConselhoProfissional": "8207",
//                                         "ans:UF": "53",
//                                         "ans:CBOS": "225320"
//                                     }
//                                 }
//                             ],
//                             "ans:valorTotal": {
//                                 "ans:valorProcedimentos": "259.7400",
//                                 "ans:valorTotalGeral": "259.7400"
//                             }
//                         }
//                     ]
//                 }
//             },
//             "ans:epilogo": {
//                 "ans:hash": "d9bc70ae298266b5103793457ac2a186"
//             }
//         }
//     },
//     "nomeDoArquivo": "143112",
//     "ValorTotalXML": "R$ 4.863,59"
// }