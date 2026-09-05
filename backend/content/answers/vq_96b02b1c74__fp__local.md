---
qid: vq_96b02b1c74__fp__local
question: WHAT ARE THE DIFFERENT STRING FUNCTIONS IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 521
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:47:12-05:00'
sources: []
---

In relational systems a *string* is just an ordered sequence of characters stored as bytes or code‑points. Operations on such sequences must satisfy three core requirements:

1. **Determinism** – the same input always yields the same output, enabling query reproducibility.
2. **Set‑based scalability** – the function should be evaluable row‑by‑row without side effects, so it can be parallelized by the engine.
3. **Expressiveness for text manipulation** – users need to extract substrings, search patterns, transform case, and concatenate.

From these principles a small family of *string functions* emerges:

| Category | Typical SQL syntax (ANSI) | Purpose |
|----------|---------------------------|---------|
| **Concatenation & length** | `||`, `CONCAT()`, `LENGTH()` | Build or measure strings. |
| **Sub‑string extraction** | `SUBSTRING(s, pos, len)` | Isolate parts of a string. |
| **Pattern search / replace** | `LIKE`, `POSITION()`, `REGEXP_REPLACE()` | Find and substitute patterns. |
| **Case conversion** | `UPPER()`, `LOWER()`, `INITCAP()` | Normalise case for comparison or display. |
| **Padding & trimming** | `LPAD()`, `RPAD()`, `TRIM()`, `BOTH/LEADING/TRAILING` | Align text to fixed widths. |
| **Encoding / decoding** | `CAST(... AS VARBINARY)`, `ENCODE()/DECODE()` (PostgreSQL) | Convert between binary and textual representations. |

These functions are not arbitrary; they reflect the *information‑theoretic* idea that any manipulation of a string can be reduced to operations on its *entropy budget*: concatenation increases entropy, trimming reduces it, and pattern matching is essentially a probabilistic filter.

**Non‑obvious insight:** In many engines `LIKE` internally compiles a *finite state machine* (FSM) for the wildcard pattern. Thus, a seemingly simple `%foo%` search can be executed in linear time with respect to string length, not quadratic, because the FSM skips already matched prefixes—an optimization that would be missed if one treats `LIKE` as a naïve substring check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
