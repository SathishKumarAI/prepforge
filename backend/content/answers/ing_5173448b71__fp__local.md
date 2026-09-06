---
qid: ing_5173448b71__fp__local
question: Design a pipeline that turns ~100k hours per month of call recordings into
  searchable, analysable data. What are the stages and where does it go wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 582
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:58:21-05:00'
sources: []
---

**Why the pipeline matters**

A month of 100 k hours is a *time‑volume* problem: you must turn an unstructured stream into structured facts that can be queried in seconds. The fundamental constraint is that every transformation introduces uncertainty; if we do not propagate that uncertainty, downstream analytics become brittle.

---

## Stages

| # | Stage | Core operation | Why it’s necessary |
|---|-------|----------------|--------------------|
| 1 | **Ingestion & Normalisation** | Buffer raw WAV/MP3 → canonical sample rate, channel count | Removes codec‑level variance that ASR engines cannot handle. |
| 2 | **Speech‑to‑Text (ASR)** | Forced‑alignment or neural model → transcript + timestamps | Provides the only text basis for all later analysis. |
| 3 | **Diarisation** | Speaker clustering → speaker tags per segment | Enables attribution of intent, sentiment, and role. |
| 4 | **Metadata & Entity Extraction** | NER, key‑phrase spotting, sentiment scoring | Turns raw words into searchable fields. |
| 5 | **Indexing** | Inverted index + vector embeddings | Supports keyword search *and* semantic similarity. |
| 6 | **Analytics Layer** | Query engine, dashboards, anomaly detection | Delivers business insights. |

---

## Where it goes wrong

1. **Audio quality drift** – background noise or compression artifacts corrupt ASR; a single “um” can shift timestamps.
2. **ASR confidence collapse** – low‑confidence words propagate as false facts; most pipelines ignore this signal.
3. **Speaker overlap & cross‑talk** – diarisation mislabels segments, leading to attribution errors that cascade into KPI misestimates.
4. **Indexing mismatch** – tokenization inconsistencies (e.g., “customer” vs. “cust.”) break recall.
5. **Privacy leakage** – storing raw transcripts without redaction can violate regulations.

---

## Non‑obvious insight

Treat *confidence* as a probability weight in downstream analytics, not just a binary flag. By integrating ASR confidence into entity scoring and search relevance (e.g., `score = base_score × confidence`), you preserve uncertainty information and avoid the “all‑or‑nothing” pitfall that most pipelines overlook. This principled weighting aligns the pipeline with Bayesian inference: every fact is evidence, not a certainty.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
