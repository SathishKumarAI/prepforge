---
qid: ing_d890452240__fp__local
question: 'Explain: Common mistakes — OpenAI System Design Interview (2026 Guide)
  - Exponent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 516
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:40:43-05:00'
sources: []
---

**Common pitfalls in the *OpenAI System‑Design* interview (2026)**  

| # | Mistake | Why it breaks the problem |
|---|---------|---------------------------|
| 1 | **Treating the “LLM” as a black box** | The interview tests your ability to *decompose* a complex inference pipeline into modular, scalable pieces. Assuming the model can be queried directly ignores latency, cache, and cost constraints that drive real‑world design. |
| 2 | **Neglecting *prompt engineering* as infrastructure** | Prompt tuning is not just an algorithmic tweak; it’s a service with versioning, rollback, and A/B testing requirements. Skipping this layer means you miss the data‑flow and monitoring challenges of a production LLM system. |
| 3 | **Over‑optimizing for throughput at the expense of consistency** | Inference latency is bound by *token‑generation time* (≈ ms per token). Pushing throughput with aggressive batching can violate user‑expected response times, especially under bursty traffic—an essential trade‑off to articulate. |
| 4 | **Assuming a single “best” model** | Modern pipelines use *model ensembles*, *adapter layers*, and *fallbacks* (e.g., rule‑based fallback). Ignoring this heterogeneity leads to brittle designs that cannot satisfy diverse quality or compliance requirements. |
| 5 | **Underestimating data privacy & auditability** | LLM inputs often contain PII; the system must support end‑to‑end encryption, tokenization, and immutable logs for regulatory audits—an area many candidates overlook. |

### Non‑obvious insight  
**The bottleneck is not the GPU but the *token‑generation scheduler*.** Even with a state‑of‑the‑art model, latency spikes arise when the scheduler cannot keep tokens in sync across shards or when it fails to back‑pressure upstream services. A robust design therefore treats token scheduling as a first‑class component—applying queuing theory (M/M/1 vs. M/G/1) and adaptive pre‑fetching—to guarantee bounded response times under variable load.  

*Bottom line*: Treat the LLM as a *service layer*, not a monolith; balance throughput, latency, privacy, and maintainability through explicit modularity and rigorous performance modeling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
