pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
      additionalBuildArgs '--user root:root'
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