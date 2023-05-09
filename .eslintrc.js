module.exports = {
    extends: [
        // 'next/core-web-vitals',
        'plugin:@next/next/recommended',
        'universe/web',
        'plugin:json/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    plugins: ['react-hooks'],
    env: {
        node: true,
    },
    rules: {
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto',
            },
            {
                usePrettierrc: true,
            },
        ],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/prop-types': 0,
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
    },
};
