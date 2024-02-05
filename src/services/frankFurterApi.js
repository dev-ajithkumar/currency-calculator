async function frankFurterApi({ amount = 1 }) {
  try {
    const response = await fetch(
      `https://api.frankfurter.app/latest?from=USD&amount=${amount}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Forex rates:", error);
    throw error;
  }
}

export default frankFurterApi;
