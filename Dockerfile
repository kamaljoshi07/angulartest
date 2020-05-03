FROM centos AS builder

RUN yum install -y git
RUN mkdir /home/sampleTest1

RUN cd /home/sampleTest1
RUN git clone https://github.com/kamaljoshi07/angulartest.git

WORKDIR /home/sampleTest1

COPY . .

RUN yum install -y nodejs

RUN npm install npm i -g
RUN npm run build

FROM nginx:centos

COPY --from=builder /home/sampleTest1/dist/* /usr/share/nginx/html/
