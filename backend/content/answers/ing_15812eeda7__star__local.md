---
qid: ing_15812eeda7__star__local
question: 'Explain: Google Docs System design | Part 1| Operational transformation
  | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 319
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:11:14-05:00'
sources: []
---

**Situation:**  
During my senior year I built a real‑time collaborative note‑taking app for a hackathon. The team had to let dozens of users edit the same document simultaneously without locking the UI, while keeping bandwidth low for mobile clients.

**Task:**  
I needed to implement a conflict‑free synchronization scheme that would merge concurrent edits on all devices and preserve user intent, even under intermittent connectivity.

**Action:**  
I chose Operational Transformation (OT) as the core algorithm. Each edit became an *operation* (insert/delete with position). Operations were timestamped and assigned unique IDs; clients sent them to a central server that maintained a linear history. The server transformed incoming operations against all concurrent ones using the classic OT transform functions, then broadcast the transformed ops back. For efficiency I added *differential synchronization*: on reconnect, instead of re‑sending the whole document I computed a diff between the client’s local state and the server snapshot, sending only patches. I used protobuf for compact messages and WebSocket for low‑latency transport.

**Result:**  
The prototype supported 30 concurrent users with <50 ms latency on 3G networks. Merge conflicts were resolved automatically, and we saw a 60 % reduction in bandwidth compared to naïve full‑document sync. I learned that OT’s transformation logic is powerful but requires careful handling of operation ordering and version vectors; differential sync complements it by minimizing data transfer for large documents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
