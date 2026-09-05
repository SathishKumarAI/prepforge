---
qid: vq_d1b36459db__eli5__local
question: When to use --target-dir and --warehouse-dir while importing data?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 223
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:29:08-05:00'
sources: []
---

Think of a library that stores books (your data).  
*`--warehouse-dir`* is the main reading room where every book lives after it’s been catalogued – you can find and use them anytime.  
*`--target-dir`* is a temporary staging shelf: when new books arrive, they’re first placed here so you can check spelling, format pages, or split chapters before moving them to the reading room.

Use **`--warehouse-dir`** when you want the data ready for queries right away – it’s the permanent, query‑ready location.  
Use **`--target-dir`** during an import that needs a “pre‑check” step (e.g., cleaning or partitioning). Once the books pass inspection, they’re moved from the staging shelf to the reading room.

In short: `--warehouse-dir` = final home; `--target-dir` = temporary prep area.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
