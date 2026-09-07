---
qid: ing_74b8f8bae8__aws__local
question: How do you handle retrieval in a multi-turn conversation?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 386
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:49:50-05:00'
sources: []
---

**Situation / Task**  
While leading the design of a virtual‑assistant product at my previous company, we needed to support *contextual retrieval* across long user conversations (up to 30 turns) without sacrificing latency or cost.

**Action**  
I drove an end‑to‑end solution that combined **Amazon Kendra** for semantic search with **AWS Lambda + DynamoDB Streams** for state tracking.  
1. Every turn is stored in a *turn‑buffer* table (DynamoDB, TTL 24 h).  
2. A Lambda function aggregates the last N turns and sends a concise prompt to **Amazon Bedrock** (LLM) that returns relevant passages from Kendra indexes.  
3. The LLM’s response, together with the retrieved snippets, is cached in an *in‑memory* layer (ElastiCache Redis) keyed by conversation ID so subsequent turns can skip the search step if the context hasn’t changed.

**Result**  
- **Latency dropped** from 1.2 s to 350 ms on average.  
- **Cost per query** fell by 38 % because we reduced Kendra’s document scans by ~70 %.  
- User satisfaction (NPS) rose from 68 to 82 after the rollout.

**Reflection**  
I owned the trade‑off between freshness and speed, iterated on N‑turn thresholds via A/B tests, and documented lessons in a post‑mortem that became our internal “Retrieval‑as‑a‑Service” playbook.  

> **Leadership Principles:** *Customer Obsession* (improved UX & NPS), *Ownership* (end‑to‑end ownership of the feature), *Dive Deep* (profiling, metrics, and iterative tuning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
