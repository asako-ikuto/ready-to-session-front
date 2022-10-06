# Ready-to-session

ミュージシャン（歌手や楽器演奏者など）が、自分が演奏可能な楽曲リストを作成し、お互いにシェアできるサービスです。<br>
また、自分の演奏可能曲リストと、選択したユーザの演奏可能曲リストを比較し、一致する楽曲（すぐにセッションできる曲）をピックアップしてくれます。<br>
お互いの演奏可能曲がすぐに把握できるので、ミュージシャン同士が組んで演奏する時の曲決めをスムーズに行うことができます。<br>
レスポンシブ対応しているので、スマホからもご確認いただけます。

<img src="https://user-images.githubusercontent.com/59917584/194277799-8911eda6-5b87-427a-9101-525b93ce6d82.jpg">
<img src="https://user-images.githubusercontent.com/59917584/194278029-118f3ec2-529f-4892-8195-dcd605bc6bf3.jpg">

## URL
https://ready-to-session.com <br>

## バックエンド(Laravel)はこちら
https://github.com/asako-ikuto/ready-to-session-api

## 機能一覧
- ユーザ登録、ログイン機能（Email、Twitter、Goodleログイン可能）
- 登録機能
  - 曲登録（管理者権限）
  - アーティスト登録（管理者権限）
- 一覧表示
  - 曲一覧
  - アーティスト一覧
  - ユーザ一覧
  - ユーザの演奏可能曲リスト一覧（自分、他のユーザ）
- 編集・削除機能
  - 曲編集・削除（管理者権限）
  - アーティスト編集・削除（管理者権限）
- 演奏可能曲登録・削除機能
  - 曲一覧から演奏可能曲リストに追加・削除
- 演奏可能曲比較機能
  - 自分の演奏可能曲と、選択したユーザの演奏可能曲を比較、一致したものを表示

↓詳細はこちら<br>
https://docs.google.com/spreadsheets/d/1LivSmoTkIhffaIimKDPSTkly_LgzpkRZyNFDS3Y0ZLw/edit?usp=sharing

## ワイヤーフレーム、画面遷移図

https://www.figma.com/file/i7rv6o3yEHSZhF1s8WVPP6/Ready-to-Session-Wireframe?node-id=0%3A1

## DB設計図(ER図)

<img width="800" src="https://user-images.githubusercontent.com/59917584/194223679-378b4d63-051c-4d0b-aca5-a9cc791cd799.jpg">

## ネットワーク構成図

<img width="800" src="https://user-images.githubusercontent.com/59917584/194223725-173d4d32-f6cc-489e-a7c3-c0f70e9a21c4.jpg">

## 技術構成
SPA(Nuxt.js(Vue.js)) + API(Laravel) + RDS(MySQL)という形です。

- フロントエンド
  - Vue.js
  - Nuxt.js
  - vuetify
- バックエンド
  - PHP
  - Laravel
  - laradock
- AWS
  - VPC
  - EC2
  - RDS
  - Route53
  - Amplify
- MySQL
- Nginx
- Docker/Docker-compose

