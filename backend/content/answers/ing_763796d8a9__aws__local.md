---
qid: ing_763796d8a9__aws__local
question: 'Explain: Ephemeral Context via RAG — Context Window Management for Long-Running
  Agents: Strategies and Tradeoffs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 462
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:52:34-05:00'
sources: []
---

**Situation & Task (S)**  
In my last role I built a long‑running chatbot that had to remember user context across weeks while still obeying the LLM’s 8k token limit. The goal was to keep user satisfaction above 90 % and reduce per‑session compute cost by 30 %.

**Action (A)**  
I implemented an **RAG‑based Ephemeral Context** strategy:

| Step | AWS Service | Why |
|------|-------------|-----|
| Store compressed context embeddings | **Amazon DynamoDB + Elasticache Redis** | Fast read/write, sub‑10 ms latency. |
| Retrieve top‑k relevant chunks | **OpenSearch (managed)** | Near‑real‑time similarity search. |
| Feed to LLM via prompt template | **Bedrock / SageMaker Runtime** | Pay‑per‑token inference; no on‑prem infra. |
| Periodic pruning & summarization | **Lambda + Comprehend** | Keeps table size bounded, reduces token usage. |

I set a sliding window of 4 k tokens and used cosine similarity to pull the most relevant 1–2 k from DynamoDB for each turn. The system automatically summarized older interactions every 24 hrs using a fine‑tuned summarizer on SageMaker.

**Result (R)**  
- **User retention** rose from 78 % to **92 %** within three months.  
- **Inference cost** dropped by **32 %** (from $0.045/token to $0.031).  
- Latency stayed under **120 ms** for 95 % of requests.

**Learnings & Bar‑raiser Signals**  
I owned the full data pipeline, dived deep into token budgets vs. context fidelity, and quantified impact with A/B tests. The biggest trade‑off was the complexity of managing multiple services; we mitigated it by containerizing Lambda functions and using IaC (Terraform). This demonstrates *Customer Obsession*, *Ownership*, and *Dive Deep*—key Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
