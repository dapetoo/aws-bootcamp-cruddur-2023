# Week 1 — App Containerization

## Working with DynamoTable
aws dynamodb list-tables --endpoint-url http://localhost:8000

aws dynamodb create-table     --table-name Music     --attribute-definitions         AttributeName=Artist,AttributeType=S         AttributeName=SongTitle,AttributeType=S     --key-schema         AttributeName=Artist,KeyType=HASH         AttributeName=SongTitle,KeyType=RANGE     --provisioned-throughput         ReadCapacityUnits=10,WriteCapacityUnits=5 --endpoint-url http://localhost:8000

aws dynamodb describe-table --table-name Music --endpoint-url http://localhost:8000


## Homework Challenges

**Run the dockerfile CMD as an external script**

```bash
#Set Frontend and Backend environment variables
export FRONTEND_URL="*"
export BACKEND_URL="*"

#Run Backend App
cd backend-flask
pip install -r requirements.txt
python3 -m flask run --host=0.0.0.0 --port=4567

#Run Frontend App
cd frontend-react-js
npm install
npm run

#Build Frontend Dockerfile
docker build -t frontend  frontend-react-js .

#Running Frontend Dockerfile
docker run -it --rm -v $(pwd):/app -w /app python:3.7-slim python3 /app/script.py
```