
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/MarcusFurtuoso/portfolio/main/data/profile.json?token=GHSAT0AAAAAACA5KHQRS7HGUMHJZQPJVWHOZBXQRUQ';
    const fetching = await fetch(url);
    return await fetching.json();
}







