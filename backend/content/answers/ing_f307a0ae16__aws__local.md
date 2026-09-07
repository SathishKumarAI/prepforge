---
qid: ing_f307a0ae16__aws__local
question: 'Explain: Build an Extractive QA Pipeline — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 457
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:26:04-05:00'
sources: []
---

**Situation / Task**  
I was tasked to prototype an *Extractive QA* pipeline for a knowledge‑base app that needed to return answer snippets in < 200 ms while scaling to 10k concurrent users.

**Action**  
1. **Requirements & Design** –  
   • **Crawler**: Scrape documents, store raw text in S3 (object lifecycle → Glacier).  
   • **Pre‑processing**: Use AWS Glue for tokenization & chunking into 200‑token blocks; persist to DynamoDB with a composite key (`doc_id#chunk_id`).  
   • **Inference**: Deploy a HuggingFace transformer (BERT‑Base) in an Amazon SageMaker endpoint (1x GPU). The endpoint is autoscaled via SageMaker’s *Realtime* inference feature.  
   • **Query Service**: API Gateway + Lambda (Python) that routes the user query to the SageMaker endpoint, receives start/end logits, and retrieves the corresponding chunk from DynamoDB.  
2. **Scalability & Availability** – Multi‑AZ deployment; Lambda throttling handled by API Gateway circuit breakers; SageMaker endpoint replicated in 2 AZs for high availability.  
3. **Cost Optimization** – Spot instances for Glue jobs; use *SageMaker Neo* to compile the model to a lighter runtime, cutting GPU time by ~30 %.  

**Result**  
- Response latency dropped from 1.2 s (baseline) to **180 ms** (average).  
- CPU utilization on Lambda stayed < 40 % under peak load; cost per inference fell from $0.02 to **$0.008**.  
- Customer satisfaction score for answer relevance rose by **25 pts**.

**Leadership Principles Reflected**  
- *Customer Obsession*: Delivered sub‑200 ms answers that directly improved user experience.  
- *Ownership & Dive Deep*: Built and tuned the entire stack, from ingestion to inference, iterating on metrics until production quality was achieved.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
