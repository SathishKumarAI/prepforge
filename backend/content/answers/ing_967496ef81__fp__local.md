---
qid: ing_967496ef81__fp__local
question: 'Explain: Elastic Security — Official Elastic Cloud pricing \u2014 compare
  serverless and hosted offerings | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 508
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:25:21-05:00'
sources: []
---

**Elastic Security: Serverless vs. Hosted – a principled view**

At its core, Elastic Security is an *observability* engine that ingests logs, runs analytics, and exposes alerts. The cost of running it depends on three levers:

| Lever | Serverless | Hosted |
|-------|------------|--------|
| **Compute & memory** | Pay‑per‑event (granular scaling) | Fixed node pool |
| **Storage** | Managed, auto‑tiered; pay per GB-month | Provisioned clusters; over‑provisioning is common |
| **Operational overhead** | Zero‑maintenance, elastic scaling | Admin effort, patching, upgrades |

From an *optimization* perspective, serverless pricing implements a *convex cost function*: \(C_{\text{srv}}(x)=a\cdot x + b\) where \(x\) is event volume. Elasticity ensures you never pay for idle compute; the marginal cost of extra events is linear. Hosted pricing, in contrast, approximates a *step‑function*: you pay a fixed \(C_{\text{hst}}(N)\) for \(N\) nodes regardless of load, which can be wasteful if traffic dips.

**Why it works this way**

Elastic’s serverless model relies on *stateless micro‑services* that can be spun up instantly. The underlying Kubernetes scheduler guarantees isolation, so billing is event‑centric. Hosted clusters are stateful (e.g., Elasticsearch nodes holding shards), which necessitates over‑provisioning to avoid contention and maintain latency guarantees.

**Non‑obvious insight**

The real differentiator isn’t just “pay for what you use” vs. “pay for a fixed pool.” It’s the *latency risk* of scaling. In serverless, cold starts can introduce 100 ms–1 s delays—acceptable for log ingestion but problematic for low‑latency alerts. Hosted clusters avoid this but at the cost of underutilized resources during quiet periods.

**Bottom line**

- **Serverless**: best for variable traffic, minimal ops, and when you can tolerate occasional cold starts.
- **Hosted**: preferable for steady, high‑volume workloads where predictable latency outweighs idle capacity costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
