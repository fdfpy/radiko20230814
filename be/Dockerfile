# ベースイメージの指定
FROM ubuntu:20.04
FROM python:3.9.2-buster


RUN apt-get update
RUN apt-get install lsof
RUN apt-get install -y curl
RUN apt-get install -y cron
RUN apt-get install -y emacs
RUN apt-get install -y tzdata
RUN apt-get install -y chromium
RUN apt-get install -y chromium-driver
RUN apt-get install -y xvfb


RUN apt install -y nodejs npm
RUN npm install python-shell
RUN npm install express



RUN mkdir /app
ADD requirements.txt /app

ENV PYTHONUNBUFFERED 1
EXPOSE 5000

WORKDIR /app
RUN pip3 install -r requirements.txt