---
qid: ing_b18f529244__aws__local
question: 'Explain: Likely interviewer follow-ups — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 613
total_tokens: 842
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:06:27-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“Semantic Search is a vector‑based retrieval system that maps text to high‑dimensional embeddings so the engine understands intent rather than just keyword matches.”*  
> **Likely follow‑ups:**  
> • “How do you build the embedding pipeline?”  
> • “What trade‑offs did you face between latency and accuracy?”  
> • “Which AWS services would you pick and why?”

---

### STAR (Customer Obsession + Deliver Results)

**S** – In my last role, our internal knowledge base had a 15 % click‑through rate on FAQ searches.  
**T** – I was tasked to redesign it into a semantic search engine that could surface the right answer in <200 ms for 10k concurrent users.  
**A** – I built an end‑to‑end pipeline:  
1. **Data prep:** Extracted ~2M docs from S3, deduped with Amazon Athena.  
2. **Embeddings:** Trained a Sentence‑Transformers model on SageMaker; deployed it as a real‑time inference endpoint (100 ms latency).  
3. **Indexing & Retrieval:** Indexed vectors in **Amazon Kendra** (pay‑per‑search) and backed up with an OpenSearch cluster for fallback.  
4. **API layer:** Lambda + API Gateway to route queries, cache top 1k results in ElastiCache Redis.  
5. **Monitoring:** CloudWatch dashboards; A/B tested against legacy keyword search.

**R** – Post‑launch, click‑through rose from 15 % to **38 %** (a 153 % lift), while latency stayed <200 ms and cost per query dropped 18 %.  

---

### Technical Deep Dive

| Requirement | AWS Service | Reasoning |
|-------------|-------------|-----------|
| Embedding inference | SageMaker endpoint | Auto‑scaling, low L1 cache latency |
| Vector similarity search | Amazon Kendra + OpenSearch | Managed indexing; fallback for high availability |
| API & caching | Lambda + ElastiCache Redis | Serverless, pay‑per‑invocation, 99.99 % SLA |
| Cost control | S3 storage tiering, spot instances | Minimize compute spend while meeting SLAs |

**Bar‑raiser focus:**  
- Ownership: I owned the entire pipeline from data ingestion to user metrics.  
- Dive Deep: I benchmarked embedding models and tuned inference latency.  
- Quantified Impact: 38 % CTR lift and cost savings.  
- Learning: Initial misstep with naive vector search caused 300 ms lag; pivoted to Kendra + cache, demonstrating rapid iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
