pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t httpd .'
            }
        }

        stage('Deploy Application') {
            steps {
                sh '''
                docker stop doctor-g-website || true
                docker rm doctor-g-website || true

                docker run -d \
                  --name httpd \
                  -p 80:80 \
                  -v $WORKSPACE:/usr/local/apache2/htdocs \
                  http
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful'
        }

        failure {
            echo 'Deployment Failed'
        }
    }
}