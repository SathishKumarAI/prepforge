---
qid: ing_d7f9585c86__aws__local
question: 'Explain: Adaptive Retrieval — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 581
total_tokens: 809
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:28:02-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the launch of a production‑grade Retrieval‑Augmented Generation (RAG) service that powers an enterprise knowledge portal. The goal was to deliver real‑time answers from a 500 GB document corpus while keeping latency <200 ms and cost <$0.001 per request.

**Action**  
1. **Architecture** – Built a serverless pipeline with AWS Step Functions orchestrating Lambda functions, SageMaker endpoints (for embedding generation), and Bedrock for LLM inference.  
2. **Indexing & Retrieval** – Used DynamoDB Global Secondary Indexes to store embeddings; refreshed them nightly via EventBridge‑triggered Glue jobs that re‑embed new documents. For sub‑ms vector similarity search I leveraged Amazon OpenSearch Service (vector plugin) with a shard‑per‑node strategy, ensuring 99.9 % availability.  
3. **Scalability & Cost** – Employed Lambda provisioned concurrency for peak traffic and Spot Instances for batch embedding jobs; set up S3 Intelligent Tiering to hold raw docs at $0.003/GB‑month. Auto‑scaling of OpenSearch clusters was driven by CloudWatch alarms (CPU >70 % → add node).  
4. **Monitoring & Reliability** – Integrated CloudWatch dashboards, X-Ray tracing, and automated rollback via Lambda version aliases.

**Result**  
- Reduced average latency from 650 ms to 180 ms (3× faster).  
- Cut per‑request cost by 70 % ($0.00035 → $0.00010).  
- Achieved 99.97 % uptime over a year, with zero SLA breaches.  

**Learning & Ownership**  
I continuously iterated on the embedding strategy after an early failure where cosine similarity drifted; I introduced a “re‑ranking” step that improved answer relevance scores by 12 %. This deep dive into data quality and model tuning exemplifies *Ownership* and *Dive Deep*.  

---

### Bar‑raiser cues
- **Ownership**: Took full responsibility for architecture, cost, and uptime.  
- **Dive Deep**: Diagnosed similarity drift, engineered re‑ranking, validated with A/B tests.  
- **Quantified Impact**: 3× latency win, 70 % cost reduction, 99.97 % availability.  
- **Learning from Failure**: Turned a cosine drift issue into a product improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
