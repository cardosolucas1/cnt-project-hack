export const addItemLocalStorage = (key, value) => {
  let forms = JSON.parse(localStorage.getItem('Forms'));
  forms.push({ key: value });
  localStorage.setItem('Forms', JSON.stringify(forms));
};

export const removeItemLocalStorage = (key) => {
  const forms = JSON.parse(localStorage.getItem('Forms'));
  const newForms = forms.filter((form) => form.key !== key);
  localStorage.setItem('Forms', JSON.stringify(newForms));
};