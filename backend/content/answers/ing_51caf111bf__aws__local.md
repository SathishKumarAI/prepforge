---
qid: ing_51caf111bf__aws__local
question: 'Explain: Endpoint: GET /recommendations — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 471
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:29:57-05:00'
sources: []
---

**Situation & Task**  
I was tasked with designing a recommendation endpoint for a Spotify‑style service (GET /​recommendations). The goal was to deliver 10 personalized tracks per request in <200 ms while scaling to millions of users and supporting A/B testing on model versions.

**Approach**  
*Customer Obsession / Ownership*: I focused on user satisfaction, so the recommendation latency had to stay below 200 ms.  
*Dive Deep*: I broke the problem into three layers – ingestion, model training, and serving.

1. **Data pipeline** – raw play logs → Amazon Kinesis Data Streams → AWS Glue ETL → S3 data lake (partitioned by date).  
2. **Model training** – distributed PyTorch jobs on SageMaker Training, using a factorization machine trained on 200 M interactions; model size ≈ 150 MB. Trained weekly, A/B‑tested in SageMaker Experiments.  
3. **Serving** – Amazon SageMaker Endpoint (Multi‑model endpoint) behind an Application Load Balancer. The endpoint is autoscaled by CloudWatch metrics (CPU >70 % → +1 instance). For cold starts I pre‑warm two instances.

*Bias for Action / Deliver Results*: We rolled out a canary deployment with 5 % traffic and observed a 12 % lift in daily active users’ session length (from 15 to 16.8 min) within two weeks, proving the system met performance targets while improving engagement.

**Trade‑offs & Cost**  
- Using SageMaker Multi‑model endpoints reduced cost by ~30 % versus dedicated endpoints per model.  
- Latency trade‑off: we accepted a slightly larger model (~150 MB) for higher accuracy; to keep memory usage low, we offload heavy embeddings to DynamoDB with TTL.

**Bar‑raiser notes** – The answer shows ownership (end‑to‑end responsibility), depth (specific AWS services and metrics), quantified impact (12 % lift), and learning from failure (canary testing mitigated risk).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
