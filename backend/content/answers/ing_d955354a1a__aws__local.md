---
qid: ing_d955354a1a__aws__local
question: 'Explain: “Moving Computation is Cheaper than Moving Data”'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 413
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:30:31-05:00'
sources: []
---

**Answer (Amazon Style)**  

During a recent project for a media‑delivery startup, I was asked to reduce the cost of nightly video‑transcoding pipelines that processed 50 TB of raw footage per day.  
**Situation:** The existing architecture moved all videos from on‑prem S3 buckets to an EC2 cluster in us‑east‑1 for GPU inference, then streamed results back—costs were ~US$200k/month mainly due to egress charges (≈$0.02/GB).  

**Task:** Decrease monthly spend while keeping latency < 5 min per clip.  

**Action:**  
- Leveraged **AWS Lambda@Edge** + **SageMaker Edge Manager** to deploy inference models directly in regional CloudFront edge locations, eliminating egress.  
- Introduced **Amazon SageMaker Processing Jobs** that pull data from S3 into the same region where the model resides, using **S3 Transfer Acceleration** for minimal intra‑region transfer.  
- Implemented a **data lake** on **Amazon S3 Glacier Deep Archive** for archival and used **AWS Glue** to catalog metadata—so only active clips hit compute.  

**Result:** Egress costs dropped from $200k to $30k/month (85 % reduction). Transcoding latency improved by 20 %, and we achieved a 4× increase in throughput using the same GPU fleet.  

*Key Learnings:*  
- **Ownership & Dive Deep:** I dissected cost drivers, identified hidden egress fees, and engineered an edge‑centric solution.  
- **Bias for Action & Deliver Results:** Rapid prototyping with Lambda@Edge delivered measurable savings within 2 weeks.  

**AWS Services Used:** S3, CloudFront (Edge), Lambda@Edge, SageMaker Edge Manager, Glue, Glacier Deep Archive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
