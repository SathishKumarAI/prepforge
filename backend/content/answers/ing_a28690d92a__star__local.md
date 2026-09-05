---
qid: ing_a28690d92a__star__local
question: 'Explain: Hosting boxes close to the users is — System Design: Content Delivery
  Networks (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 285
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:57:47-05:00'
sources: []
---

**Situation:**  
When we launched our video streaming app in 2022, the user‑reported buffering rate was 18 % during peak hours, especially for viewers outside North America.

**Task:**  
I had to reduce latency and improve playback quality by bringing content closer to end users without breaking our global CDN budget or violating data‑residency regulations.

**Action:**  
First, I mapped out traffic patterns using Datadog traces and identified three high‑congestion regions (Europe, Asia‑Pacific, South America). I then selected a set of edge servers in those zones and deployed lightweight Docker containers that pre‑cache popular video segments. To keep costs low, I leveraged AWS Global Accelerator with an auto‑scaling pool and integrated CloudFront’s “Origin Shield” to cache at the most used points. I also added a simple health‑check script that purged stale content after 24 hours, ensuring compliance with GDPR data‑retention limits.

**Result:**  
Within two weeks, buffering dropped from 18 % to 3 %, and average start‑up time fell by 1.2 seconds (≈ 35 %). The edge deployment saved us roughly $12k/month compared to a full regional CDN rollout. I learned that strategically placing lightweight cache layers can dramatically improve user experience while keeping infrastructure lean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
