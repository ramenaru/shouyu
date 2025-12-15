# Shouyu 

<div align="center">
  <a href="https://github.com/ramenaru/shouyu"><img src="https://github.com/ramenaru/shouyu/blob/main/static/images/banner.png" alt="Banner Screenshot"></a>
  
  <br />

  [![Repository Stars](https://img.shields.io/github/stars/ramenaru/shouyu)](https://github.com/ramenaru/shoyu/)
  [![Repository Forks](https://img.shields.io/github/forks/ramenaru/shouyu)](https://github.com/ramenaru/shouyu/)

  [![MIT Licenses](https://img.shields.io/github/license/ramenaru/shouyu)](LICENSE)
  [![Issues](https://img.shields.io/github/issues/ramenaru/shouyu)](https://github.com/ramenaru/shouyu/issues)
  [![Pull Requests](https://img.shields.io/github/issues-pr/ramenaru/shouyu)](https://github.com/ramenaru/shouyu/pulls)

  <strong>A fast, minimal Hugo theme for focused blogging with dark mode.</strong>  
</div>

## Before Installation
Before starting, please be sure that you have installed [extended version of Hugo](https://github.com/gohugoio/hugo/releases) and created a [new site](https://gohugo.io/getting-started/quick-start/#step-2-create-a-new-site).

## Add Shouyu to Project

#### Option A: As Git Submodule (Recommended)
```bash
cd <hugo-site>
git submodule add https://github.com/ramenaru/shouyu.git themes/shouyu
```

#### Option B: Clone Directly
```bash
cd <hugo-site>/themes
git clone https://github.com/ramenaru/shouyu.git
```

## Configure Theme

Edit `config.toml` or `hugo.toml`, or you can check example site [configuration](https://github.com/ramenaru/shouyu/blob/main/exampleSite/hugo.toml) for more information.  

## Run with Theme
```bash
# Start development server
hugo server -D

# Build for production
hugo
```

## Customize Theme

#### Create overrides (don't edit theme directly):
```
hugo-site/
├── layouts/          # Custom templates
│   └── partials/     # Override theme partials
├── assets/           # Custom CSS/JS
│   └── css/
│       └── custom.css
└── static/           # Custom static files
```

## License
Distributed under MIT License see [LICENSE](LICENSE) for more information.  