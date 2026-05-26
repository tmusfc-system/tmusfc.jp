# tmusfc.jpのソースファイルを置くリポジトリ

## 編集方法
### インストールするもの
- nodejs (必須)
- Github Desktop (推奨)
- Visual Studio Code  (推奨)

### 必要なもの
- GitHubアカウント

### 必要知識
- Git
- GitHub Pages
- html, css, js
- TypeScript
- React
- Shadcn/ui

## 編集のイメージ
ソースコードはGitHubで管理しています。      
1. GitHubにあるソースコードを、GitHub Desktopを用いて自分のPCにダウンロード (git clone)
2. Visual Studio Codeを用いて自分のPCでHPソースコードを編集
3. ViteでソースコードをBuildする
4. 編集済みのソースコードをGitHub Desktopを用いてGitHubにアップロード (git push)
5. GitHubが自動でtmusfc.jpに変更を反映してくれる

## 1. GitHubにあるソースコードをダウンロード
GitHubデスクトップにこのリポジトリ―をcloneします。（初回のみ）      
2回目以降は、fetch & pullをして、GitHubにあるソースコードの変更点を同期させます。

### 初回のみやること
コマンドプロンプトを開いて、自分のPCのリポジトリ―が入ってるフォルダまで移動します。     
GitHub Desktopなどのインストールをデフォルトで行うと多分以下のフォルダーに。
```bash
C:\Users\_user_name_\Documents\GitHub\tmusfc.jp
```
リポジトリ―の`ui`フォルダに移動します
```bash
cd ui
```
HP作成に必要なライブラリをインストールします。
nodejsがインストールできていれば、以下のコマンドでできます
```bash
npm install
```
インストール時にvulnerability(脆弱性)の警告が出てきたら、```npm audit fix```でライブラリを最新の状態に更新します。      


## 2. VSCodeで編集
基本は`/ui/src/`以下を編集します。      
使用しているフレームワークは、Shadcn/uiです。Tailwind cssが使えるので、cssを別途で書く必要はあまりないです。        
`ui`のディレクトリで`npm run dev`を実行すると、`http://localhost:5173/`のようなURLが出てくるので、それをブラウザで開いてください。ファイルが保存されるたびに勝手にリロードして、最新の状態をプレビューしながら編集できます。       


## 3. Build
`npm run build`でhtmlとjs, cssに変換できます。変換したファイルは`/ui/dist/`に出力されるので、`/ui/dist/index.html`はこのReadme.mdと同じフォルダに、`/ui/dist/assets/`は`/assets/`に移動してください。


## 4. git push
GitHub Desktopで編集したものをGitHubにアップロードします。

## 5. 変更点反映
GitHubが反映するまでしばらく待ちます。
[このページ](https://github.com/tmusfc-system/tmusfc.jp/actions)から反映の進捗を確かめることができます。


# その他
(言ってること分からんかったら調べて、AIとかで)      
ReactはSPAをベースにしたフレームワークなので、URLで特定の情報にアクセスすることが難しい     
もしそうしたいなら(https://tmusfc.jp/member.html で部員のページに飛びたいとか)React Routerなど必要