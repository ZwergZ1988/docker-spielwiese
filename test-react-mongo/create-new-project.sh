#! /bin/bash

echo Hello, what is the name of your new project?

read projectName

echo Where would you like to create this project? with Project Folder that should be already created

read projectPath

echo Creating new project $projectName at $projectPath

#mkdir $projectPath

mkdir $projectPath/$projectName-backend
mkdir $projectPath/$projectName-frontend
mkdir $projectPath/configdb
mkdir $projectPath/db

cp -rT ./test-react-backend $projectPath/$projectName-backend
cp -rT ./test-react-frontend $projectPath/$projectName-frontend
cp .gitignore $projectPath/
cp build-docker.sh $projectPath/
cp compose_up_detached.sh $projectPath/
cp docker-compose.yml $projectPath/
cp run-docker.sh $projectPath/

# Replace test-react with $projectName in package.json
sed -i '' -e "s/test-react/$projectName/g" $projectPath/$projectName-frontend/package.json
sed -i '' -e "s/test-react/$projectName/g" $projectPath/$projectName-frontend/package-lock.json
sed -i '' -e "s/test-react/$projectName/g" $projectPath/$projectName-backend/package.json
sed -i '' -e "s/test-react/$projectName/g" $projectPath/$projectName-backend/package-lock.json
sed -i '' -e "s/test-react/$projectName/g" $projectPath/$projectName-backend/.env