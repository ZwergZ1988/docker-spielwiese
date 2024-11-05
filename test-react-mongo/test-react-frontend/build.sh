#!/bin/bash
npm install
npm run build
mkdir ../test-react-backend/static/
rm -rf ../test-react-backend/static/*
cp -r dist/* ../test-react-backend/static/