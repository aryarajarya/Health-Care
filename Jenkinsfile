pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t doctor-g-website:latest .'
                }
            }
        }

        stage('Deploy Application') {
            steps {
                script {
                    sh 'docker stop doctor-g-website || true'
                    sh 'docker rm doctor-g-website || true'
                    sh 'docker run -d -p 80:80 --name doctor-g-website doctor-g-website:latest'
                }
            }
        }
    }

    post {
        success {
            echo '✅ Website deployed successfully! Visit http://localhost:8080'
        }
        failure {
            echo '❌ Deployment failed. Check the logs.'
        }
    }
}