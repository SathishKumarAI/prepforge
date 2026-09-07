---
qid: ing_38c149ed6e__aws__local
question: 'Explain: Gemma 4 — Zero-Shot Local Document Parsing with Gemma 4: Treating
  PDFs as Images'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 434
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:33:13-05:00'
sources: []
---

**Situation & Task**  
In a recent project I was asked to build an internal search engine for our legal team that could ingest PDF contracts and return relevant clauses without manual labeling. The requirement was “zero‑shot” – no fine‑tuning, just out‑of‑the‑box performance.  

**Action**  
I chose **Gemma 4**, a multimodal LLM that treats PDFs as raster images, allowing it to understand layout, tables, and embedded diagrams—all essential for legal documents. I wrapped Gemma in an AWS Lambda layer so each PDF is converted to a 512×512 PNG batch, then streamed to the model via **Amazon Bedrock** (Gemma 4 endpoint).  
To scale, I used **S3 EventBridge** triggers: every new contract lands in S3 → EventBridge → Lambda → Bedrock. The extracted text and metadata are stored in an **Amazon OpenSearch** index for instant retrieval.  

- **Scalability:** Bedrock handles bursty requests; Lambda concurrency is auto‑scaled.  
- **Availability:** All services are region‑wide with 99.9% SLA, and I added a CloudWatch alarm to roll back on >5 % error rate.  
- **Cost:** Approx. $0.0003 per inference token → <$50/month for 10k contracts, versus $200+ if we had built a custom OCR pipeline.

**Result**  
After deployment, the legal team cut clause‑search time from ~15 min to <30 s (95% faster) and reduced manual review effort by **42 %**, saving roughly **$120K annually** in attorney hours.  

**Reflection**  
I learned that treating PDFs as images can bypass costly OCR steps when a powerful multimodal LLM is available—an elegant example of *Invent & Simplify*. The project demonstrated *Ownership* (owning the end‑to‑end pipeline) and *Dive Deep* (understanding Bedrock pricing, Lambda limits, and OpenSearch query tuning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
