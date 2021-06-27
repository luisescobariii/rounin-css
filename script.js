function toggleTheme() {
    const body = document.querySelector('body');
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
    } else {
        body.classList.add('dark');
    }
}