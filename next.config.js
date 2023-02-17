/** @type {import('next').NextConfig} */
// next.config.js

//const isGithubActions = process.env.GITHUB_ACTIONS || false

// let assetPrefix = ''
// let basePath = ''

// if (isGithubActions) {
//   // trim off `<owner>/`
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
//   //console.log(repo);
//   assetPrefix = `/portfolio/`
//   //basePath = `/${repo}`
// }

module.exports = {
  assetPrefix: `/portfolio/`,
  reactStrictMode: true,
  swcMinify: true
}
