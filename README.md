# Scratch__template--FLOCSS
BEM版テンプレート

※各フォルダには必ずエントリポイント用ファイルとして、index.scssを用意する。

**globalフォルダ**<br/>
変数、placeholder、animation、など

**baseフォルダ**
base.scss, reset.scss

**externalフォルダ**
slickなどのプラグイン

**pagesフォルダ**
ページ単位で使用するもの（そのページだけでしか使わないもの）
具体的にクラス名をつけたものはここ
例：
home-mv.scss
home-about.scss

**modulesフォルダ**
サイト共通で使用するもの
1回しか使っていないものでも、汎用性のあるモジュールならここに格納する
例：
header.scss
footer.scss
sub-page-header.scss

**utilityフォルダ**
u-is-pc, u-is-spなど
