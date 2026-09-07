---
qid: ing_36c56db669__faang__local
question: 'Explain: Shadow — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 393
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:51:21-05:00'
sources: []
---

**Shadow – a “canary‑in‑the‑cloud” strategy for ML models in Kubernetes**

| Step | What to do |
|------|------------|
| **Clarify** | Shadow means running the new model *side‑by‑side* with the production one, sending identical traffic to both and only recording predictions. No user impact, no traffic split. Ask: 1) Do we have a reliable metrics pipeline? 2) Is latency acceptable for duplicate inference? |
| **Approach** | 1️⃣ Deploy the new model as a separate pod/service (e.g., `model-v2`). <br>2️⃣ Expose both services behind an Ingress or Service Mesh. <br>3️⃣ Use a sidecar proxy to forward each request to both pods and log predictions/latencies. <br>4️⃣ Aggregate logs into a comparison dashboard. |
| **Depth** | *Technical*: container image build, Helm chart with two deployments; use `Istio`/`Linkerd` for traffic mirroring. *Complexity*: O(1) per request (just an extra network hop). *Trade‑offs*: increased resource usage, potential data leakage if logs aren’t sanitized. |
| **Edge Cases** | • Model diverges wildly → flag immediately.<br>• Latency spike in v2 → rollback automatically.<br>• Data drift: monitor prediction confidence gaps. |
| **Optimize & Communicate** | 1) Batch shadow requests to reduce overhead.<br>2) Use feature flags to toggle shadow mode. Explain that this gives a safety net: we observe real‑world behavior before exposing users, aligning with A/B testing but without traffic split. |

*Result*: Confidence in the new ML model’s performance and correctness before full rollout, minimizing risk in production Kubernetes environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
