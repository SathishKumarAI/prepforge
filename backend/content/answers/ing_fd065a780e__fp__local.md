---
qid: ing_fd065a780e__fp__local
question: 'Explain: Elastic Observability — Official Elastic Cloud pricing \u2014
  compare serverless and hosted offerings | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 413
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:57:40-05:00'
sources: []
---

### Why the price model looks the way it does

Observability is *data‑intensive* – logs, metrics and traces arrive at high velocity, are stored for days or weeks, then queried in real time.  
The cost therefore has two orthogonal components:

| Component | What drives it | Pricing lever‑in |
|-----------|----------------|-----------------|
| **Ingress** (raw data volume) | Every byte ingested must be parsed, enriched and indexed. | Per‑GB ingestion fee |
| **Retention** (storage + compute) | Data stays searchable for the retention period; index copies are replicated for HA and search. | Per‑GB‑per‑day storage + per‑node capacity |

Elastic Cloud splits these into **serverless** (pay‑as‑you‑go, no upfront nodes) and **hosted** (fixed node pools). The split is a classic *resource abstraction* trade‑off:

- Serverless = *elasticity* → you’re charged only for what you ingest/retain; the platform auto‑scales compute on demand.
- Hosted = *predictability* → you pay a fixed fee per node, but you lock in capacity that can be used for any workload.

### A non‑obvious insight

Many think “serverless is cheaper.” In practice, if your ingestion rate spikes sharply (e.g., during an incident), the **per‑GB ingress cost** plus the need to auto‑scale compute can eclipse a modest hosted plan. Conversely, for steady, high‑volume workloads, a hosted pool amortizes storage and compute across many users, yielding lower per‑GB pricing.

Thus, the Elastic Cloud model is essentially a *cost‑function decomposition* of ingestion vs. retention, mapped onto two provisioning paradigms that reflect different optimization goals: immediate elasticity vs. long‑term capacity planning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
