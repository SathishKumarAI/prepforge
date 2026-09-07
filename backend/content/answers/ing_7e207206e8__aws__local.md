---
qid: ing_7e207206e8__aws__local
question: What are the tradeoffs in choosing vocabulary size?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 458
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:10:31-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team that was building an on‑prem AI assistant for a large retailer’s customer‑service portal. The core challenge: choose the right vocabulary size for our transformer model while balancing latency, cost, and accuracy.

**Action**  
- **Ownership & Dive Deep** – I owned the experiment, gathered data from 2 M user utterances, and built a tokenizer that supported 50k, 100k, and 200k sub‑word tokens.  
- **AWS Services** – We used SageMaker for training (GPU instances), S3 for model artifacts, and Lambda + API Gateway for inference to keep the solution serverless and elastic.  
- **Design Trade‑offs**  
  - *Accuracy*: 200k vocab reduced perplexity by 12% vs 50k but increased token length by ~1.8×, slowing inference from 120 ms to 240 ms per request.  
  - *Cost & Scalability*: Larger vocab inflated model size (from 4 GB to 9 GB), raising S3 storage and EFS I/O costs by ~30% and increasing Lambda memory requirements (128 MB → 512 MB).  
  - *Availability*: We introduced a fallback cache in DynamoDB for high‑frequency tokens, cutting cold‑start latency by 35%.  

**Result**  
We settled on a 100k vocab: perplexity drop of 7%, inference latency 150 ms (≤ SLA), and total cost savings of $18K/month compared to the 200k option. The model achieved an F1 score of 0.87 on live traffic, up 4% from baseline.

**Bar‑raiser Takeaway**  
Demonstrated true ownership by owning end‑to‑end experiments, diving deep into tokenization impact, quantifying trade‑offs with real metrics, and learning that a mid‑range vocab often delivers the best balance for production AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
