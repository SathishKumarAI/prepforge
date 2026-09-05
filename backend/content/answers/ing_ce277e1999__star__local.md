---
qid: ing_ce277e1999__star__local
question: What Went Wrong? — Prime Video Microservices - by Neo Kim
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 358
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:21:31-05:00'
sources: []
---

**Situation** – At a streaming platform, we launched a recommendation engine as a microservice to personalize thumbnails for the next‑day watchlist. Within two weeks, click‑through rates dropped from 18 % to 9 %, and latency spiked to 350 ms during peak hours.

**Task** – I had to diagnose why the model was underperforming in production, restore CTR above 15 %, and keep response times below 200 ms while keeping the service horizontally scalable.

**Action** – First, I instrumented the inference pipeline with OpenTelemetry, capturing per‑step latency and batch sizes. The data revealed that the GPU‑accelerated inference container was being underutilized; the scheduler kept launching single‑instance pods even when traffic surged, causing a queue buildup. I rewrote the autoscaler to use Knative’s event‑driven scaling and set a maximum concurrency of 8 per pod. Next, I performed a feature drift audit: the training data had shifted because we were still using the old click logs; I retrained the model on the latest 30 days of user interactions and added a simple “cold start” fallback that served static top‑10 lists when confidence was low.

**Result** – CTR rebounded to 16.5 % within three days, latency fell to an average of 145 ms, and we cut GPU usage by 40 %. I learned that real‑time monitoring and adaptive scaling are as critical as the model itself in a microservice architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
