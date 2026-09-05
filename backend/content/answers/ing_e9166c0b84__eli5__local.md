---
qid: ing_e9166c0b84__eli5__local
question: 'Explain: Modernizing Artifact Storage at Uber — Uber Engineering \u2014
  Where the Digital World Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 233
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:44:20-05:00'
sources: []
---

Imagine every time you learn something new, you put a note in a giant, well‑organized filing cabinet that anyone can open later. In machine learning (ML), those “notes” are *artifacts*—the trained models, the data they used, the code that produced them, and even the exact version of that code. Uber’s old cabinet was a messy drawer: files were scattered across different servers, hard to find, and sometimes disappeared when a server failed.

Uber modernized this by moving all artifacts into a single, cloud‑based “digital shelf” that behaves like a library catalog. Every artifact gets a clear label (a *tag*), a version number, and a place in the shelf’s index. The system automatically backs up each item, checks it for corruption, and records who added it and when. Now engineers can instantly pull the exact model they need, know that it will still work on any machine, and even roll back to an older version if something goes wrong—all without hunting through a maze of folders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
