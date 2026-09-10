cat > Jenkinsfile << 'EOF'
pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'rm -rf node_modules'
                sh 'npm cache clean --force'
                sh 'npm config set fetch-timeout 300000'
                sh 'npm config set fetch-retries 5'
                sh 'npm config set fetch-retry-mintimeout 20000'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                withCredentials([string(credentialsId: 'vercel-token', variable: 'VERCEL_TOKEN')]) {
                    sh 'npx vercel --prod --force --token=$VERCEL_TOKEN --yes'
                }
            }
        }
        stage('Docker Build') {
            steps {
                sh 'docker build -t budgetmg-app:latest .'
            }
        }
        stage('Docker Deploy') {
            steps {
                sh 'docker stop budgetmg-container || true'
                sh 'docker rm budgetmg-container || true'
                sh 'docker run -d --name budgetmg-container -p 8081:80 budgetmg-app:latest'
            }
        }
    }
    post {
        success {
            echo 'Pipeline terminé avec succès !'
        }
        failure {
            echo 'Le pipeline a échoué.'
        }
    }
}
EOF
