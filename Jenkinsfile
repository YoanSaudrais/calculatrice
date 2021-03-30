pipeline {
  agent any
  stages {
    stage('Install dependencies'){
      steps {
        sh 'brew install node'
        sh 'node -v'
        sh 'npm install'
      }
    }
  }
}
