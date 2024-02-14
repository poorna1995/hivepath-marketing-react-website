// This function is used for fetching data from authentication apis/ app apis
async function authFetch(url = "", data = {}) {
  // try {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  //
  if (!response.ok) {
    throw Error("Problem in loading data!");
  }
  return response.json();
  // } catch (err) {
  //   console.error(err);
  //   const response = {
  //     result: "Connection Time Out!",
  //   };
  //   return response;
  // }
}

export default authFetch;
