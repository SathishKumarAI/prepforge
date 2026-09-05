---
qid: ing_8c41b93557__star__local
question: 'Explain: uh I think if you include video — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 420
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:13:20-05:00'
sources: []
---

**Situation**  
At my last role on the Video Recommendations team, we were tasked with launching a new feature that surfaced short clips in users’ feeds. The existing pipeline handled only image thumbnails and metadata; adding full‑length video processing meant rethinking storage, inference latency, and model training at scale.

**Task**  
I had to design an end‑to‑end system that ingested raw MP4s, extracted frame‑level embeddings with a ResNet‑50 backbone, and scored them against user context using a transformer‑based ranking model—all while keeping cold‑start latency under 200 ms per request.

**Action**  
First, I built a microservice in Go that streamed video chunks directly into an Apache Beam pipeline on Google Cloud Dataflow. The pipeline performed on‑the‑fly decoding with FFmpeg and batched frames to TensorFlow Serving for feature extraction. To reduce inference cost, I distilled the ResNet model to 1/10th its size without losing accuracy. For ranking, I fine‑tuned a pre‑trained BERT variant on click‑through logs, deploying it via Vertex AI Predictions with autoscaling. We also added an A/B test harness that automatically rolled out the top‑scoring clips to 5% of users and logged latency metrics in Stackdriver.

**Result**  
The new system processed 30 million videos per day with a 40 % reduction in GPU usage compared to our baseline, and the recommendation click‑through rate increased by 12%. I learned that early integration of streaming pipelines with model serving dramatically cuts end‑to‑end latency, and that continuous distillation is essential for keeping inference budgets realistic at Google’s scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
