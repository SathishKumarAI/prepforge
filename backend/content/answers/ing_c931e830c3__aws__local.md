---
qid: ing_c931e830c3__aws__local
question: 'Explain: 📺 YouTube Channels — Awesome System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 405
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:56:36-05:00'
sources: []
---

**Situation & Task**  
I was tasked with building a recommendation engine for a new YouTube‑style streaming platform that had to surface *“Awesome System Design Resources”* to millions of users while keeping latency below 200 ms and cost per request under $0.0001.

**Action (Design)**  
- **Data ingestion:** Real‑time clickstream → Kinesis Data Streams → Lambda → DynamoDB for user profile & watch history.  
- **Feature store:** SageMaker Feature Store to cache engineered features (channel popularity, content similarity).  
- **Model serving:** Endpoint in SageMaker hosting a LightGBM model; traffic routed via API Gateway + Lambda@Edge for low‑latency edge caching.  
- **Recommendation pipeline:** Batch re‑train nightly on S3 data lake using EMR Spark to update the model weights, then push to SageMaker with CI/CD (CodePipeline).  

**Result**  
- Reduced recommendation latency from 350 ms to **180 ms** (30% improvement).  
- Hit a click‑through rate of **4.7 %**, up 1.3× vs baseline.  
- Cut per‑request cost by **$0.00005**, saving ~$300K annually for 10M monthly active users.

**Leadership Principles Highlighted**  
- **Customer Obsession:** Tailored content to user interests, improving engagement.  
- **Ownership & Dive Deep:** Built end‑to‑end pipeline, continuously profiled and optimized every component.  

**Bar‑raiser cues** – I quantified impact with latency, CTR, cost; demonstrated deep technical trade‑offs (edge caching vs. compute); and iterated from a failed 400 ms prototype by re‑architecting the feature store.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
