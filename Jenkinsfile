pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('Build') {
      steps {
        echo 'PIPELINE BOOM!! '
        sh 'sudo npm install'
      }
    }
  }
}
