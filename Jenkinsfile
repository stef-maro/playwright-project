pipeline {
  agent any

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Install Playwright browsers') {
      steps {
        sh 'npx playwright install --with-deps'
      }
    }

    stage('Run tests') {
      steps {
        sh 'npx playwright test'
      }
    }

    stage('Archive reports') {
      steps {
        archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
      }
    }
  }

  post {
    always {
      junit 'test-results/**/*.xml'
    }
  }
}
