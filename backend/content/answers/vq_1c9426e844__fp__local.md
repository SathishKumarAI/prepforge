---
qid: vq_1c9426e844__fp__local
question: WHAT IS THE DIFFERENCE BETWEEN COUNT(), SUM(), AND AVG()?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 385
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:25:17-05:00'
sources: []
---

In SQL, `COUNT()`, `SUM()`, and `AVG()` are all aggregate functions that collapse a set of rows into a single value, but they answer different questions about the data’s *distribution*.

| Function | What it measures | Why it behaves this way |
|----------|------------------|------------------------|
| **COUNT(\*)** | How many rows exist (including NULLs) | It is a *cardinality* measure; each row contributes 1 regardless of its values. |
| **SUM(col)** | Total of the numeric column’s values | It aggregates the *magnitude* of every non‑NULL entry, ignoring rows where `col` is NULL because adding NULL yields NULL. |
| **AVG(col)** | Mean = SUM(col) / COUNT(col) | It normalises the total by the number of contributing rows, yielding a per‑row expectation. |

The deeper principle is *probability*.  
- `COUNT()` estimates the support size (number of observations).  
- `SUM()` estimates the expected value times the support: \(E[X]\times N\).  
- `AVG()` directly estimates the expected value \(E[X]\) itself.

**Non‑obvious insight:** When you compute `AVG(col)` on a group, you’re implicitly assuming every row in that group contributes equally to the mean. If a column contains many NULLs, `AVG()` will overestimate the average of the *observed* values because it divides by fewer rows (`COUNT(col)`) than `SUM(col)`’s denominator (`COUNT(*)`). Thus, `AVG()` can be biased upward unless you explicitly account for missing data (e.g., using `COUNT(*)` in the denominator or imputing NULLs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
