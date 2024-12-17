export function removeSpecialCharacters(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s]/g, "");
}

/**
 *
 * @param e texto referente a formatação de CNPJ ou CPF informada
 * @returns retorna o CNPJ ou CPF formatado
 */

export const handleFormatCnpjCpf = (e: string) => {
  if (e) {
    let documento = e.replace(/[^\d]/gi, "");

    if (documento.length === 11) {
      documento = documento.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        (regex, arg1, arg2, arg3, arg4) => `${arg1}.${arg2}.${arg3}-${arg4}`
      );
    } else if (documento.length > 11) {
      documento = documento.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        (regex, arg1, arg2, arg3, arg4, arg5) =>
          `${arg1}.${arg2}.${arg3}/${arg4}-${arg5}`
      );
    }
    return documento;
  }
  return e;
};

/**
 *
 * @param cpf texto referente a formatação de CNPJ ou CPF informada
 * @returns retorna o CNPJ ou CPF formatando ocultando os últimos digitos com um '*'
 */

export function handleHideLastDigitsCpf(cpf: string) {
  const cpfFormatted = cpf.replace(
    /(\d{3}\.\d{3}\.)(\d{3})(-\d{2})/,
    "$1***$3"
  );

  const splitCpf = cpfFormatted.split("-");

  const formatSplitCpf = `${splitCpf[0]}-**`;

  return formatSplitCpf;
}

export const scrollToTop = () => {
  const modalBody = document.querySelector(".ant-modal-body");
  modalBody.scrollTop = 0;
};

/**
 *
 * @param cpf texto referente a validação de CPF ou CNPJ informada
 * @returns retorna se o cpf ou cnpj é valido ou não através de um boolean
 */

export const validateCpfOrCnpj = (documento: string) => {
  // Remover caracteres não numéricos
  const documentoNumerico = documento.replace(/\D/g, "");

  // Verificar se é CPF (11 dígitos)
  if (documentoNumerico.length === 11) {
    // Validar CPF
    const cpf = documentoNumerico;
    if (/^(\d)\1{10}$/.test(cpf)) {
      return false;
    }
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = sum % 11;
    let digit = remainder < 2 ? 0 : 11 - remainder;
    if (digit !== parseInt(cpf.charAt(9))) {
      return false;
    }
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = sum % 11;
    digit = remainder < 2 ? 0 : 11 - remainder;
    if (digit !== parseInt(cpf.charAt(10))) {
      return false;
    }
    return true;
  }

  // Verificar se é CNPJ (14 dígitos)
  if (documentoNumerico.length === 14) {
    // Validar CNPJ
    const cnpj = documentoNumerico;
    if (/^(\d)\1{13}$/.test(cnpj)) {
      return false;
    }
    let sum = 0;
    let weight = 5;
    for (let i = 0; i < 12; i++) {
      sum += parseInt(cnpj.charAt(i)) * weight;
      weight = weight === 2 ? 9 : weight - 1;
    }
    let remainder = sum % 11;
    let digit = remainder < 2 ? 0 : 11 - remainder;
    if (digit !== parseInt(cnpj.charAt(12))) {
      return false;
    }
    sum = 0;
    weight = 6;
    for (let i = 0; i < 13; i++) {
      sum += parseInt(cnpj.charAt(i)) * weight;
      weight = weight === 2 ? 9 : weight - 1;
    }
    remainder = sum % 11;
    digit = remainder < 2 ? 0 : 11 - remainder;
    if (digit !== parseInt(cnpj.charAt(13))) {
      return false;
    }
    return true;
  }

  // Se não for CPF nem CNPJ, retornar falso
  return false;
};
