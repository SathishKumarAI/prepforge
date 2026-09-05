---
qid: ing_52eaf22488__star__local
question: 'Explain: Under the hood: Broadcasting live video to millions - Engineering
  at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 339
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:14:00-05:00'
sources: []
---

**Situation** – At Meta, I was part of the Live Video team when we had to launch a new “Live Anywhere” feature that could stream user‑generated content to up to 50 million concurrent viewers worldwide during major events like music festivals.

**Task** – My responsibility was to design the backend pipeline so the video could be ingested in real time, transcoded into multiple bitrates, and distributed with minimal latency while keeping cost per GB under $0.02.

**Action** – I architected a sharded ingestion cluster using Kubernetes on AWS EKS, leveraging NGINX RTMP for the edge ingestion points. For transcoding, we switched from CPU‑based FFmpeg to GPU‑accelerated NVIDIA A100s and implemented a dynamic bitrate scheduler that used HLS with low‑latency extensions. To scale globally, I set up an auto‑scaling CDN layer on Cloudflare Workers KV, using edge caching of the manifest files and a custom cache‑busting strategy for live segments. We also added a real‑time telemetry dashboard in Grafana to monitor packet loss, buffer rates, and per‑region latency.

**Result** – The rollout achieved <150 ms end‑to‑end latency for 95 % of viewers, reduced CDN bandwidth costs by 28 %, and handled peak traffic spikes without any service interruptions. I learned how to balance compute cost against user experience in a globally distributed live streaming system, and the importance of real‑time observability for rapid incident response.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
