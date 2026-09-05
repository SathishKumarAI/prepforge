---
qid: vq_c8076813eb__eli5__local
question: What are the types of UDF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 291
total_tokens: 447
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:27:29-05:00'
sources: []
---

Think of a UDF as a custom tool you add to your toolbox so that when you’re building (or cleaning) data, the tool does exactly what you need instead of waiting for someone else’s generic one.

**Three common kinds**

| Kind | What it looks like | When you use it |
|------|--------------------|-----------------|
| **Scalar UDF** | A single‑value gadget that takes some input and spits out one output (e.g., “convert a date string to a timestamp”). | Whenever you need a quick calculation or transformation on each row. |
| **Table UDF** | A small machine that receives rows, runs its own logic, and returns a whole mini‑table (like a sub‑query). | When you want to encapsulate a reusable set of joins or filters that produce multiple columns. |
| **Aggregate UDF** | Like a calculator that looks at many rows at once and gives back one summary value (e.g., “average sales”). | For summarizing data across groups, just as SQL’s built‑in `AVG` or `SUM` do. |

All three let you extend the language of your data platform, but each fits a different shape of work—single output, whole tables, or group summaries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
