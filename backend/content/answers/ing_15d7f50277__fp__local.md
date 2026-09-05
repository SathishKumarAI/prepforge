---
qid: ing_15d7f50277__fp__local
question: How do you deploy Mastra applications? — TypeScript AI Framework for Agents
  and Apps | Mastra
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 383
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:51:39-05:00'
sources: []
---

### Deploying a Mastra application – why the steps matter

Mastra is built on **agent‑centric microservices** that expose a *GraphQL* API and a *WebSocket* event bus.  
When you deploy an app you are really **instantiating a sandboxed execution graph**: each agent becomes a container, the policy engine becomes a sidecar, and the UI layer is a static bundle served by a CDN.  

1. **Package the agents** – compile TypeScript to JavaScript, embed the runtime (the Mastra core) and bundle the policy file (`mastra.json`).  
2. **Containerise** – each agent runs in its own container; the image must expose the same port (`5000`) so that the *Mastra orchestrator* can discover them via Kubernetes Service Discovery or Docker‑Compose `depends_on`.  
3. **Publish to a registry** – push the images to an OCI‑compatible registry (Docker Hub, GitHub Packages, etc.).  
4. **Deploy the orchestrator** – run `mastra deploy` which pulls the images, creates a StatefulSet/Deployment per agent, and configures the policy sidecar with the required secrets.  
5. **Expose the API** – expose the GraphQL endpoint through an Ingress (NGINX/Traefik) or a cloud‑native load balancer; WebSocket traffic is forwarded to the orchestrator’s event bus.

The non‑obvious insight: **the policy sidecar must run as a separate pod**, not inside the agent container. This guarantees that policy updates can be rolled out independently of code, enabling *continuous compliance* without downtime—a core advantage Mastra offers over monolithic AI stacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
