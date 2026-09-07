---
qid: ing_a87f80983b__aws__local
question: 'Explain: Fusion Method Comparison — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 376
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:47:49-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked with improving the relevance of our internal knowledge‑base search. Users complained that pure keyword or pure semantic ranking either returned too many irrelevant hits or missed critical documents. The goal: reduce “click‑through” friction by 30 % and increase user satisfaction scores.

**Action**  
I led a cross‑functional team to build a **Hybrid Search** pipeline—combining Elasticsearch’s BM25 (keyword) with OpenSearch’s dense vector similarity (semantic).  
1. **Data prep**: Indexed documents in S3, generated embeddings via SageMaker Endpoint (BERT‑base) and stored vectors in an OpenSearch index.  
2. **Query flow**: User query first hits the keyword engine; top 50 results are re‑ranked by cosine similarity against the semantic vector set.  
3. **Infrastructure**: Deployed both engines on EC2 Auto Scaling groups behind ALB, used CloudWatch for latency metrics, and leveraged DynamoDB to cache frequent queries.

**Result**  
Within two weeks of rollout, click‑through rates rose from 42 % to 68 % (a 62 % lift), and the NPS score climbed by 12 points. Cost per query dropped 18 % due to efficient vector caching.

**Reflection & Learning**  
I applied *Customer Obsession*—iterating until metrics matched user intent—and *Dive Deep*, uncovering that stale embeddings were the root cause of semantic drift. I documented lessons in a post‑mortem, which became our team’s “fail fast” playbook for future AI projects.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
