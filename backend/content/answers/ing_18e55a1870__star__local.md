---
qid: ing_18e55a1870__star__local
question: 'Explain: Video and Audio Streaming — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 371
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:18:57-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a new on‑demand platform that suddenly saw a 4× spike in concurrent viewers during a live sports event. Latency jitter hit 120 ms and 30% of users reported buffering, pushing our SLA from 99.5% to 95%.

**Task:**  
I was tasked with redesigning the delivery layer so we could keep 99.9% uptime, reduce end‑to‑end latency below 80 ms, and support geographic scaling for a global audience.

**Action:**  
I built a multi‑tier CDN architecture using edge caching (Varnish + Redis) on Amazon CloudFront. I introduced adaptive bitrate streaming with HLS+DASH, encoding each clip at 4k, 1080p, 720p, and 480p. For cache invalidation we implemented signed URLs that expire after 5 minutes to keep stale content out while still allowing hot‑standby edge servers. I also added a real‑time telemetry pipeline (Kafka + Prometheus) to monitor cache hit ratios per region; when the hit ratio fell below 70% we automatically spun up additional edge nodes via ECS autoscaling.

**Result:**  
After deployment, average latency dropped from 120 ms to 65 ms and buffering incidents fell by 92%. Cache hit ratio rose to 85%, cutting backend load by 3×. The platform now comfortably handles 10k concurrent users globally with a 99.95% delivery SLA. I learned that fine‑tuned cache policies combined with adaptive streaming can dramatically improve QoE while keeping costs in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
