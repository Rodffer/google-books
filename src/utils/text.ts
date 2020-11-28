const stripHtml = (htmlText: string): string => {
  const tmp = document.createElement('div');
  tmp.innerHTML = htmlText;
  return tmp.textContent || tmp.innerText || '';
};

export { stripHtml };
