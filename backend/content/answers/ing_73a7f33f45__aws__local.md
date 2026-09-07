---
qid: ing_73a7f33f45__aws__local
question: 'Explain: the reference state here actually we applied'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 659
total_tokens: 888
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:47:24-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I was tasked with replacing our legacy rule‑engine that flagged suspicious transactions. The data scientists suggested a supervised model, but the business insisted on a “reference state” – a clean baseline of normal behavior against which anomalies could be measured in real time. My goal was to build an end‑to‑end pipeline that produced this reference state while keeping latency < 100 ms and cost under $0.02 per inference.

**Action**  
1. **Dive Deep into Requirements** – I mapped the feature space (transaction amount, geo‑location, device fingerprint) and identified a 7‑day rolling window as the optimal horizon for “normal” behavior.  
2. **Design & AWS Services**  
   * **Amazon Kinesis Data Streams** to ingest live transactions at ~10k req/s.  
   * **AWS Lambda** (Python 3.11) for stateless preprocessing and feature extraction.  
   * **Amazon SageMaker Feature Store** to materialize the reference state; we used a daily “update” job that writes aggregates into an Aurora Serverless DB (for fast joins).  
   * **SageMaker Endpoint** (multi‑model serving with GPU inference) for real‑time scoring, auto‑scaling via Lambda’s target tracking.  
3. **Scalability & Availability** – The Kinesis shards were provisioned at 2× the peak throughput; Lambda concurrency was set to 5000 to handle burst traffic. Aurora Serverless Auto Scaling kept replicas up during spikes.  
4. **Cost Control** – By batching feature calculations and reusing the same SageMaker endpoint for all models, we reduced total monthly spend from $12k to $3.8k (≈ 68% savings).  

**Result**  
- Latency dropped from 350 ms to **95 ms** (average), meeting SLA.  
- False‑positive rate fell from 18% to **4%**, increasing revenue by $1.2M annually.  
- The reference state pipeline is now a reusable template for other fraud products, cited in two internal whitepapers.

---

> **Leadership Principles Reflected**  
> *Customer Obsession* – Delivering accurate fraud detection directly protects users’ assets.  
> *Ownership* – I championed the entire lifecycle from data ingestion to inference, ensuring reliability and cost efficiency.  
> *Dive Deep & Bias for Action* – Rapid prototyping with Lambda + SageMaker accelerated time‑to‑market while maintaining rigorous monitoring.

**What a Bar‑raiser Looks For**  
- Demonstrated ownership of cross‑functional components.  
- Quantified impact (latency, FP rate, revenue).  
- Depth: clear trade‑offs between scalability, availability, and cost; explanation of why Kinesis + Lambda were chosen over alternatives like EC2 or EMR.  
- Learning from a failed prototype that initially used a monolithic batch job, which caused >30 s lag—pivoting to streaming solved the issue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
