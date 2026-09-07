---
qid: ing_664b35872f__aws__local
question: 'Explain: Pattern: Self-RAG — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 431
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:16:19-05:00'
sources: []
---

**Self‑RAG (Self‑Retrieval Augmented Generation)**  
*Leadership Principles: Customer Obsession & Dive Deep*

**S – Situation**  
I led a cross‑functional team to deliver a knowledge‑base chatbot for our e‑commerce platform, where 40 % of support tickets were “information” requests that slowed agents by 12 min per ticket.

**T – Task**  
Design an AI solution that pulls the most relevant internal documents on‑the‑fly and generates accurate answers without external APIs, ensuring GDPR compliance and zero data leakage.

**A – Action**  
1. **Data Layer** – Ingested 200 GB of product docs into a *DocumentDB* cluster, vectorized with *Amazon SageMaker* (sentence‑transformers).  
2. **Retrieval Service** – Built an *AWS Lambda* microservice that queries the nearest vectors via *OpenSearch* (real‑time latency <50 ms).  
3. **Generation Layer** – Deployed a fine‑tuned *PaLM‑Lite* model on *Amazon SageMaker Edge*; the Lambda feeds retrieved snippets into the prompt, returning a concise answer.  
4. **Security & Cost** – Used *AWS Secrets Manager* for API keys, enabled *S3 Object Lock* to enforce GDPR retention, and autoscaled Lambdas to keep costs <$0.02 per request.

**R – Result**  
- Ticket resolution time dropped from 12 min to 2 min (80 % reduction).  
- Agent productivity rose by 25 %.  
- Monthly cost saved: $18K vs a hosted LLM solution.  

**Learnings**  
Iterated on vector dimensionality; initial 256‑dim vectors caused noisy matches, so I introduced cosine‑threshold tuning—illustrating *bias for action* and *ownership* in continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
