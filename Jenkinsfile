pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh '/usr/local/rvm/gems/ruby-2.6.0/bin/bundle install --path vendor/bundle'
      }
    }
    stage('Build') {
      steps {
        sh '''/usr/local/rvm/gems/ruby-2.6.0/bin/bundle exec jekyll clean
/usr/local/rvm/gems/ruby-2.6.0/bin/bundle exec jekyll build'''
      }
    }
    stage('Deploy') {
      steps {
        withCredentials([string(credentialsId: 'uberspace_fd', variable: 'SERVER')]) {
          sh '''
            set +x
            rsync -avz --delete ./_site/* $SERVER
            '''
          }
        }
      }
    }
  }
