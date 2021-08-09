// Function for api calls, takes in url, method, body;
// Returns res.json of call
export const Accesstoken = "6bcd30da-a06a-4510-976a-fdbd7d3e6ff3";

export const apiService = async (
  url,
  method = "GET",
  body,
  compiler = true
) => {
  const headers = {
    "Content-Type": "application/json",
  };
  if (compiler) {
    headers["Authorization"] = `Token ${Accesstoken}`;
  }
  try {
    const res = await fetch(url, {
      method,
      mode: "no-cors",
      headers,
      body: JSON.stringify(body),
    });
    if (res.ok) {
      return await res.json();
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};
