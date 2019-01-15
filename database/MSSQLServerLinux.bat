REM docker pull mcr.microsoft.com/mssql/server
docker pull mcr.microsoft.com/mssql/server:2017-latest-ubuntu

REM CRIA O CONTAINER
docker run --name MSSQL01 -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=!QA2ws3ed" -e "MSSQL_PID=Express" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2017-latest-ubuntu
REM docker run --name MSSQL01 -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=!QA2ws3ed" -e "MSSQL_PID=Express" -p 1433:1433 -v C:\Temp\MSSQL2017:/var/opt/mssql -d mcr.microsoft.com/mssql/server:2017-latest-ubuntu

REM EXECUTA Um PROGRAMA DO CONTAINER
REM docker exec -it <container_id|container_name> /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P <your_password>
REM docker exec -it d60c5a7e51a0 /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P !QA2ws3ed

REM docker ps --all |ou| -a				LISTA OS CONTAINERS
REM docker container rm <container_id> 	REMOVE CONTAINER
REM docker exec 	-it <container_id> "bash"
REM docker stop 	    <container_id> 
REM docker start 	    <container_id> 