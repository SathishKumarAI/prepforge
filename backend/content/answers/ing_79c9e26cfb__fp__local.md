---
qid: ing_79c9e26cfb__fp__local
question: 'Explain: Rolling Update — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 504
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:23:21-05:00'
sources: []
---

### Rolling Update – A First‑Principles View

At its core, a **rolling update** solves the *availability vs. consistency* trade‑off in distributed systems: we want to replace an old pod image with a new one without dropping traffic or violating session guarantees.

1. **Fundamental problem**  
   Each deployment runs multiple replicas behind a Service. Updating all replicas at once risks two failures:  
   - **Downtime** if the new image is broken.  
   - **State loss** if sessions are tied to a specific pod and we kill it prematurely.

2. **Why “rolling” works**  
   The update proceeds in *batches* (controlled by `maxSurge` and `maxUnavailable`). In each batch, Kubernetes:
   1. Creates new pods with the desired image.
   2. Waits until they are **Ready** (liveness probes pass).
   3. Terminates an old pod.

   This preserves at least one healthy replica throughout (`maxUnavailable ≤ replicas – 1`), ensuring continuous Service availability. The batch size balances *update speed* against *resource overhead*: a larger `maxSurge` temporarily increases cluster load but shortens total rollout time.

3. **Deeper principle: graceful degradation**  
   Rolling updates embody the *law of diminishing returns* in system upgrades: you can’t gain perfect zero‑downtime without sacrificing performance or reliability. By gradually shifting traffic, Kubernetes lets the control plane detect regressions early—each batch is a mini‑canary test.

4. **Non‑obvious insight**  
   The update’s safety hinges on *probe semantics*, not just pod readiness. If probes are too lenient (e.g., only check container start), the scheduler may kill an old pod before the new one has fully warmed up, breaking session affinity or cache warm‑up. Tightening probe thresholds is often the hidden lever that turns a flaky update into a reliable one.

In short, rolling updates are a disciplined application of *incremental consistency*—you never lose all replicas, you never rush the new ones, and you keep traffic flowing through well‑tested, ready pods.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
