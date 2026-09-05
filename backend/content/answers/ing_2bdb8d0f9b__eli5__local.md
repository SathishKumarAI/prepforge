---
qid: ing_2bdb8d0f9b__eli5__local
question: 'Explain: hello everyone my name is Marion and — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 310
total_tokens: 484
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:44:49-05:00'
sources: []
---

Imagine a group of friends drawing a giant mural together on a shared canvas that hangs in the middle of their living room. Each friend can sketch, erase, or color any part of the picture at any time. To keep everyone’s view consistent, the system must decide what to show each person so they never see two different versions of the same spot.

**Operational Transformation (OT)** is like a smart referee that watches every stroke (“operation”) and rewrites later strokes if someone else has already painted over the same area. If Alice paints a blue square while Bob simultaneously colors the same spot red, OT reorders or adjusts their actions so both friends end up with a single, agreed‑upon color.

**Differential Synchronization** is another approach: each friend sends only the *difference* they made (e.g., “changed this 5×5 block to green”) rather than the whole picture. The server merges these small patches and pushes back the updated differences so every canvas stays in sync, even if messages arrive out of order.

In Google Docs, a combination of OT and differential sync ensures that dozens or hundreds of users can type, delete, or edit text simultaneously without losing anyone’s changes. The key idea: **track what changed, reconcile conflicts automatically, and propagate only the necessary updates** so everyone sees the same document at the same time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
