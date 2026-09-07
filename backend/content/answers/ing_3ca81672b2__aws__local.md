---
qid: ing_3ca81672b2__aws__local
question: 'Explain: Hybrid search & fusion — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 598
total_tokens: 827
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:43:06-05:00'
sources: []
---

**Hybrid Search & Fusion – RAG + Retrieval**

**Situation (S)**  
I led the migration of a legacy customer‑support chatbot into an *AI‑powered retrieval‑augmented generation* (RAG) system for a global SaaS firm. The goal was to cut manual triage time by 60 % while keeping answer quality above 90 % precision.

**Task (T)**  
Design a hybrid search pipeline that fuses vector embeddings with keyword‑based retrieval, feeds the combined context into a large language model, and exposes it through a low‑latency API. I had to guarantee **99.9 % availability**, <200 ms response time for 95 % of requests, and ≤$0.02 per query.

**Action (A)**  
1. **Data Layer** – Indexed 2 M support articles in **Amazon OpenSearch Service** with a hybrid “searchable field” (full text) + “embedding field” (10‑dim dense vector from Amazon SageMaker).  
2. **Retrieval Engine** – Implemented a two‑stage pipeline:  
   *Stage 1:* Keyword search (OpenSearch query + filters).  
   *Stage 2:* Cosine similarity on top‑k vectors using OpenSearch’s `script_score`.  
3. **Fusion Layer** – Created a lightweight Lambda@Edge function that concatenates the top 5 documents, scores them by relevance, and sends the payload to **Amazon Bedrock (Claude 3)** for RAG generation.  
4. **Observability & Scaling** – Added CloudWatch metrics (`search_latency`, `lambda_invocation_error`), auto‑scaling OpenSearch domain with Warmers, and an SQS queue to buffer bursts.  

**Result (R)**  
- Reduced triage time from 45 min → 17 min per ticket (62 % cut).  
- Precision remained at 92 %.  
- Cost per query dropped from $0.07 to $0.015, staying under the budget target.  
- Uptime hit **99.95 %** over a 3‑month pilot.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Directly measured impact on support agent productivity and customer wait times.  
- **Ownership & Dive Deep** – Took full responsibility for data modeling, infrastructure, and performance tuning; iterated on the hybrid scoring logic after observing initial precision dips.  

### What a Bar‑Raiser Listens For
- **Quantified Impact**: Clear metrics (time savings, cost, accuracy).  
- **Depth**: Explanation of OpenSearch hybrid query mechanics, Lambda fusion strategy, and trade‑offs between vector size vs latency.  
- **Learning from Failure**: Mentioned early precision issues and how re‑ranking improved results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
