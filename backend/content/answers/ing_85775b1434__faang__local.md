---
qid: ing_85775b1434__faang__local
question: 'Explain: Canary — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 451
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:54:51-05:00'
sources: []
---

**Clarify**  
The interviewer wants an explanation of the *Canary* deployment strategy in a Kubernetes context.  
Assumptions to confirm: we’re deploying containerized services, using a service mesh or Ingress controller that can split traffic, and we care about minimizing risk while rolling out new versions.

---

### Approach
1. **Define Canary** – gradual rollout of a new image to a small subset of users.  
2. **Kubernetes primitives** – Pods/Deployments, Services, and Traffic‑splitting via Ingress annotations or service mesh (Istio/Linkerd).  
3. **Observability** – metrics, logs, and health probes to decide success/failure.  
4. **Rollback path** – automatic if thresholds are breached.

---

### Depth
- Create two Deployments: `app-v1` (stable) and `app-v2` (canary).  
- Use a Service with selector labels or an Ingress that routes, say, 5 % of traffic to `v2`.  
- Monitor CPU, latency, error rates via Prometheus + Alertmanager.  
- If metrics stay within SLA for a defined window, increment the weight (e.g., 10 %, 25 %) until full rollout.  
- In case of anomalies, delete or scale down the canary Deployment to rollback instantly.

Complexity: **O(1)** for each deployment; traffic split is handled by the controller/mesh in constant time per request.

---

### Edge Cases
- **Stateful services** – ensure data consistency across versions.  
- **Zero‑downtime** – avoid session stickiness that bypasses routing logic.  
- **Resource limits** – prevent canary pods from starving stable pods.

Testing: simulate traffic splits, inject failures in the canary pod, and verify automatic rollback.

---

### Optimize & Communicate
Explain that canaries reduce blast radius and give early feedback. Mention alternatives (Blue/Green) and why Canary is often preferred when incremental testing is needed. Conclude by stressing observability as the linchpin of a successful strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
