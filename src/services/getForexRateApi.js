export async function getFecthForexRate() {
  try {
    const response = await fetch(`https://api.frankfurter.app/latest?`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Forex rates:", error);
    throw error;
  }
}
