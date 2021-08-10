// Function for api calls, takes in url, method, body;
// Returns res.json of call
export const apiService = async (
  url,
  method = "GET",
  body,
  compiler = true
) => {
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const res = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (e) {
    console.log(e);
    throw e;
  }
};
