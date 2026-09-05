---
qid: ing_c8ae0d5794__eli5__local
question: 'Explain: on the either side we arrive at — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 234
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:53:27-05:00'
sources: []
---

Imagine a group of friends building a LEGO castle together on a shared table. Each friend can add, move, or delete bricks at any time, even while others are working. To keep the castle from collapsing into chaos, the table has two clever helpers.

**Operational Transformation (OT)** is like a traffic‑control system that records every change as a “move” and then rewrites later moves so they still make sense no matter what order they arrive. If one friend lifts a brick while another places a new one on top, OT reorders the actions so both changes fit together without conflict.

**Differential Synchronization (DS)** works like a pair of smart mirrors: each friend’s set of bricks is compared to the others’ sets; only the differences (the new or removed bricks) are sent across. The mirrors then merge those tiny updates, ensuring everyone sees the same castle almost instantly.

Both techniques let many people edit the same document—like Google Docs—simultaneously without losing anyone’s work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
