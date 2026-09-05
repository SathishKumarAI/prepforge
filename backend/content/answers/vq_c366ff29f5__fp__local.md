---
qid: vq_c366ff29f5__fp__local
question: What are the types of Measures?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 331
total_tokens: 498
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:55:05-05:00'
sources: []
---

**Measures in a data warehouse are the quantitative facts that answer “how many?” or “what value?” questions.  
From first principles they must (1) be *numeric*, (2) be *aggregable* across dimensions, and (3) preserve *semantics* when combined.**

| Type | Core property | Typical use | Why it exists |
|------|---------------|-------------|--------------|
| **Atomic** | Single‑value per fact record | Sales amount, quantity sold | Enables precise roll‑up without ambiguity |
| **Derived** | Computed on‑the‑fly from atomic measures | Gross margin = revenue – cost | Avoids storage redundancy and keeps facts immutable |
| **Normalized** | Scale‑adjusted (per unit, per capita) | Revenue per employee | Allows fair comparison across entities of different sizes |
| **Weighted** | Summation with custom weights | Weighted average rating | Reflects importance or confidence of components |
| **Time‑variant** | Snapshot or cumulative over time | Running total of orders | Supports trend analysis and period‑over‑period comparisons |

*Non‑obvious insight:*  
Because measures must be *commutative* for aggregation, any derived measure that involves division (e.g., average) is inherently non‑aggregable unless stored as numerator and denominator separately. This subtle requirement forces designers to store the raw components rather than the final value, preserving accuracy across partitions or incremental loads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
