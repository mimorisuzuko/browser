module.exports = (api) => {
    const plugins = [];
    const presets = [
        '@babel/react',
        [
            '@babel/env',
            {
                targets: {
                    chrome: 59
                }
            }
        ]
    ];

    if (api.env('development')) {
        plugins.push('react-hot-loader/babel');
    }

    return { plugins, presets };
};
