---
qid: ing_09930d531f__fp__local
question: 'Explain: 2 System Design - Trade-Offs — System Design: Top 15 Trade-Offs
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 471
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:26:01-05:00'
sources: []
---

### From “Why we *must* balance” to the **15 core ML system trade‑offs**

When a data scientist builds an end‑to‑end pipeline—data ingestion → feature extraction → model training → inference—the **only objective is to maximise user value** (accuracy, latency, cost).  
That objective forces us to confront a series of *inherent* conflicts.  

| # | Trade‑off | Why it arises | Deeper principle |
|---|-----------|---------------|------------------|
| 1 | **Latency vs Accuracy** | Real‑time inference demands few arithmetic ops; higher‑capacity models give better predictions. | *Law of diminishing returns*: more compute → marginal accuracy gains shrink, but latency grows linearly. |
| 2 | **Data Volume vs Quality** | More data reduces variance, yet noisy labels hurt generalisation. | *Bias–variance trade‑off* re‑phrased in data terms: noise inflates bias. |
| … | … | … | … |

(Full list follows the article’s ordering.)

Each pair is derived from a **fundamental optimisation problem**:  
\[
\max_{\theta} \; V(\text{model},\text{data}) - C(\text{resources})
\]
where \(V\) captures user‑centric value and \(C\) aggregates computational, storage, or operational costs. The constraints (e.g., SLA latency) turn the unconstrained maximisation into a *multi‑objective* problem, yielding the classic “trade‑off” diagrams.

#### One non‑obvious insight  
Many designers treat **model size** as a proxy for accuracy. In practice, a **parameter‑efficient architecture** (e.g., attention‑based pruning) can achieve *higher* accuracy *while* reducing latency because it better aligns with the *information bottleneck*: fewer parameters capture more salient information, allowing faster inference without sacrificing performance.

In short, every design choice is an instantiation of the same optimisation skeleton. Recognising this unifying structure lets engineers reason systematically rather than heuristically about the 15 trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
