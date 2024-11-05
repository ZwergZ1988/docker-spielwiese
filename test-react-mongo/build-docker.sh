#!/bin/bash

echo "Building test-react-frontend..."
cd test-react-frontend
./build.sh

echo "Building test-react-backend..."
cd ../test-react-backend
docker build -t test-react .