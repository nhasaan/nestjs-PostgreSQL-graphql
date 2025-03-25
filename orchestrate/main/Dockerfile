# Define base image and args
ARG REGISTRY_BASE_IMAGE=node:20.19.0-alpine
FROM ${REGISTRY_BASE_IMAGE} AS node_base

# Define all args
ARG SOURCE_DIR=source/main
ARG COMMON_WORK_DIR=/app
ARG WORK_DIR=${COMMON_WORK_DIR}/source
ARG NODE_LOC=${COMMON_WORK_DIR}/opt/node
ARG NGINX_LOC=${COMMON_WORK_DIR}/opt/nginx
ARG APP_NAME="nestjs-fastify-gql-api"
ARG APP_PORT=3100
ARG NODE_ENV=production
ARG NODE_TLS_REJECT_UNAUTHORIZED="0"
ARG MAINTAINER=
ARG USER_ID=5001

# Set environment variables
ENV SOURCE_DIR=${SOURCE_DIR} \
    COMMON_WORK_DIR=${COMMON_WORK_DIR} \
    WORK_DIR=${WORK_DIR} \
    NODE_LOC=${NODE_LOC} \
    NGINX_LOC=${NGINX_LOC} \
    APP_NAME=${APP_NAME} \
    APP_PORT=${APP_PORT} \
    NODE_ENV=${NODE_ENV} \
    NODE_TLS_REJECT_UNAUTHORIZED=${NODE_TLS_REJECT_UNAUTHORIZED} \
    MAINTAINER=${MAINTAINER} \
    USER_ID=${USER_ID} \
    CHOKIDAR_USEPOLLING=true \
    WATCHPACK_POLLING=true  

USER root

# Install yarn globally
# RUN npm install --global yarn && \
#     yarn --version

# Create necessary directories and set permissions (combined RUN commands)
RUN mkdir -p ${COMMON_WORK_DIR} ${COMMON_WORK_DIR}/bin /.npm /.config /.cache/yarn /.yarn && \
    touch /.yarnrc && \
    chown -R ${USER_ID}:0 ${COMMON_WORK_DIR} "/.npm" "/.config" "/.cache/" "/.yarn" "/.yarnrc"

RUN apk add --no-cache openssl openssl-dev

USER ${USER_ID}

WORKDIR ${WORK_DIR}

# Copy package files
COPY --chown=${USER_ID}:0 ${SOURCE_DIR}/package*.json ${SOURCE_DIR}/*.lock ${WORK_DIR}

# Install dependencies
RUN yarn config set proxy "${HTTP_PROXY:-}" && \
    yarn config set https-proxy "${HTTPS_PROXY:-}" && \
    if [ "${NODE_ENV}" = "development" ]; then \
    yarn install --frozen-lockfile; \
    else \
    yarn install --frozen-lockfile; \
    fi
RUN yarn cache clean

# Copy source code and build
COPY --chown=${USER_ID}:0 ${SOURCE_DIR} ${WORK_DIR}

EXPOSE ${APP_PORT}