# radiko20230814

## 1 Raspberry pi上にディレクトリを構成する

/home/pi/radiko/ 以下は下記の通りにディレクトリを用意する。

├── be			
│?? ├── radiko		
│?? └── requirements.txt		
├── docker-compose.yml		
├── fe		
│?? ├── Dockerfile	
│?? ├── app	

## 2 コンテナを作成する。

フロントエンド側(fe)はdockerで環境を作る。バックエンド側はRaspberry Pi本体に直接環境を作る。

