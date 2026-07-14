pipeline {
    agent any

    environment {
        APP_DIR = "/opt/doctor-g-website"
        IMAGE_NAME = "doctor-g-website"
        CONTAINER_NAME = "doctor-g-website"
    }

    stages {

        stage('Prepare Directory') {
            steps {
                sh '''
                sudo mkdir -p $APP_DIR
                sudo rm -rf $APP_DIR/*
                sudo cp -r $WORKSPACE/* $APP_DIR/
                sudo chown -R jenkins:jenkins $APP_DIR
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                cd $APP_DIR
                docker build -t $IMAGE_NAME .
                '''
            }
        }

        stage('Deploy Application') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true

                docker run -d \
                    --name $CONTAINER_NAME \
                    -p 80:80 \
                    -v $APP_DIR:/usr/local/apache2/htdocs \
                    $IMAGE_NAME
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Deployment Successful'
        }

        failure {
            echo '❌ Deployment Failed'
        }
    }
}