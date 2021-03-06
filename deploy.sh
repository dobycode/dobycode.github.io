#!/usr/bin/env sh

# 오류 발생시 중단한다.
set -e

# 문서(md)를 build하여 html로 만든다. 
yarn docs:build

# build가 output된 폴더로 이동한다. 
cd .vuepress/dist

# init + add + commit을 해준 다음
git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/dobycode/dobycode.github.io.git master:gh-pages

cd -