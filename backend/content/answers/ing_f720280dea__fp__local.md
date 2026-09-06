---
qid: ing_f720280dea__fp__local
question: 'Explain: With Langfuse results (manual export) — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 380
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:44:59-05:00'
sources: []
---

**Why a manual export from Langfuse is the key to an AI‑evals “complete guide”**

The core problem is *knowledge discovery* in noisy evaluation logs: we want to turn raw prompt–response pairs, scores and metadata into actionable insights (e.g., calibration curves, error taxonomy).  
1. **Data fidelity** – A manual export pulls every event exactly as recorded, preserving timestamps, token counts, and user‑defined tags.  
2. **Statistical representativeness** – By sampling the entire log we avoid selection bias that automated pipelines sometimes introduce (e.g., only exported “failed” runs).  
3. **Model‑agnostic aggregation** – Exported JSON/CSV can be fed into any statistical engine; no proprietary API limits downstream analysis.

Once exported, Langwatch—Langfuse’s visual analytics layer—acts as the *geometry* of this data: it projects high‑dimensional metrics (accuracy, latency, confidence) onto interpretable plots. By overlaying a **calibration curve** on the same scatter, we directly observe the relationship between predicted confidence and actual correctness, revealing over‑confidence or under‑confidence.

**Non‑obvious insight:** The *time‑to‑error* metric, often ignored, correlates strongly with model drift. Langwatch’s timeline view shows that errors tend to cluster just before a new training cycle, suggesting that incremental retraining can be scheduled adaptively rather than on fixed intervals.

In short, manual export guarantees data integrity; Langwatch turns it into a geometrical map of performance; together they provide a complete, principled guide for AI evaluation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
