pipeline {
  agent any

  tools {
    nodejs "NodeJS 18" // Assure-toi que Jenkins a NodeJS configuré
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/stef-maro/playwright-project.git'
      }
    }

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
      junit 'test-results/**/*.xml' // Si tu actives le reporter JUnit
    }
  }
}
