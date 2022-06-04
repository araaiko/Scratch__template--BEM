# Scratch__template--FLOCSS
BEM版テンプレート

※各フォルダには必ずエントリポイント用ファイルとして、**index.scss**を用意する。

**globalフォルダ**<br/>
変数、placeholder、animation、など

**baseフォルダ**<br/>
base.scss, reset.scss

**externalフォルダ**<br/>
slickなどのプラグイン

**pagesフォルダ**<br/>
ページ単位で使用するもの（そのページだけでしか使わないもの）<br/>
具体的にクラス名をつけたものはここ<br/>
例：<br/>
home-mv.scss<br/>
home-about.scss<br/>

**modulesフォルダ**<br/>
サイト共通で使用するもの<br/>
1回しか使っていないものでも、汎用性のあるモジュールならここに格納する<br/>
例：<br/>
header.scss<br/>
footer.scss<br/>
sub-page-header.scss<br/>

**utilityフォルダ**<br/>
u-is-pc, u-is-spなど
