pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
      additionalBuildArgs  '"--user=root:root"'
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