---
qid: ing_a742452886__aws__local
question: 'Explain: Red flags interviewers watch for — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 457
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:44:47-05:00'
sources: []
---

**Situation / Task**  
During a senior‑level AI interview I was asked to explain the red flags interviewers look for when evaluating RAG (Retrieval‑Augmented Generation) systems.

**Action**  
I framed my response around two AWS Leadership Principles: **Customer Obsession** and **Dive Deep**.  

1. **Data quality & bias** – If the retrieval corpus is stale or contains biased content, the generated answers will mislead users. I’d audit the crawl logs, compute coverage metrics (e.g., *recall@k* over a test set) and flag any drop below 90 %.  
2. **Latency vs freshness trade‑off** – A naive cache can give instant responses but may serve outdated facts. I’d recommend a hybrid architecture: an S3‑based cold store, a DynamoDB hot index for recent docs, and an Elasticache Redis layer to keep the top‑k vectors in memory.  
3. **Model drift** – Periodic evaluation of the LLM’s output against ground truth (e.g., BLEU/ROUGE scores) is essential; any decline triggers retraining.  

I outlined AWS services: **S3, DynamoDB, Elasticache, SageMaker**, and **Lambda** for nightly re‑indexing. I highlighted cost trade‑offs—keeping vectors in Redis costs ~$0.00013 per GB‑hour versus $0.023 per GB‑month in S3—and emphasized that the chosen design supports 99.9 % availability with multi‑AZ replication.

**Result**  
In a prior project, applying these checks reduced hallucination incidents by **32 %** and cut query latency from 750 ms to 350 ms while keeping storage costs under $200/month.  

---

> **Bar‑raiser cues**:  
> • Demonstrated ownership by proposing a measurable monitoring framework.  
> • Showed depth with concrete AWS service choices and trade‑off analysis.  
> • Quantified impact (32 % error reduction, 350 ms latency).  
> • Learned from failure—identified that earlier deployments suffered from stale indices, prompting the hybrid cache strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
