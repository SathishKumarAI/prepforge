---
qid: ing_cf865b5e39__aws__local
question: Your agent's context window fills up mid-task. What are your options?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 453
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:10:03-05:00'
sources: []
---

**Situation / Task**  
While building a conversational AI for our customer‑support bot, the LLM’s 4 k‑token context window overflowed after ~2 min of dialogue, causing the assistant to lose prior intent and produce incoherent replies. I needed an on‑premises, cost‑effective fix that kept latency <200 ms.

**Action**  
1. **Chunk & Summarize** – Implemented a Lambda pipeline that splits the transcript into 512‑token chunks, runs them through a lightweight summarizer (BERT) and stores the condensed vectors in an Amazon DynamoDB table with TTL.  
2. **Retrieval‑Augmented Generation** – At each turn, a SageMaker endpoint queries the vector store via cosine similarity; only the top‑3 summaries are fed back to the LLM as “context tokens.”  
3. **Scalability & Cost** – The Lambda function scales by concurrency, DynamoDB’s on‑demand mode keeps costs $0.25/1 M writes, and SageMaker inference is spot‑tuned (GPU p3.2xlarge) to stay <$0.12/hr per instance.

**Result**  
*Context loss dropped from 35% → <5%.  
Customer satisfaction scores rose by **13 points** (NPS +7).  
Operational cost decreased by **$1,200/month** versus a full‑scale GPU cluster.*

**Reflection**  
- *Ownership*: I took end‑to‑end responsibility for the bot’s reliability.  
- *Dive Deep*: Analyzed token usage patterns to design the summarizer.  
- *Learned*: The initial naive approach of truncating was wrong; preserving semantics via embeddings proved critical.

> **Bar‑raiser check** – Demonstrated ownership, deep technical dive, quantifiable impact, and iterative learning from a failed prototype.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
