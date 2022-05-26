module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    plugins: [require('daisyui')],
    daisyui: {
        darkTheme:'dracula',
        themes: ['winter', 'dracula']
    },
    theme: {
        extend: {
            fontFamily: {
                noto: ['Noto Sans'],
                prata:['Prata']
            }
        }
    }
};
