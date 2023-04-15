
function updateProfileInfo(profileData) {

    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById('profile.name');
    name.innerText = profileData.name;

    const job = document.getElementById('profile.job');
    job.innerText = profileData.job;

    const location = document.getElementById('profile.location');
    location.innerText = profileData.location;

    const phone = document.getElementById('profile.phone');
    phone.innerText = profileData.phone;
    phone.href = `tel:${profileData.phone}`;

    const linkedin = document.getElementById('profile.linkedin');
    linkedin.innerText = profileData.linkedin;
    linkedin.href = `${profileData.linkedin}`;

    const email = document.getElementById('profile.email');
    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`;

}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills');

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills');

    hardSkills.innerHTML = profileData.skills.hardSkills
        .map(image => `<li><img src="${image.logo}" alt="${image.name}" title="${image.name}"></li>`).join('');
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages');

    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio');

    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3> 
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('');
}

function updateCertificates(profileData) {
    const certificates = document.getElementById('profile.certificates');

    certificates.innerHTML = profileData.certificates.map(certificate => {
        return `
            <li>
                <h3 class="title">${certificate.name}</h3>
                <p class="date">${certificate.date}</p>
                <p>${certificate.description}</p>
                <a href="${certificate.url}" target="_blank">${certificate.url}</a>
            </li>
        `
    }).join('');
}


(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateCertificates(profileData);
})()