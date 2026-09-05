---
qid: ing_424ea5ff99__fp__local
question: 'Explain: Pilot Light Approach: — Cloud Disaster Recovery Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 440
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:25:51-05:00'
sources: []
---

**Pilot‑Light Disaster Recovery (DR) – a principled minimal‑cost resilience model**

The *fundamental problem* is: **how to keep an application available after a catastrophic outage while minimizing idle cost?**  
In the cloud, you can spin up replicas on demand, but continuously running a full copy of your stack costs money and effort. The pilot‑light idea addresses this by keeping only the *essential core*—the database and minimal runtime services—in a low‑powered “pilot light” state. When an outage occurs, the remaining workload is booted from this live snapshot to a new region or cloud.

**Why it must work this way**

1. **State persistence vs. compute elasticity** – The pilot holds the latest persistent state; compute can be elastically provisioned because it’s stateless once the database is restored.
2. **Recovery time objective (RTO)** – By having the critical layer already running, the RTO is bounded by the time to launch auxiliary services, which is often orders of magnitude faster than a full rebuild.
3. **Cost optimization** – Keeping only the minimal set active turns a 100 % redundancy into ~10–20 %, dramatically reducing idle spend while still satisfying regulatory and uptime SLAs.

**Deeper principle**

This mirrors *lazy evaluation* in functional programming: compute values only when needed, but cache critical results (the pilot light). It also reflects the **entropy minimization** of information theory—maintain a low‑entropy core that can be expanded to full entropy quickly during failure.

**Non‑obvious insight**

Many overlook that the *pilot* is not just a “sleeping” database; it must run in a *replicated, highly available configuration* (e.g., multi‑AZ). A single point of failure in the pilot defeats the whole strategy. Thus, the true cost savings come from **distributing minimal state across zones**, not merely turning off compute.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
