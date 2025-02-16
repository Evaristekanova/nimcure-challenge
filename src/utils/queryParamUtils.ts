// function which help us to update the query params
const updateQueryParam = (param: string, value: string) => {
  const url = new URL(window.location.href);
  url.searchParams.set(param, value);
  window.history.pushState({}, "", url.toString());
};

// function which help us to remove the query params
const removeQueryParam = (param: string) => {
  const url = new URL(window.location.href);
  url.searchParams.delete(param); // Removes the query param
  window.history.pushState({}, "", url.toString());
};

// function which help us to access the query params
const getQueryParam = (param: string): string | null => {
  const url = new URL(window.location.href);
  return url.searchParams.get(param);
};

export { updateQueryParam, removeQueryParam, getQueryParam };
