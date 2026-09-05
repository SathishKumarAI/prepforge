---
qid: ing_47fbd69a02__star__local
question: 'Explain: Bandwidth is certainly an issue. Cost of'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 327
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:52:28-05:00'
sources: []
---

**Situation:**  
When I was leading the deployment of a real‑time fraud detection model for a mobile payments startup, we had to stream user transaction features from edge devices to our cloud inference cluster every second. The traffic volume hit 15 GB/day and our data‑plan bill surged by 70 % in the first month.

**Task:**  
I needed to cut the outbound bandwidth cost by at least 40 % without compromising detection latency or accuracy, so we could keep operating within a tight budget while still delivering sub‑200 ms predictions.

**Action:**  
First, I profiled the feature payloads and found that 60 % of the data was static user metadata. I moved those fields into a local cache on each device and only sent delta updates. Then I applied a lightweight model quantization (float32 → int8) and used gRPC with HTTP/2 multiplexing to reduce header overhead. Finally, I introduced a simple Bloom filter at the edge to pre‑filter transactions unlikely to be fraudulent, sending full features only for flagged events.

**Result:**  
Bandwidth dropped from 15 GB/day to 9 GB/day—an 40 % cut—while inference latency stayed under 180 ms and AUC rose from 0.93 to 0.94 after the filter was tuned. I learned that combining data‑level pruning with protocol optimizations can deliver significant cost savings in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
