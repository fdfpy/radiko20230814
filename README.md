# radiko20230814

## 1 Raspberry pi上にディレクトリを構成する

/home/pi/radiko/ 以下は下記の通りにディレクトリを用意する。

├── be			<br>
│?? ├── radiko	<br>	
│?? └── requirements.txt		<br>
├── docker-compose.yml		<br>
├── fe		<br>
│?? ├── Dockerfile <br>
│?? ├── package.json<br>
│?? ├── app	<br>

## 2 コンテナを作成する。

フロントエンド側(fe)はdockerで環境を作る。バックエンド側はRaspberry Pi本体に直接環境を作る。
docker-compose.ymlを実行する

```DockerFile:/home/pi/radikodocker-compose.yml
docker-compose build
docker start fe
```

## 3 フロントエンド側(fe)でVueCliを作成する

```console:/home/pi/radiko
docker exec -it fetest bash
```
```dockershell:/app
vue create radiko
```

Vue CLI v5.0.8
? Please pick a preset:
  Default ([Vue 3] babel, eslint)
? Default ([Vue 2] babel, eslint)  vue2を選択すること
  Manually select features

  ? Please pick a preset: Default ([Vue 2] babel, eslint)
? Pick the package manager to use when installing dependencies:
  Use Yarn
? Use NPM  NPMを選択すること

＊＊＊　途中略　＊＊＊

?  Successfully created project radiko.
?  Get started with the following commands:


vue cli作成完了後、下記のディレクトリが完成している。 **追加と記載したファイルをgithubからダウンロードし書き換える

.
├── Dockerfile <br>
├── app <br>
│   ├── node_modules <br>
│   └── radiko <br>
│       ├── README.md <br>
│       ├── babel.config.js <br>
│       ├── jsconfig.json <br>
│       ├── node_modules <br>
│       ├── package-lock.json <br>
│       ├── package.json <br>
│       ├── public <br>
│       │   ├── favicon.ico <br>
│       │   └── index.html <br>
│       ├── src <br>
│       │   ├── App.vue  **追加 <br>
│       │   ├── assets <br>
│       │   │   └── logo.png <br>
│       │   ├── components <br>
│       │   │   ├── HelloWorld.vue  <br>
│       │   │   ├── Kaden.vue **追加 <br>
│       │   │   ├── Radiko.vue **追加 <br>
│       │   │   └── constrdk.js **追加 <br>
│       │   ├── main.js **追加 <br>
│       │   └── router.js **追加 <br>
│       └── vue.config.js <br>
├── package.json <br>


 $ cd radiko
 $ npm run serve

-> 192.168.xx.xxxx:8080 にアクセスするとWebページが閲覧できる




```dockershell:/app
cd radiko
npm run serve &
```
![Alt text](image.png)

## 4 バックエンド(be)の環境を整える

下記のモジュールをコンテナではなくホストに直接インストールする

```console:/home/pi/be/radiko
sudo apt-get update
sudo apt-get install lsof
sudo apt-get install -y curl
sudo apt-get install -y cron
sudo apt-get install -y emacs
sudo apt-get install -y tzdata
sudo apt-get install -y chromium
sudo apt-get install -y chromium-driver
sudo apt-get install -y xvfb
sudo apt install -y nodejs npm
sudo npm install python-shell
sudo npm install express
```

beディレクトリ以下のファイル群をgithubより取得、配置する

be <br>
├── Dockerfile <br>
├── radiko <br>
│   ├── __pycache__ <br>
│   │   └── setting.cpython-39.pyc <br>
│   ├── const.js <br>
│   ├── index.js <br>
│   ├── kill_processes.sh <br>
│   ├── log.txt <br>
│   ├── mode.csv <br>
│   ├── node_modules <br>
│   ├── package-lock.json <br>
│   ├── package.json <br>
│   ├── radiko copy.csv <br>
│   ├── radiko.csv <br>
│   ├── radiko.py <br>
│   ├── radiko.txt <br>
│   ├── radikoend.py <br>
│   ├── radikoendforce.py <br>
│   ├── radikosample.csv <br>
│   ├── sample.py <br>
│   ├── setting.py <br>
│   ├── vol50.py <br>
│   ├── vol50.sh <br>
│   ├── vol60.py <br>
│   ├── vol60.sh <br>
│   ├── vol70.py <br>
│   ├── vol70.sh <br>
│   ├── vol80.py <br>
│   ├── vol80.sh <br>
│   ├── wfmt.js <br>
│   ├── wrn1.js <br>
│   └── wrn2.js <br>
├── requirements.txt <br>


nodeサーバーを立ち上げる。
```console:/home/pi/be/radiko
node index.js
```

RN1を再生したいとき

```console:/home/pi/be/radiko
node wrn1.js
python3 /home/pi/dcshare/be/radiko/radiko.py
```
RN1を終了したいとき
```console:/home/pi/be/radiko
node wrn1.js
python3 /home/pi/dcshare/be/radiko/radikoendforce.py
```


crontabの書き方

# m h  dom mon dow   command <br>
51 14 * * * /usr/bin/node /home/pi/dcshare/be/radiko/wrn1.js <br>
52 14 * * * /usr/bin/python3 /home/pi/dcshare/be/radiko/radiko.py <br>
22 13 * * * /usr/bin/python3 /home/pi/dcshare/be/radiko/radikoendforce.py <br>
55 14 * * * /home/pi/dcshare/be/radiko/kill_processes.sh <br>