---
qid: ing_57f69b9bef__star__local
question: 'Explain: Bandwidth — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 352
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:23:35-05:00'
sources: []
---

**Situation**  
At my previous company we launched a real‑time comment feed for our flagship streaming app. Within the first month, the comment stream was pulling 3 k comments per second from users worldwide, and latency spikes were pushing average delivery times to 2.5 s, breaking our SLA of 1 s.

**Task**  
I had to redesign the bandwidth‑aware architecture so that every user received live comments with sub‑second latency while keeping network costs under $0.05 per GB transferred.

**Action**  
I introduced a two‑layer approach: (1) a CDN‑edge WebSocket hub that aggregates incoming comment payloads into 100 ms micro‑batches, compresses them using protobuf and gzip, then pushes to regional edge nodes; (2) an adaptive throttling layer that monitors per‑user bandwidth usage via client telemetry. If a user’s connection drops below 200 kbps, the server down‑samples comments by dropping every other comment and switches from binary to plain JSON for compatibility. I also added a Bloom filter on the CDN to avoid sending duplicate comments to users in the same cluster.

**Result**  
Latency dropped to an average of 0.8 s across all regions, meeting our SLA. Bandwidth usage fell by 35 %, cutting data transfer costs from $120k/month to $78k/month. The exercise taught me that thoughtful payload shaping and edge‑aware throttling can reconcile real‑time user experience with tight network budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
