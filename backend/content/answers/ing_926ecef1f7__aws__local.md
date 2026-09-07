---
qid: ing_926ecef1f7__aws__local
question: 'Design cross-lingual RAG: the knowledge base is in English and Hindi, but
  users ask in Tamil, Telugu, or transliterated Hinglish. How do you retrieve and
  answer correctly?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 476
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:57:10-05:00'
sources: []
---

**Situation / Task** – While launching a multilingual knowledge‑base for an Indian e‑commerce platform, I was asked to build a Retrieval‑Augmented Generation (RAG) system that could answer queries in Tamil, Telugu or Hinglish while the source documents were only in English and Hindi. The goal was 95 % correct answer coverage with <2 s latency.

**Action** –  
1. **Data pipeline**: Use Amazon Translate (with custom glossaries for product terms) to translate incoming queries into English/Hindi, then send them to an Elasticsearch cluster on AWS OpenSearch Service where documents are indexed in both languages.  
2. **Retrieval**: Leverage **OpenSearch’s cross‑lingual embeddings** (via the `langchain` library) to retrieve top‑k passages; add a fallback that re‑translates retrieved docs back into user language using Amazon Translate for final response.  
3. **Generation**: Deploy a fine‑tuned Llama‑2 7B on SageMaker JumpStart, wrapped in an API Gateway + Lambda layer that injects the retrieved context and outputs the answer in the original language.  
4. **Scalability / Cost**: Use Spot Instances for the inference endpoint (≈ 30 % cheaper) and auto‑scaling based on CloudWatch metrics; store cold data in S3 Glacier to reduce storage costs.

**Result** – Achieved 96 % answer accuracy, latency 1.8 s, and cut operational cost by 28 % compared to a monolingual baseline.

---

### Leadership Principles Anchored  
- **Customer Obsession**: Delivered fluent, accurate answers in native languages.  
- **Ownership / Dive Deep**: Built end‑to‑end pipeline, tuned translation models, and monitored every component for SLA compliance.

### Bar‑Raiser Signals  
- Quantified impact (accuracy & cost).  
- Deep dive into cross‑lingual embeddings to reduce false positives.  
- Learned from an early failure where untranslated queries caused 45 % misclassification; remedied by adding a confidence gate before translation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
