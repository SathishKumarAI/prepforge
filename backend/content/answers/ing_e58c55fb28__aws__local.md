---
qid: ing_e58c55fb28__aws__local
question: 'Q: You deployed a RAG system and users report that answers are sometimes
  wrong. How do you systematically diagnose and fix the problem?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 392
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:57:02-05:00'
sources: []
---

**Situation**  
I led the rollout of a Retrieval‑Augmented Generation (RAG) chatbot for our enterprise knowledge base. Within two weeks users flagged that 18 % of answers contained factual errors or irrelevant context.

**Task**  
Reduce the error rate to <5 % while keeping latency under 1 s and cost per query <$0.01.

**Action**  
1. **Dive Deep + Customer Obsession** – instrumented every stage (retrieval, embedding, generation) with CloudWatch metrics and added a “confidence score” to each answer.  
2. **Ownership & Bias for Action** – created an automated pipeline in SageMaker Pipelines that retrains the retrieval index weekly on newly ingested documents stored in S3.  
3. **Invent & Simplify** – replaced the monolithic Lambda with a step‑function orchestrated Fargate task, allowing parallel scoring and fallback to a simpler TF-IDF model when confidence <0.7.  
4. **Data‑driven Result** – after two iterations the factual‑accuracy metric dropped from 82 % to 95 %, latency remained 850 ms, and monthly cost fell by 12 % due to reduced Lambda invocations.

**Result**  
User satisfaction scores rose from 3.8/5 to 4.6/5 (NPS +45). The system now meets SLAs with a clear rollback path if new data skews accuracy.  

*Bar‑raiser cues*: I showed full ownership, deep diagnostics, quantified impact, and iterative learning from failures—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
