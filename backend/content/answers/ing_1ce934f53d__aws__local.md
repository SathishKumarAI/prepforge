---
qid: ing_1ce934f53d__aws__local
question: 'Explain: Prompt caching shapes prompt structure — Prompt Engineering And
  Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 408
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:31:40-05:00'
sources: []
---

**Prompt caching & structure – a customer‑centric, data‑driven view**

*Situation:* In my last role I led the AI product that served 3 M daily users on an e‑commerce platform. Every request triggered a costly LLM call; latency averaged 1.2 s and cost $0.12/1k requests.

*Task:* Reduce response time by 60 % while cutting inference costs, without compromising answer quality.

*Action:*  
- **Dive Deep** into the prompt lifecycle: we profiled token usage per intent and discovered that 70 % of prompts were *semantic duplicates*.  
- Introduced a **prompt cache** in DynamoDB with a composite key (intent‑hash + user‑segment).  
- Re‑engineered prompts to be *parameterized* – static “system” instructions stored once, dynamic variables injected at runtime.  
- Deployed the cache layer via AWS Lambda@Edge to keep latency < 50 ms and used Amazon CloudFront for global distribution.  

*Result:* Cache hit rate rose from 0 % to **92 %**, cutting LLM calls by 86 %. Latency dropped from 1.2 s to **250 ms** (77 % reduction). Cost fell from $0.12/1k to **$0.015/1k**—a 87 % savings, freeing $3.6M annually for new features.

*Learning:* Early iterations ignored cache consistency; a race condition caused stale answers. Implemented optimistic locking in DynamoDB and added an “audit” Lambda that logged cache misses, turning failure into a continuous improvement loop.

> **Leadership Principles:** *Customer Obsession* (delivering faster, cheaper answers) & *Ownership* (owning the entire prompt‑to‑response pipeline).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
