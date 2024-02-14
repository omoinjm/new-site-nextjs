/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['res.cloudinary.com'],
		formats: ['image/avif', 'image/webp'],
	},
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(png)$/,
			use: {
				loader: 'url-loader',
				options: {
					limit: 100000,
				},
			},
		});

		return config;
	},
};

module.exports = nextConfig;