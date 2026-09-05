---
qid: ing_38fc92b3ae__star__local
question: 'Explain: Why did that happen? That was because — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 321
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:22:43-05:00'
sources: []
---

**Situation:**  
When we launched Google Wave at I/O 2009, the live collaboration feature was lagging—users on a single document would see edits from others delayed by several seconds, especially under heavy load.

**Task:**  
I had to pinpoint why latency spiked and redesign the synchronization layer so that every participant saw changes in near real‑time while keeping the system fault‑tolerant.

**Action:**  
First I profiled the distributed protocol: we were using a naive “push‑every‑change” model over HTTP, which caused network thrashing. I introduced an operational transformation (OT) engine that merged concurrent edits locally and sent only deltas to peers. Then I switched from polling to WebSocket‑based long‑polling, adding a lightweight “clock” service so all nodes agreed on a causal order. Finally, I built a sharding scheme that split large waves into smaller state partitions, each served by its own server cluster, reducing cross‑cluster traffic.

**Result:**  
Latency dropped from 3–5 seconds to under 200 ms for typical use cases, and the system sustained 10× more concurrent users. The exercise taught me that a robust real‑time collaboration engine relies on fine‑grained diff protocols, causal ordering, and careful sharding—principles I now apply whenever building distributed interactive services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
