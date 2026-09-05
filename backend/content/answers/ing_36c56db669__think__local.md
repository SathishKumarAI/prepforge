---
qid: ing_36c56db669__think__local
question: 'Explain: Shadow — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 465
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:35:00-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Identify that “shadow” refers to a deployment pattern where a new version runs side‑by‑side with the current one, not just blue/green or canary.  
   - Assume a Kubernetes cluster with Deployments, Services, and possibly Istio/Linkerd for traffic splitting.  
   - Clarify whether we’re focusing on *traffic* isolation, *metrics collection*, or *fail‑over* behavior.

**2. Adopt the “Traffic‑Shaping + Observability” mental model**  
   - Map deployment stages to three layers: **Infrastructure**, **Routing**, and **Observability**.  
   - Shadow fits as a special case of routing where all traffic goes to the old version, but a copy runs in parallel for monitoring.

**3. Step‑by‑step reasoning**  
   1. Create two Deployments: `app-v1` (stable) and `app-shadow`.  
   2. Expose both via a Service or Ingress; use a selector that routes all requests to `v1`.  
   3. Run `app-shadow` with identical specs but instrumented for metrics, tracing, or logs.  
   4. Optionally inject synthetic traffic into the shadow pod (e.g., using Envoy’s “shadow” filter).  
   5. Collect data: latency, error rates, resource usage, etc., without affecting real users.

**4. Common traps to avoid**  
   - Forgetting that shadow pods still consume resources; monitor CPU/memory.  
   - Assuming shadow traffic is invisible—remember it can still hit downstream services if not isolated.  
   - Mixing up “shadow” with “canary”; ensure no user requests are split unless intended.

**5. Sanity‑check & communicate**  
   - Verify that Service endpoints show two pods but only one receives traffic.  
   - Run a test request and confirm logs from both pods appear, while metrics differ.  
   - Explain to stakeholders: “Shadow lets us observe the new version in production without risk—no user impact, full observability.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
