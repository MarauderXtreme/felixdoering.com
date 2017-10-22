pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'bundle install --path vendor/bundle'
      }
    }
    stage('Build') {
      steps {
        sh '''bundle exec jekyll clean
bundle exec jekyll build'''
      }
    }
    stage('Deploy') {
      steps {
        sh '''withCredentials([string(credentialsId: \'uberspace_fd\', variable: \'SERVER\'),]) {

rsync -avz --delete ./_site/* $SERVER

}'''
        }
      }
    }
  }