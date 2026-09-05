---
qid: ing_8910e06404__star__local
question: 'Explain: Throughput & Bandwidth — 11 System Design Concepts Explained,
  Simply'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 406
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:07:09-05:00'
sources: []
---

**Situation** – At my last company I was tasked with redesigning the real‑time video analytics pipeline that fed into a security dashboard for a chain of retail stores. The existing system could only process 20 frames per second (fps) on average, and our SLA required 50 fps with sub‑100 ms latency.

**Task** – My goal was to increase throughput while staying within the same bandwidth budget (≈500 Mbps total across all cameras). I had to figure out how to push more frames through the network and processing stack without overspending on infrastructure.

**Action** – First, I profiled the data path with Wireshark and identified that the bulk of the traffic was uncompressed H.264 video at 1080p. Switching to a lower‑resolution stream (720p) cut per‑frame size by ~35 %. Next, I introduced a two‑tier caching layer: edge GPUs performed lightweight motion detection and only forwarded key frames (~15 % of total frames) to the central server, reducing bandwidth usage by 40 %. On the backend, I replaced the monolithic queue with Kafka partitions tuned for high throughput (8 partitions per camera stream). Finally, I set up a dynamic scaling policy in Kubernetes that spun up additional processing pods when CPU hit 70 %, ensuring we never dropped frames under load.

**Result** – The pipeline now delivers 60 fps on average with <80 ms end‑to‑end latency while keeping bandwidth usage within the original 500 Mbps limit. We also cut operational costs by 25 % through reduced cloud traffic and fewer GPU instances. I learned that throughput is a holistic metric—improving it often requires rethinking data representation, caching, and distributed queue design, not just raw hardware upgrades.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
