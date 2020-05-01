node {

    checkout scm

    withDockerRegistry(credentialsId: 'Docker_Credentials', url: 'https://hub.docker.com/') {
    def customImage = docker.build("kamaljoshi07/angular")

        /* Push the container to the custom Registry */
        customImage.push()
	}
}
