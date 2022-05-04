The application receives an image and returns its negative


Frontend http://localhost:3000
Swagger http://localhost:5001/doc


To run the project, you need code from the repository and
action:

1. `chmod +x entrypoint.sh`
2. `export REACT_APP_USERS_SERVICE_URL=http://localhost:5001`
3. `docker-compose up -d`
4. `docker-compose exec app  python manage.py recreate_db `


