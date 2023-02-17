// /** @type {import('next').NextConfig} */
// // next.config.js

// const isGithubActions = process.env.GITHUB_ACTIONS || false

// let assetPrefix = ''
// let basePath = ''

// if (isGithubActions) {
//   // trim off `<owner>/`
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
//   //console.log(repo);
//   assetPrefix = `/portfolio/`
//   //basePath = `/${repo}`
// }

// module.exports = {
//   assetPrefix: assetPrefix,
//   reactStrictMode: true,
//   swcMinify: true
// }

const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');
const isDev = process.env.NODE_ENV !== "production";

module.exports = withPlugins([
    [withImages, {
        assetPrefix: isDev ? "": "/portfolio/"
    }],
    {
        trailingSlash: true,
        basePath: isDev ? "": "/portfolio",
        assetPrefix: isDev ? "": "/portfolio/"    
    }
])