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
        sh 'cat /etc/passwd'
        sh 'sudo su -'
        sh 'whoami'
      }
    }
  }
}