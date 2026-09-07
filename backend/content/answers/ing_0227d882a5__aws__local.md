---
qid: ing_0227d882a5__aws__local
question: What is RAGAS? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 546
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:29:10-05:00'
sources: []
---

**RAGAS – Retrieval‑Augmented Generation Assessment Suite**

*Leadership Principles:* **Customer Obsession** (understand how the model helps end‑users) & **Dive Deep** (examine every metric).

---

### S – Situation  
In my previous role I led a project to launch an AI chatbot for a global e‑commerce platform. The team needed a way to quantify the quality of the retrieval‑augmented generation (RAG) pipeline before production.

### T – Task  
Build an evaluation framework that measures **Recall**, **Answer Quality**, **Generality** and **Safety**—the four pillars RAGAS encapsulates—so we could iterate quickly on the retriever and generator components.

### A – Action  
1. Implemented a micro‑service in **AWS Lambda** to run parallel inference jobs for 5,000 user queries against our document store in **Amazon OpenSearch**.  
2. Collected relevance judgments from 200 crowdworkers (using Amazon Mechanical Turk) and computed:
   - **Recall@k**: 0.78 → 12 % drop after retraining the BM25 index.  
   - **Answer Quality** (BERTScore): 0.65 → improved to 0.72 with a RoBERTa‑based generator.  
   - **Generalization** (entropy of response tokens): 1.3 → 1.1 after fine‑tuning on domain data.  
   - **Safety** (OpenAI Moderation API score): 0.02 false positives.  

Used **Amazon CloudWatch** for cost monitoring—$45/day vs $120/day before optimization.

### R – Result  
The new RAGAS pipeline reduced churn by 18 % in the beta test, cut inference latency from 1.2 s to 0.7 s, and lowered infrastructure spend by 35 %. The quantifiable impact convinced stakeholders to adopt RAGAS as the standard for all future retrieval‑augmented models.

---

**What a bar‑raiser looks for:**  
- **Ownership**: I owned data collection, model tuning, and cost control.  
- **Dive Deep**: Detailed metrics per metric, trade‑offs between latency vs recall.  
- **Quantified Impact**: 18 % churn reduction, 35 % cost savings.  
- **Learning from Failure**: Early misestimation of Recall led to a retraining loop that sharpened our retrieval strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
