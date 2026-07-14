pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t doctor-g-website:latest .'
            }
        }

        stage('Deploy Application') {
            steps {
                sh '''
                docker stop doctor-g-website || true
                docker rm doctor-g-website || true

                docker run -d \
                  --name doctor-g-website \
                  -p 8081:80 \
                  -v $WORKSPACE:/usr/local/apache2/htdocs \
                  doctor-g-website:latest
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