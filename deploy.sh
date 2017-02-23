#!/bin/sh
for f in index.html main.js main.css; do
  echo "uploading $f..."
  curl -T $f ftp://v0.ftp.upyun.com/ --user $USER
done
