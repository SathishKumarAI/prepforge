---
qid: ing_79c9e26cfb__faang__local
question: 'Explain: Rolling Update — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 394
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:26:45-05:00'
sources: []
---

**Clarify**  
We’re asked how a *rolling update* works for a **Kubernetes Deployment** and why it’s preferred over other strategies (blue‑green, recreate).  
Assumptions:  
- The user has a Deployment with multiple replicas (`spec.replicas`).  
- They want zero‑downtime service availability while new pods are brought up.  

**Approach**  
1. Describe the default rolling update controller in Deployments.  
2. Explain key knobs (`maxUnavailable`, `maxSurge`).  
3. Show the lifecycle of old vs. new Pods.  

**Depth**  
- The Deployment controller creates a *new ReplicaSet* with the updated spec.  
- It scales the new RS up to `replicas + maxSurge`.  
- Once new pods are ready (`Ready`), it scales down the old RS by `maxUnavailable`.  
- This guarantees at least `replicas - maxUnavailable` healthy replicas during the transition.  
- Health checks (`livenessProbe`, `readinessProbe`) ensure traffic only hits ready Pods, preventing downtime.  

**Edge Cases**  
- If probes fail, the controller may roll back or stall.  
- Setting `maxSurge=0` forces a *recreate* style update (no extra pods).  
- With too high `maxUnavailable`, you risk service interruption; with too low, upgrade speed suffers.  

**Optimize & Communicate**  
Explain trade‑offs: higher surge speeds rollout but uses more resources; lower surge is conservative. Mention that you can script a “canary” by temporarily increasing `maxSurge` for a subset of pods to monitor impact before full rollout. Conclude with why this strategy balances reliability and resource efficiency, aligning with FAANG expectations for resilient production systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
