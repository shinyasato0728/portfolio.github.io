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

### Deploy

![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)

---

# PostCSSのプラグイン

- [postcss-cli](https://www.npmjs.com/package/postcss-cli)

CLIでPostCSSを使うプラグイン

[Gulp](https://gulpjs.com/)やGrunt(https://gruntjs.com/)を使わず、npm scriptでPostCSSを使う場合は必須


- [cssnano](https://www.npmjs.com/package/cssnano)

buildしたPostCSSをminifyする。不必要はベンダープレフィックスは自動的に削除する



- [stylelint](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/postcss-plugin.md)

PostCSSのリンター。プラグインにも対応

stylelint.config.jsで[ルールの設定が必要](https://stylelint.io/)



- [autoprefixer](https://github.com/postcss/autoprefixer)

ベンダープレフィックスを自動的につけてくれる。設定で対象ブラウザ・バージョン範囲の設定が可能



- [postcss-reporter](https://github.com/postcss/postcss-reporter)

stylelintのログを見やすくしてくれる



- [postcss-bem-linter](https://github.com/postcss/postcss-bem-linter)

stylelintがPostCSSの命名規則をBEM方式で記載しているかチェックする



- [postcss-css-reset](https://www.npmjs.com/package/postcss-css-reset)

PostCSSでreset.cssを設定できる

```
@reset-global pc;
```



- [postcss-import](https://www.npmjs.com/package/postcss-import)

PostCSSでimportが使えるようになる

```
@import 'mixins.css';
```



- [postcss-mixins](https://www.npmjs.com/package/postcss-mixins)

PostCSSでmixinsが使えるようになる

```
/* postcss.css */
@define-mixin titleBackground $R, $G, $B, $A { padding: 8px; background: rgba($R, $G, $B, $A); border-radius: 4px; }
.mixins { @mixin titleBackground 245,245,246,0.7;}

/* build.css */
.mixins { padding: 8px; background: rgba(245,245,246,.7); border-radius: 4px;}
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



- [postcss-color-function](https://www.npmjs.com/package/postcss-color-function)

color変数が使えるようになる

```
/* postcss.css */
.f__color { color: color(#000 a(50%)); background-color: color(#000 l(40%)); border-color: color(#fff b(50%));}

/* build.css */
.f__color { color: rgba(0.0.0.0.5); background-color: rgb(102,102,102); border-color: rgb(170, 170, 170);}
```



- [postcss-nested](https://www.npmjs.com/package/postcss-nested)

PostCSSでNest（入れ子）が使えるようになる



- [postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes)

Flexboxのバグを取り除いてくれる



- [postcss-animation](https://www.npmjs.com/package/postcss-animation)

[Animate.css](https://daneden.github.io/animate.css/)をPostCSSで使えるようになる

postcss-mixinsと組み合わせて、アニメーションの再生時間の変更も可能

```
/* postcss.css */
@define-mixin animated $animationTime { animation-fillmode: both; animation-duration: $animationTime; }
.animation { animation: bounce; @mixin animated 3s;}

/* build.css */
.animation {
  animation-name: bounce; animation-fillmode: both; animation-duration: 3s;
}
@keyframes bounce {
  from, 20%, 53%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -30px, 0);
  }
  70% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0,-4px,0);
  }
}
```



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



- [postcss-media-minmax](https://www.npmjs.com/package/postcss-media-minmax)

@mediaのmax-width,min-widthを、不等号で指定することができる

```
/* postcss.css */
@media (width <= 960px) { width: 50%;}
@media (width => 600px) { width: 100%;}

/* build.css */
@media (max-width: 960px) { width: 50%;}
@media (min-width: 600px) { width: 100%;}
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
