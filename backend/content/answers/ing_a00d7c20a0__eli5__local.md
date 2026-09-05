---
qid: ing_a00d7c20a0__eli5__local
question: 'Explain: Primer: Linux filesystem concepts — Blockdiff: How we built our
  own file format for VM disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 205
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:51:15-05:00'
sources: []
---

Imagine your laptop’s hard drive as a giant library, where each book is a *block* of data that the computer reads or writes. When you take a snapshot of a virtual machine (VM), it’s like making a copy of the whole library—but only the books that have changed since the last copy need to be saved again.  

Our custom file format works exactly like a “change‑log book.” It records, for each block, whether it’s new or unchanged. If a block hasn’t moved, we simply point to the original one instead of copying its pages again. This saves space and makes restoring the VM faster, because the system can reconstruct the full disk by reading only the changed blocks from the log and reusing the untouched ones. In short: a lightweight diary that tells the computer which library books truly need rewriting when a snapshot is taken.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
