# tpl-umbrella-basic

This is an absolute bare-bones [TypeScript](https://www.typescriptlang.org/) &
[Vite](https://vitejs.dev/) project template, pre-configured with some useful
[thi.ng/umbrella](https://github.com/thi-ng/umbrella/) packages and (optionally) using
[Tachyons CSS](https://tachyons.io/)...

Edit/delete everything as you see fit & please submit an issue if you spot
anything wrong! Thanks!

## Getting started

Please consult the [GitHub
documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)
for how to get started with template repos. Once you got it cloned locally,
proceed as follows:

```bash
# git clone ...

cd <path-where-you-cloned-this-tpl>

# download all dependencies (can also use npm)
yarn install

# alternatively, ensure you're using latest package versions
yarn upgrade-interactive --latest

# start dev server & open in browser
yarn start
```

Note: The [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html) used
for minifying the HTML in production builds is currently causing deprecation
warnings in Vite v5+. PRs for an alternative solution are much appreciated.
Thanks!

## License

This project is licensed under the MIT License. See LICENSE.txt

&copy; 2023 Karsten Schmidt
