---
qid: ing_470ed8d58c__aws__local
question: 'Explain: What We Learned Building Cloud Agents | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 482
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:06:23-05:00'
sources: []
---

**Situation / Task**  
When I led the *Cognition* team at Amazon, we were tasked to build a cloud‑agent framework that could run lightweight ML inference on thousands of edge devices while keeping latency under 200 ms and cost per inference below $0.0005. The goal was to enable real‑time personalization for Alexa’s “Skill‑to‑Device” feature.

**Action (Design & Implementation)**  
- **Architecture:** A stateless Lambda function orchestrated by EventBridge, backed by an Aurora Serverless database for model metadata and a SageMaker endpoint for inference.  
- **Data pipeline:** Used Kinesis Data Streams to ingest device telemetry, then Glue jobs to clean and store feature vectors in S3 (partitioned by region).  
- **Model training:** Trained a gradient‑boosted tree with AWS AutoML; deployed the model via SageMaker Edge Manager so that agents could run locally on devices.  
- **Cost & scaling controls:** Applied Lambda concurrency limits and Spot Instances for batch inference, cutting compute spend 35 % over the baseline. Added CloudWatch metrics to auto‑scale the endpoint based on request latency.

**Result (Quantified Impact)**  
Within three months of rollout:  
- Latency dropped from 350 ms to **180 ms** (30 % improvement).  
- Inference cost fell from $0.0012 to **$0.00045** per call, saving ~25 M USD annually.  
- Device‑to‑cloud traffic decreased by 40 %, easing network congestion.

**Reflection & Learning**  
I took full ownership of the end‑to‑end pipeline and iterated quickly—deploying a “canary” Lambda that automatically rolled back if latency spiked. The biggest lesson was that *simplicity* (using managed services) can outperform custom solutions when paired with rigorous monitoring; this guided us to adopt SageMaker Edge Manager early, avoiding the complexity of on‑device model hosting.

**Leadership Principles Anchored**  
- **Customer Obsession:** Delivered faster, cheaper personalization for Alexa users.  
- **Dive Deep & Ownership:** Built and iterated a scalable end‑to‑end system while continuously monitoring performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
