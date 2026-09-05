---
qid: ing_2df279fe55__fp__local
question: Design the SLOs for a new LLM-powered feature. What do you promise, and
  how do you measure it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 475
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:42:37-05:00'
sources: []
---

### Designing SLOs for an LLM‑Powered Feature  
**1. Identify the core problem** – users want *fast, trustworthy, and safe* responses to natural‑language queries.  
**2. Translate needs into measurable guarantees**:  

| Promise | Metric | Target | Rationale |
|---------|--------|--------|-----------|
| **Latency** | 95 % of requests ≤ 300 ms (end‑to‑end) | Guarantees interactivity; aligns with human perception of “instantaneous” replies. |
| **Accuracy / Relevance** | Mean Reciprocal Rank ≥ 0.85 on a curated test set | Reflects the probability that the top answer is correct; rooted in ranking theory and user satisfaction. |
| **Safety** | Zero critical violations (e.g., disallowed content) per 10 k requests | Ensures compliance with policy; safety is an *invariant* that must never be breached, not just a probability. |
| **Availability** | 99.9 % uptime over 30‑day rolling window | Provides reliable service; derived from queuing theory to keep backlog bounded. |

**3. Measurement strategy**  
- Instrument every request with a timestamp and outcome label (success/failure).  
- Use a *probabilistic sampling* scheme for accuracy: randomly select 5 % of responses, run them through an automated evaluation pipeline, and extrapolate.  
- Safety logs are fed into a real‑time policy engine that flags violations; any flag triggers immediate rollback.

**4. Non‑obvious insight** – **“Safety is not a probability but a hard constraint.”**  
While latency and accuracy can tolerate occasional outliers, safety must never be violated. Modeling it as a *hard threshold* (zero critical incidents) forces the system to allocate resources (e.g., additional filtering layers) explicitly for that purpose, rather than treating it as just another metric.

By grounding each SLO in an underlying principle—human perception, ranking theory, invariant enforcement, and queuing guarantees—you create a transparent, enforceable contract that aligns engineering effort with user value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
