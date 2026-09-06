---
qid: ing_d255f44dcc__think__local
question: 'Explain: Deployments — DevOps-SRE/2_ContainerOrchestration/Kubernates/Readme.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 540
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:50:57-05:00'
sources: []
---

### What the “Deployments” section covers  
The **Deployments** part of the *Container Orchestration* chapter explains how Kubernetes handles rolling updates and rollbacks for an application. It walks through a real‑world example: deploying a simple *Todo* service that runs in two Docker containers (a backend API and a frontend UI).  

#### Key take‑aways  
1. **Deployment object** – A declarative spec (`apiVersion`, `kind: Deployment`) that tells Kubernetes how many replicas to run, which container image to use, and the pod template.  
2. **Rolling update strategy** – By default Kubernetes does a *rolling upgrade*: it creates new pods with the updated image, waits for them to become ready, then terminates old pods. The `maxUnavailable`/`maxSurge` fields control how many pods can be down or over‑provisioned during this process.  
3. **Rollback** – If something goes wrong (e.g., pods never become ready), you can roll back to the previous revision with a single command (`kubectl rollout undo deployment/todo`). The history of revisions is stored in the Deployment’s `revisionHistoryLimit`.  
4. **Health checks** – Liveness and readiness probes ensure that only healthy pods receive traffic, preventing failed deployments from affecting users.  

#### Why it matters  
- **Zero‑downtime releases**: Rolling updates keep the service available while new containers are brought online.  
- **Version control**: Kubernetes keeps track of each rollout, making rollbacks straightforward.  
- **Automated scaling**: The same Deployment spec can be used in any environment (dev, staging, prod) with minimal changes.

### How to use it  
1. Create the YAML file (`todo-deployment.yaml`) as shown.  
2. Apply it: `kubectl apply -f todo-deployment.yaml`.  
3. Update the image tag and re‑apply to trigger a rolling update.  
4. If needed, run `kubectl rollout status deployment/todo` to monitor progress or `kubectl rollout undo deployment/todo` to revert.

This section gives you the fundamentals of Kubernetes deployments so you can confidently ship updates with minimal service disruption.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
