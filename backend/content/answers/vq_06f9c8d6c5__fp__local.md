---
qid: vq_06f9c8d6c5__fp__local
question: Which of the below gives one to one mapping between input & output. *?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 502
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:21:22-05:00'
sources: []
---

A **one‑to‑one** (injective) mapping is the only way a data pipeline can guarantee that each source row ends up as a distinct target row and that the reverse operation—re‑identifying the original record from its destination form—is possible without ambiguity.

### Why it must work this way  
1. **Determinism**: The transformation rule cannot introduce randomness; otherwise two different inputs could produce the same output, breaking uniqueness.  
2. **Injectivity**: For every distinct input *x* and *y*, the outputs must satisfy *f(x) ≠ f(y)*.  
3. **Invertibility**: Only an injective function can be inverted on its image; this is essential for audit trails, rollback, or data lineage.

### Deeper principle – Information preservation  
In information‑theoretic terms, a one‑to‑one mapping preserves the entropy of the source dataset. No bits are lost or merged, so downstream processes that rely on exact row counts (e.g., joins on surrogate keys) remain valid.

### One non‑obvious insight  
Many engineers assume that simply *normalizing* values (e.g., trimming whitespace, converting case) guarantees uniqueness. Yet if two distinct logical entities share the same canonical representation after normalization, injectivity is lost. The real safeguard is **enforcing a unique surrogate key**—often an auto‑incrementing integer or UUID—at ingestion time; this key acts as a *proof of uniqueness* that survives any subsequent transformations.

In short: only a deterministic, collision‑free transformation that assigns a unique identifier to each source record yields a true one‑to‑one mapping.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
