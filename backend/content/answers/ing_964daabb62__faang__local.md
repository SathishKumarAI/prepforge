---
qid: ing_964daabb62__faang__local
question: 'Explain: Recreate — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 554
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:33:37-05:00'
sources: []
---

**Recreate – Kubernetes Deployment Strategy**

| Stage | What it is | Why use it |
|-------|------------|-----------|
| **Pre‑deploy checks** | Lint, image scan, Helm dry‑run | Detect errors before traffic hits the cluster |
| **Create new ReplicaSet** | Deploy a *new* ReplicaSet with desired pod spec (no changes to existing RS) | Keeps old pods untouched while new ones spin up |
| **Gradual rollout** | Use `maxSurge` / `maxUnavailable` in Deployment; or an Ingress/Service can route 0‑100% traffic | Allows controlled exposure and rollback if issues arise |
| **Health probes** | Liveness/readiness checks on the new pods | Ensures only healthy pods receive traffic |
| **Complete rollout** | Delete old ReplicaSet once all new pods are ready | Guarantees zero downtime and data consistency |
| **Rollback (if needed)** | Switch Service selector back to old RS or use `kubectl rollout undo` | Fast recovery path |

### Technical details

- **Deployment YAML snippet**

```yaml
spec:
  replicas: 3
  strategy:
    type: RollingUpdate   # Recreate is a special case of this
    rollingUpdate:
      maxSurge: 1         # One new pod at a time
      maxUnavailable: 0   # Keep all old pods running until new one ready
```

- **Complexity**  
  *Time*: O(n) where n = number of replicas (pod start/termination).  
  *Resources*: Requires spare nodes for the temporary surge; otherwise, pod creation may fail.

### Edge cases

| Problem | Mitigation |
|---------|------------|
| Node capacity exhausted → new pods stall | Pre‑scale cluster or use `maxSurge: 0` to avoid surges |
| Readiness probe fails repeatedly | Trigger auto‑rollback via Deployment status (`availableReplicas < desired`) |
| Data migration needed (stateful workloads) | Use StatefulSet with volume claim templates and ordered readiness checks |

### Optimization & Communication

- **Auto‑scale** the cluster ahead of deployments to avoid stalls.  
- **Blue/Green** or **Canary** can be layered on top of Recreate for high‑traffic services.  
- When presenting, start by clarifying *why* a zero‑downtime rollout is critical, then walk through the steps above, highlighting how each step satisfies that goal and noting any resource trade‑offs. This demonstrates structured thinking, depth in Kubernetes mechanics, and awareness of operational constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
