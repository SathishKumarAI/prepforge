---
qid: ing_e82eaf0306__aws__local
question: 'Explain: Evaluating RAG Pipelines — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 482
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:03:25-05:00'
sources: []
---

**Situation & Task**  
In my last role I was asked to benchmark several RAG (Retrieval‑Augmented Generation) pipelines built with Haystack so that we could decide which model delivered the best trade‑off between relevance and latency for our customer support chatbot. The goal was a 30 % faster response time while keeping F1 ≥ 0.78 on a held‑out query set.

**Action (Technical)**  
I architected an end‑to‑end pipeline in **AWS**:  
- **S3** stores the indexed documents; **Amazon SageMaker endpoints** host the retriever and generator models; **Lambda + Step Functions** orchestrate the request flow; **Amazon CloudWatch** logs latency.  
- I wrote a data‑driven evaluation script that sent 10 k queries, captured retrieval scores (BM25), generation perplexity, and end‑to‑end response time.  
- For scalability I used **SageMaker Neo** to compile models for inference on **Graviton2**, cutting CPU cost by ~35 %.  
- Availability was ensured with a **multi‑AZ deployment** of SageMaker endpoints (auto‑scaling based on CloudWatch alarms).  

**Result**  
The benchmark showed the Dense Passage Retrieval + GPT‑3.5 Turbo stack achieved 0.81 F1 and reduced latency from 1.2 s to 0.8 s—a **33 % speedup**—while keeping costs down by $1,200/month compared to our baseline.

**Reflection (Leadership)**  
*Customer Obsession*: I prioritized real user queries over synthetic tests.  
*Ownership & Dive Deep*: I dug into CloudWatch metrics to pinpoint bottlenecks and iterated until the SLA was met.  
The bar‑raiser would look for this quantified impact, depth of analysis, and a clear learning loop: we will now roll out the chosen stack globally and monitor drift with an automated retraining pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
