---
qid: ing_784441e1d4__star__local
question: 'Explain: So Indians, Chinese, people in Asia can — System Design: Content
  Delivery Networks (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 387
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:34:32-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with redesigning the video streaming platform for a global media company that had recently acquired a large Asian content library. The existing CDN was optimized for North America and Europe, causing buffering times in India and China to spike above 5 seconds during peak hours.

**Task**  
I needed to architect a low‑latency, high‑throughput CDN solution that could deliver consistent playback quality across Asia while keeping cost per GB under $0.02 and meeting the SLA of <1 % buffering incidents.

**Action**  
I started by mapping out regional traffic patterns with AWS CloudWatch and NetFlow data, then selected a hybrid edge strategy: (1) leveraged Akamai’s PoPs in Mumbai, Singapore, Hong Kong, and Shanghai for sub‑200 ms latency; (2) deployed an on‑prem cache layer at the company’s Singapore data center to reduce backhaul costs; (3) implemented GeoDNS with weighted routing to balance load between Akamai and our own edge nodes; (4) added adaptive bitrate logic in the player that switched to a 720p stream when packet loss exceeded 2 %. I also set up real‑time analytics dashboards using Grafana to monitor cache hit ratios.

**Result**  
Within two weeks of rollout, average buffering dropped from 5.3 seconds to 1.4 seconds, and the regional cache hit ratio increased from 35 % to 78 %, cutting bandwidth costs by 22 %. The project met its SLA targets and earned a “Best Technical Initiative” award. I learned that combining third‑party edge services with strategic on‑prem caching can deliver both performance and cost efficiency in diverse markets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
