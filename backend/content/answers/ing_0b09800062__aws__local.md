---
qid: ing_0b09800062__aws__local
question: 'Q: How do you prevent hallucination in a production RAG system?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 388
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:50:49-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the launch of an enterprise‑grade Retrieval‑Augmented Generation (RAG) chatbot for a Fortune 500 finance client. The product had to deliver 99.9 % factual accuracy under a 2 s latency SLA, while operating at millions of queries per day.

**Action**  
* **Ownership & Dive Deep:** I first built a “Hallucination Monitor” that logged every model‑generated answer, cross‑checked it against the indexed source documents, and computed an *accuracy score*. Using this data we found a 12 % hallucination rate on the initial release.  
* **Bias for Action & Invent & Simplify:** I introduced a lightweight “Relevance Filter” – a dual‑encoder similarity step that only forwards passages with cosine similarity > 0.85 to the LLM, and a *confidence threshold* (top‑k probability > 0.7) before final answer generation.  
* **AWS Services & Scalability:** The pipeline runs on **Amazon SageMaker Endpoint** for inference, **Amazon Kendra** for vector search, and **Lambda** for the filter logic. We added an autoscaling policy tied to CloudWatch metrics (latency + hallucination rate).  
* **Result:** After deployment, hallucinations dropped from 12 % to < 1 %, latency remained at 1.8 s, and we saved ~$120k/month in compute by reducing unnecessary LLM calls.

**Reflection**  
I learned that a hybrid approach—combining retrieval quality checks with model‑level confidence scoring—is essential for production AI safety. The system now self‑monitors and automatically throttles risky queries, embodying true customer obsession.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
