# Week 2 — Distributed Tracing


## XRAY SDK




## Working with DynamoTable
aws dynamodb list-tables --endpoint-url http://localhost:8000

aws dynamodb create-table     --table-name Music     --attribute-definitions         AttributeName=Artist,AttributeType=S         AttributeName=SongTitle,AttributeType=S     --key-schema         AttributeName=Artist,KeyType=HASH         AttributeName=SongTitle,KeyType=RANGE     --provisioned-throughput         ReadCapacityUnits=10,WriteCapacityUnits=5 --endpoint-url http://localhost:8000

aws dynamodb describe-table --table-name Music --endpoint-url http://localhost:8000