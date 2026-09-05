---
qid: ing_ec9e67e467__eli5__local
question: 'Explain: Push-Based Heartbeat — How to Detect Node Failures in Distributed
  Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 234
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:50:04-05:00'
sources: []
---

Imagine a group of friends playing a long‑distance game of “keep‑the‑ball.” Every friend (node) is supposed to throw the ball (heartbeat message) every few seconds to prove they’re still in the game. If someone stops throwing, everyone notices that their last ball was more than the agreed‑time interval ago and assumes that person has dropped out or crashed.

In a distributed system this is called a **push‑based heartbeat**: each node *pushes* small “I’m alive” messages to a monitoring service (or directly to its neighbors). The monitor keeps track of when it last received a message from each node. If the elapsed time exceeds a preset threshold, the monitor declares that node failed and can trigger recovery actions.

Key terms:
- **Node**: a computer or process participating in the system.
- **Heartbeat**: a tiny “I‑am‑alive” signal sent periodically.
- **Threshold**: the maximum allowed gap between heartbeats before failure is suspected.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
