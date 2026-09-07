---
qid: ing_15d7f50277__faang__local
question: How do you deploy Mastra applications? — TypeScript AI Framework for Agents
  and Apps | Mastra
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 511
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:34:00-05:00'
sources: []
---

**Clarify**  
*Problem:* Explain how to deploy a *Mastra* application (a TypeScript‑based AI framework for agents & apps).  
*Assumptions:*  
1. You have a built Mastra bundle (`dist/`) ready for production.  
2. The target environment is a containerized cloud service (K8s, ECS, or serverless).  
3. Dependencies are already bundled via npm/yarn.

**Approach**  
1. Package the app into a Docker image.  
2. Push to a registry.  
3. Deploy via Kubernetes manifests or a CI/CD pipeline (GitHub Actions → ECR → EKS).  
4. Expose services with an Ingress/LoadBalancer and set environment variables for model weights, API keys, etc.

**Depth**  
```Dockerfile
# 1️⃣ Base image
FROM node:20-alpine AS build
WORKDIR /app

# 2️⃣ Install deps & copy source
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .

# 3️⃣ Build the TypeScript bundle
RUN npm run build   # emits dist/

# 4️⃣ Runtime image
FROM node:20-alpine AS prod
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm ci --only=production

ENV NODE_ENV=production
CMD ["node", "dist/main.js"]
```
*Complexity:*  
- Build time ~O(n) where *n* is source size.  
- Runtime memory ≈ 256 MiB; CPU depends on inference load.

**Edge Cases**  
| Issue | Mitigation |
|-------|------------|
| Missing model weights | Use volume mount or S3 fetch at startup |
| Cold start latency | Pre‑warm containers, use serverless with provisioned concurrency |
| Secrets exposure | Store in KMS/Secrets Manager; inject via env vars |

**Optimize & Communicate**  
- Cache `node_modules` layers to speed rebuilds.  
- Use multi‑stage builds to keep image < 100 MiB.  
- Add health probes (`/health`) and metrics endpoint for Prometheus.  

Narrate the pipeline: “We first build a lightweight Docker image, push it to our registry, then orchestrate with Kubernetes, injecting secrets securely and exposing only necessary ports.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
