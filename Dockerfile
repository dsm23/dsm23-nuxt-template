# syntax=docker.io/docker/dockerfile:1@sha256:87999aa3d42bdc6bea60565083ee17e86d1f3339802f543c0d03998580f9cb89

FROM ghcr.io/pnpm/pnpm:11.9.0@sha256:ea4a0c09e686d3a81e1f2b606d99cad200f4c5f9053c20599820e0fc812a1c67 AS base
FROM dhi.io/node:26.1.0-alpine3.23@sha256:89ba306d54a9025da2e7862ff22ae13a95d825a0e459217138242115dfc700a5 AS runtime

# renovate: datasource=docker depName=dhi.io/node
ARG NODE_VERSION="26.3.0"

# Stage 1: Install dependencies only when needed
FROM base AS deps

WORKDIR /app

ENV LEFTHOOK=0

# Install dependencies based on the preferred package manager
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
  pnpm runtime set node "$NODE_VERSION" -g && pnpm install --frozen-lockfile

# Stage 2: Build stage
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm runtime set node "$NODE_VERSION" -g \
  && pnpm run build

# Stage 3: Production image
FROM runtime

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/.output ./

USER nuxtjs

EXPOSE 3000

ENV PORT=3000

ENV HOSTNAME="0.0.0.0"
CMD [ "node", "server/index.mjs" ]
