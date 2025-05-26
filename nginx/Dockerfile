FROM nginx:1.18.0-alpine

WORKDIR /etc/nginx/templates

COPY ./default.conf.template /etc/nginx/templates/default.conf.template

#RUN chmod 777 docker-entrypoint.sh 

ENTRYPOINT [ "/docker-entrypoint.sh" ]

CMD [ "nginx", "-g","daemon off;" ]