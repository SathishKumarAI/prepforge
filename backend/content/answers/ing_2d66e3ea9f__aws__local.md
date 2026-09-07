---
qid: ing_2d66e3ea9f__aws__local
question: 'Explain: You need to process 10M document pages per month. VLM or traditional
  OCR? Do the math.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 524
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:07:46-05:00'
sources: []
---

**Situation / Task**  
At my previous e‑commerce firm we had to ingest and index **10 M document pages per month** for a regulatory audit portal. The team debated whether to use a Vision‑Language Model (VLM) or classic OCR. I owned the decision, drove a cost‑impact analysis, and delivered a production‑ready pipeline.

**Action**  
1. **Requirements & Metrics** – We needed < 5 s latency per page, 99.9 % accuracy for key fields, and total monthly cost ≤ $10K.  
2. **Design** –  
   * **OCR path**: Amazon Textract (S3 trigger → Lambda → DynamoDB).  
     * Throughput: 10M pages ≈ 4 k pages/sec. Lambda concurrency set to 5 k, autoscaled by SQS.  
     * Cost: $1.50 per 1,000 pages → **$15K** monthly (exceeds budget).  
   * **VLM path**: SageMaker Endpoint using a fine‑tuned BLIP model on a g4dn.xlarge cluster.  
     * Batch inference via Step Functions → EC2 spot instances (max 30 h/day).  
     * Cost: $0.10 per page (GPU compute + S3 transfer) → **$1K** monthly.  
   * Added a lightweight pre‑filter (AWS Rekognition to detect non‑text pages) to avoid unnecessary GPU usage.  
3. **Validation** – Ran 100k sample pages, achieved 97 % field accuracy vs. 94 % for Textract.  

**Result**  
* Cut monthly processing cost from **$15K → $1K** (92 % savings).  
* Maintained latency < 5 s and accuracy > 95 %.  
* Delivered a fully serverless, auto‑scalable pipeline that handled peak bursts of 20 k pages/sec.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Prioritized audit compliance and user speed.  
- **Ownership** – Took end‑to‑end responsibility for design, cost, and quality.  

**Bar‑raiser takeaway**  
Listen for deep dive into trade‑offs (GPU vs. serverless), quantified impact (cost & accuracy metrics), and evidence of learning from a failed prototype that over‑spent on OCR.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
