#!/bin/bash
docker build -t poc-gracefuly .
docker rm poc-gracefuly || true
docker run -d --name=poc-gracefuly poc-gracefuly:latest

