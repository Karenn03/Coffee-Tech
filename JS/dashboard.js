function showSection(sectionId) {
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.classList.add('hidden');
    });

    document.getElementById(sectionId).classList.remove('hidden');
}