---
qid: ing_6149717184__aws__local
question: 'Explain: Build text-to-image search over 100M product images. Walk me through
  the design.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 469
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:05:32-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional squad at a consumer‑electronics retailer to launch a *text‑to‑image* search for our 100 M catalog. The goal was to reduce bounce rates by 12 % and lift conversion by 8 % within the first quarter.

**Action**  
1. **Feature extraction** – Built a lightweight inference pipeline on Amazon SageMaker using a pre‑trained CLIP model; cached embeddings in an Elasticache Redis cluster (partitioned by SKU).  
2. **Indexing & search** – Deployed an OpenSearch domain with custom cosine similarity scoring. Each document stores the image URL, embedding vector, and metadata.  
3. **API layer** – Created a RESTful service on Amazon API Gateway + Lambda@Edge to translate user queries into embeddings (via SageMaker real‑time endpoint) and query OpenSearch.  
4. **Scalability / Availability** – Leveraged Auto Scaling for OpenSearch nodes, Multi-AZ RDS Aurora for relational metadata, and S3 with CloudFront for image delivery.  
5. **Cost control** – Spot instances for training, on‑demand for inference; used Lambda’s pay‑per‑execution pricing to keep spend <$1 M/yr.

**Result**  
Within 90 days:  
- Search latency dropped from 2.3 s → 0.7 s (95th percentile).  
- Bounce rate fell 14 %, conversion rose 9 %.  
- Operational cost stayed 18 % below budget due to spot savings.

**Learning & Ownership**  
I drove the end‑to‑end architecture, iterated on model accuracy after A/B tests, and documented trade‑offs (embedding size vs. query speed). I also mentored junior engineers in “Dive Deep” by reviewing logs and tuning OpenSearch shards.

> **Bar‑raiser cues:** clear ownership, deep technical dive into CLIP & OpenSearch, quantified ROI, and evidence of learning from early latency spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
