---
qid: ing_48902fe48f__eli5__local
question: 'Explain: an end number of different copies of — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 238
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:32:03-05:00'
sources: []
---

Imagine a group of friends writing a story together on a shared whiteboard that can be copied to each person’s own paper.  
**Operational Transformation (OT)** is like each friend first writes their sentence, then sends a “move” to the board—“add this word at position 5.” The board receives the move and automatically slides everything after position 5 one space over so everyone sees the same final story. OT guarantees that no matter who types where or when, all copies eventually match because each change is *transformed* against earlier changes.

**Differential Synchronisation (Diff‑Sync)** works differently: every few seconds each friend sends a snapshot of their whole page to a server. The server compares the snapshots and finds only the tiny differences (“you added ‘wonderful’ before ‘cat’”). It then patches everyone’s copies with those differences, so all pages converge without needing complex transformation rules.

Both keep many copies in sync, but OT is clever about order, while Diff‑Sync relies on regular comparison of whole documents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
