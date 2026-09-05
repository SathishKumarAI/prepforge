---
qid: ing_90eca9a866__eli5__local
question: 'Explain: Write-optimized temporary index table (called buffer index)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 223
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:26:38-05:00'
sources: []
---

Think of a writing desk that’s only meant for quick notes, not long‑term storage. In databases, when a program is adding lots of new rows to a big table, it can’t afford to reorganize the whole index every time—doing so would be slow and wasteful. Instead, it uses a **write‑optimized temporary index table** called a *buffer index*.  

Imagine the buffer as a stack of sticky notes: you quickly jot down where each new row will go, but you don’t sort or merge them yet. Once enough rows are collected, the system takes all those sticky notes at once and merges them into the main index in one efficient pass. This way, many small writes become a few large, orderly updates—just as piling up notes before filing saves time. The buffer index is thus a short‑lived, write‑friendly helper that keeps the main index fast and tidy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
