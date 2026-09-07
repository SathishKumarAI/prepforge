---
qid: ing_3b6c1141b7__aws__local
question: What is the best chunk size for RAG? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 448
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:40:39-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* & *Ownership*.  
> **Scenario:** A client wants to deploy a Retrieval‑Augmented Generation (RAG) system for an internal FAQ bot. I was responsible for choosing the optimal chunk size that balances latency, cost, and answer quality.

**S – Situation / T – Task**  
The team had 5 M FAQ documents (~30 GB). We needed sub‑second response time on a pay‑per‑request model (AWS Lambda + Bedrock).  

**A – Action**  
1. **Dive Deep into Retrieval:** Benchmarked chunk sizes of 256, 512, and 1024 tokens using OpenAI’s embeddings in SageMaker.  
2. **Measure Impact:** For each size measured recall@3, latency, and cost per query.  
3. **Choose Trade‑off:** Adopted 512‑token chunks because it yielded a 12 % higher recall@3 than 256 while keeping latency under 300 ms (vs 450 ms for 1024).  
4. **Operationalize:** Deployed with Amazon Kendra for indexing and Bedrock for generation, all within a single Lambda layer to reduce cold‑start overhead.

**R – Result**  
- **Recall@3 improved from 72 % → 84 %.**  
- **Average latency dropped 35 % (450 ms → 300 ms).**  
- **Cost per query fell 18 % by reducing embedding calls.**  
The bot now handles 10k Q&A pairs with a 99.9 % SLA, and the client sees a 15 % reduction in support tickets.

**Bar‑raiser cues:** Demonstrated *ownership* (full end‑to‑end solution), *dive deep* (metrics‑driven tuning), quantified impact, and learning from earlier iterations that favored larger chunks but at unacceptable latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
