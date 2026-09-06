---
qid: ing_5f9946b4e2__think__local
question: 'Q: How do you design for high availability in LLM systems?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 526
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:20:29-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
- *Scope*: “high‑availability” refers to continuous service with minimal downtime, not just performance.  
- *Assumptions*: We’re building a cloud‑native LLM service (e.g., inference API), using standard infra primitives (K8s, autoscaling, load balancers).  

**2. Mental model / framework**  
Apply the **SRE/Availability triangle**: *Redundancy → Fault tolerance → Observability*.  
Map this to layers: *data*, *model*, *inference engine*, *network*, *deployment*.

**3. Step‑by‑step reasoning**  

| Layer | Redundancy | Fault Tolerance | Observability |
|-------|------------|-----------------|---------------|
| **Data** | Replicate checkpoints across zones, use immutable storage (S3/Blob). | Versioned models; rollback to last good checkpoint if corruption detected. | Metrics on model health, version drift. |
| **Model** | Keep multiple warmed instances per shard. | Graceful degradation: serve older but still accurate model if new one fails. | Log inference latency & accuracy; anomaly alerts. |
| **Inference Engine** | Horizontal scaling (K8s Deployments, autoscaling). | Circuit breakers + retries with back‑off. | Health probes, request traces. |
| **Network** | Multi‑AZ load balancers, DNS failover. | TLS termination redundancy, rate limiting. | Traffic metrics, latency dashboards. |
| **Deployment** | Blue/Green or Canary releases; keep previous release alive. | Zero‑downtime rollbacks on health check failures. | CI/CD pipeline hooks for automated rollback. |

**4. Common traps to avoid**  
- *Single point of failure in storage*: always replicate checkpoints.  
- *Blind scaling*: auto‑scale only after monitoring shows sustained load spikes.  
- *Ignoring model drift*: without observability, a corrupted model may silently serve wrong outputs.

**5. Sanity‑check & communicate**  
- Verify each layer has **at least two independent paths** (e.g., two AZs).  
- Run a “fail‑over drill”: simulate zone outage and confirm traffic reroutes automatically.  
- Summarize to stakeholders: “We’ll keep duplicate model checkpoints in separate zones, autoscale inference pods with health checks, and use blue/green deployments so we can instantly roll back if something breaks.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
