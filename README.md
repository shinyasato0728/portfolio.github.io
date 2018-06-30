# README

macOS上での開発環境の構築手順を示す。

### Homebrewのインストール

```
# インストールする
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# 確認する
$ brew -v
#> Homebrew 1.2.3
#> Homebrew/homebrew-core (git revision 7212; last commit 2017-07-02)
```

### nodebrewのインストール

```
# インストールする
$ curl -L git.io/nodebrew | perl - setup

# パスを通す
# ~/.bash_profileに追加
export PATH=$HOME/.nodebrew/current/bin:$PATH

# node.jsのインストール可能なバージョンを確認する
$ nodebrew ls-remote

# node.js v9.6.1のインストール
$ nodebrew install-binary v9.6.1

# 確認する
$ nodebrew ls
v9.6.1

current: none

# node.jsをセットアップする
$ nodebrew use v9.6.1

# 確認する
$ node -v
v9.6.1
```

### yarnのインストール
```
$ brew install yarn
```

### hugoのインストール
```
$ brew install hugo
```

### yarn installの実行
```
$ yarn install
```

### ローカルサーバーを立ち上げる
```
$ yarn start
```

### buildする
```
$ yarn build
```

---

# PostCSSのプラグイン

- [postcss-cli](https://www.npmjs.com/package/postcss-cli)

CLIでPostCSSを使うプラグイン。これがないと何も始まらない

- [cssnano](https://www.npmjs.com/package/cssnano)

buildしたPostCSSをminifyする。不必要はベンダープレフィックスは自動的に削除する

- [stylelint](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/postcss-plugin.md)

PostCSSのリンター。プラグインにも対応

stylelint.config.jsで[ルールの設定が必要](https://stylelint.io/)

- [autoprefixer](https://github.com/postcss/autoprefixer)

ベンダープレフィックスを自動的につけてくれる。設定で対象ブラウザ・バージョン範囲の設定が可能

- [postcss-reporter](https://github.com/postcss/postcss-reporter)

stylelintのログを見やすくしてくれる

- [postcss-import](https://www.npmjs.com/package/postcss-import)

PostCSSでimportが使えるようになる

```
@import 'mixins.css';
```

- [postcss-mixins](https://www.npmjs.com/package/postcss-mixins)

PostCSSでmixinsが使えるようになる

```
/* postcss.css */
@define-mixin titleBackground $titleBackground { padding: 8px; background: $titleBackground; border-radius: 4px; }
.mixins { @mixin titleBackground #f8f8f9;}

/* build.css */
.mixins { padding: 8px; background: #f8f8f9; border-radius: 4px;}
```

- [postcss-simple-vars](https://www.npmjs.com/package/postcss-simple-vars)

PostCSSで変数が使えるようになる

```
/* postcss.css */
$textColor: #212121;
$baseFontSize: 16px;

body { color: $textColor; font-size: $baseFontSize;}

/* build.css */
body { color: #212121; font-size: 16px;}
```

- [postcss-nested](https://www.npmjs.com/package/postcss-nested)

PostCSSでNest（入れ子）が使えるようになる

- [postcss-custom-media](https://www.npmjs.com/package/postcss-custom-media)

@mediaの指定を簡単にする

```
/* postcss.css */
@custom-media --smartphone (max-width: 600px);
.media { width: 100%;
  @media(--smartphone) { width: 95%;}
}

/* build.css */
.media { width: 100%;
  @media (max-width: 600px) { width: 95%;}
}
```

- [postcss-pixels-to-rem](https://www.npmjs.com/package/postcss-pixels-to-rem)

pixel単位をrem,em単位に変換する

```
/* postcss.css */
h1 { font-size: rem(32); margin-bottom: 32px;}
h2 { font-size: em(24); margin-bottom: 24px;}
h3 { font-size: 16px; margin-bottom: 16px;}

/* build.css */
h1 { font-size: 2rem; margin-bottom: 2rem;}
h2 { font-size: 1.5em; margin-bottom: 1.5rem;}
h3 { font-size: 1rem; margin-bottom: 1rem;}
```

- [postcss-utilities](https://www.npmjs.com/package/postcss-utilities)

[あらかじめ用意されたパッケージ](https://ismamz.github.io/postcss-utilities/)が使えるようになる

```
/* postcss.css */
.margins { @util margin(12px 24px null 36px);}

/* build.css */
.margins { margin-top: 12px; margin-right: 24px; margin-left: 36px;}
```
