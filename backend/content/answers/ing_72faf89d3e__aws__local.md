---
qid: ing_72faf89d3e__aws__local
question: Everyone focuses on retrieval algorithms - what's actually the hardest part
  of building RAG over enterprise documents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 388
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:45:36-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team that built a Retrieval‑Augmented Generation (RAG) system for a Fortune 500 legal firm, the board asked why document indexing was *not* the hardest part.

**Action**  
I framed the problem as **“data quality + context preservation”** and mapped it to Amazon’s **Ownership** and **Dive Deep** principles.  
1. **Data ingestion pipeline** – built on AWS Glue + Lake Formation to enforce schema, dedupe, and redact PII (compliance‑grade).  
2. **Semantic indexing** – used Amazon SageMaker with a fine‑tuned Sentence‑Transformers model, stored embeddings in an ElasticSearch domain (managed via OpenSearch Service) for sub‑millisecond retrieval.  
3. **Contextual grounding** – wrapped the LLM call in a Lambda layer that injects the top‑N ranked documents, limiting token usage to 4 k and ensuring we stay under the 10 ms inference latency target.  
4. **Monitoring & retraining loop** – CloudWatch metrics + SageMaker Model Monitor detected drift; every 7 days an automated retrain ran with a 15 % hit‑rate improvement on user queries.

**Result**  
Within three months, end‑users reported a **32 % reduction in time to answer complex queries**, and the system handled 12× more concurrent sessions without SLA degradation.  

**Bar‑raiser cues** – I demonstrated ownership (end‑to‑end pipeline), depth (architecture choices & trade‑offs), quantified impact (metrics above), and learning from a failed pilot that ignored context, which taught us to embed retrieval logic directly into the prompt.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
