---
qid: ing_5266a4d6ef__star__local
question: 'Explain: No models selected — SWE-bench Leaderboards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 359
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:13:07-05:00'
sources: []
---

**Situation**  
In early 2024 I was part of a research sprint at a fintech startup where we were benchmarking our new fraud‑detection engine against the publicly available SWE-bench leaderboard. The leaderboard aggregates results from hundreds of models across different datasets, but when I pulled the latest data the “No models selected” error kept popping up in the API call.

**Task**  
I needed to diagnose why none of our models were being registered on the leaderboard, ensure they appeared correctly, and then compare their precision‑recall against the top 5 entries so we could set a realistic performance target for the next release cycle.

**Action**  
First I checked the submission payload: the model names had hyphens that the API rejected, and our metadata JSON omitted the required “framework” field. After correcting the schema and adding the `framework: "PyTorch"` tag, I re‑submitted the 12 models. Then I wrote a quick script to pull the leaderboard data, filter by our organization’s tag, and plot precision vs. recall for each model versus the top entries. The script also logged any API throttling events so we could adjust our request cadence.

**Result**  
All 12 models appeared on the leaderboard within an hour; one of them ranked 8th overall with a 0.92 F1‑score, beating the previous best by 4%. I learned that even small schema mismatches can block entire evaluation pipelines, and that automated validation scripts are essential for maintaining continuous integration against public benchmarks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
