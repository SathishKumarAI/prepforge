---
qid: ing_a96471adf6__star__local
question: How to scale the system? — Driverallocationubergojek
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 352
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:11:40-05:00'
sources: []
---

**Situation** – At a mid‑stage ride‑hailing startup, our real‑time driver allocation model was running on a single server and struggled to keep up during peak hours: latency spiked to 350 ms and the match rate dropped by 12 %.  

**Task** – I had to redesign the system so that it could serve predictions for every active rider within 100 ms, even when demand doubled during city festivals.  

**Action** – First, I profiled the inference pipeline with PyTorch Profiler; bottlenecks were in feature extraction and GPU serialization. I refactored features into a pre‑computed feature store on Redis, reducing per‑request CPU work by 60 %. Next, I containerized the model with NVIDIA Triton Inference Server and deployed it across an autoscaling Kubernetes cluster, using Ray Serve for request routing. To handle data drift, I set up a nightly Spark job that retrains the gradient‑boosted tree on the last week’s trips, then pushes the new checkpoint to S3 and triggers a rolling update via Helm.  

**Result** – Latency fell to 75 ms on average; match rate improved from 88 % to 95 %. During a two‑day festival, traffic grew 2.5× and the system stayed within SLA. I learned that combining feature caching, containerized inference, and automated retraining is key to scaling ML in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
