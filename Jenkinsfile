pipeline {
  agent any

  stages {
    stage('Install dependencies') {
      steps {
        bat 'npm ci'
      }
    }

    stage('Install Playwright browsers') {
      steps {
        bat 'npx playwright install --with-deps'
      }
    }

    stage('Run tests') {
      steps {
        bat 'npx playwright test'
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
