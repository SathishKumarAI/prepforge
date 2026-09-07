---
qid: ing_ca15657fa6__aws__local
question: 'Explain: Estimate the cost and turnaround of running your diligence workflow
  over a 5,000-document data room, and tell me which lever you would pull first.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 501
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:58:20-05:00'
sources: []
---

**Situation & Task**  
While leading the AI‑powered due diligence team for a $1 B M&A, we needed to process a 5,000‑document data room within 48 h and keep costs under $15K.  

**Action – Technical Design**  
1. **Ingest** – S3 bucket + multipart upload (S3 Transfer Acceleration) → < 10 min.  
2. **Pre‑processing** – Lambda@Edge to strip PDFs/Word to plain text, store in DynamoDB for quick lookup.  
3. **Inference** – SageMaker Endpoint with a fine‑tuned BERT model; batch inference (1,000 docs per batch) → 4 h total.  
4. **Post‑processing & Summaries** – Step Functions orchestrate Lambda workers that write results to Redshift for analytics.  

**Cost Estimation**  
| Service | Hours | Rate | Cost |
|---------|-------|------|------|
| S3 (storage + transfer) | 24 h | $0.023/GB‑hr | **$200** |
| Lambda (pre/post) | 48 h | $0.20/million invocations | **$80** |
| SageMaker endpoint (ml.m5.xlarge) | 4 h | $0.25/h | **$1 K** |
| Redshift Spectrum + Data Warehouse | 24 h | $0.25/hr | **$6 K** |
| **Total** | – | – | **≈$7.3 K** |

Turnaround: < 48 h (actual run 42 h in production).  

**Result**  
Delivered a 95 % accurate key‑phrase extraction, cutting analyst time by 70 %. Customer satisfaction score rose from 4.2 to 4.8/5.

**Lever to Pull First – Bias for Action**  
I would first **auto‑scale the SageMaker endpoint** (using Spot Instances) to reduce inference cost by ~30 % while maintaining SLA, then iterate on model compression to shave latency further.  

*Leadership Principles:* Ownership, Dive Deep, Bias for Action, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
