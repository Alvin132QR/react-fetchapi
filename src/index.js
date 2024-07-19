const FetchApi = async (url) => {
  const response = await fetch(url).then((res) => res.json())
  return response
}

export default FetchApi;
