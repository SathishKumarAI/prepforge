---
qid: ing_75ce6cb978__star__local
question: 'Explain: it back and forth so now this — Google Docs System design | Part
  1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 323
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:30:05-05:00'
sources: []
---

**Situation:** While working on a real‑time collaboration feature for an internal document editor, we noticed that simultaneous edits from multiple users caused frequent conflicts and a laggy user experience, especially over flaky mobile connections.

**Task:** I had to design a robust conflict‑resolution mechanism that would keep all replicas consistent in near‑real time while keeping latency low, without forcing users to reload the entire document each time.

**Action:** I chose Operational Transformation (OT) as the core algorithm. First, I defined an action model: insert, delete, and formatting changes, each tagged with a unique user ID and timestamp. When an edit arrives, we transform it against all concurrent operations using the OT commutation rules, ensuring that the resulting operation sequence preserves intent regardless of order. To reduce bandwidth over intermittent networks, I layered Differential Synchronization on top of OT: only changed blocks (diffs) are sent to peers, and a lightweight checksum verifies consistency after each round. We also implemented optimistic local updates with rollback on conflict detection, so users see instant feedback while the system silently reconciles.

**Result:** After deployment, we saw a 70 % drop in edit‑conflict incidents and a 40 ms average latency for collaborative edits, even on 3G links. The team learned that combining OT’s intent preservation with diff‑based sync’s bandwidth efficiency delivers a smooth real‑time experience without sacrificing correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
