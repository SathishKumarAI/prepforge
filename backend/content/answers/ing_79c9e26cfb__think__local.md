---
qid: ing_79c9e26cfb__think__local
question: 'Explain: Rolling Update — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 438
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:03:52-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
- Ask whether the audience knows basic Kubernetes concepts (Pods, Deployments).  
- Assume they’re familiar with the idea of “rolling updates” but not the specific flags/behaviors in a Deployment spec.

**2️⃣ Mental model / framework**  
Use the *Deployment lifecycle* as the backbone:  
1. **ReplicaSet creation** → ensures desired pod count.  
2. **Update strategy** (RollingUpdate vs Recreate).  
3. **Pod template change detection** → triggers new ReplicaSet.  
4. **Progression & rollback logic**.

Map each step to Kubernetes fields (`strategy.type`, `maxSurge`, `maxUnavailable`) and the controller’s internal algorithm.

**3️⃣ Step‑by‑step reasoning**  
- Explain what a “rolling update” means: gradually replace old pods with new ones while maintaining service availability.  
- Detail how Kubernetes compares pod templates, creates a new ReplicaSet, then scales it up/down respecting `maxSurge`/`maxUnavailable`.  
- Walk through the lifecycle:  
  * Scale up → readiness checks → scale down → repeat until all replicas are updated.  
- Mention progress deadline and automatic rollback on failure.

**4️⃣ Common traps to avoid**  
- Don’t conflate *Deployment* with *ReplicaSet*: a rolling update is orchestrated by the Deployment controller, not directly by ReplicaSets.  
- Avoid assuming `maxSurge`/`maxUnavailable` are percentages; they can be integers or percentages.  
- Don’t overlook readiness probes: without them, the controller may consider pods “ready” too early.

**5️⃣ Sanity‑check & communicate**  
- Verify the explanation covers key knobs (`strategy.type`, `maxSurge`, `maxUnavailable`).  
- Use a simple diagram or pseudocode to illustrate pod counts over time.  
- End with a quick recap: *“A rolling update is just Kubernetes’ way of incrementally replacing pods while keeping the app running, controlled by those few strategy fields.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
