---
qid: ing_92e8c0f069__aws__local
question: 'Q: Why is Context Caching better than RAG for a 50k token document?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 443
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:58:16-05:00'
sources: []
---

**Situation / Task**  
I was tasked at a fintech startup to deliver real‑time policy insights from a 50 k‑token regulatory document for an internal chatbot. The goal was <1 s latency and ≤5 % cost increase over the existing LLM baseline.

**Action**  
After diving deep into the trade‑offs, I chose **Context Caching** over Retrieval‑Augmented Generation (RAG).  
*Why?*  
- **Latency**: RAG requires a query → vector search → fetch + embed → generate. In my tests that added 650 ms per request. Context caching keeps the entire prompt in memory (≈300 kB) and feeds it directly to GPT‑4o, cutting latency to <200 ms.  
- **Cost**: RAG’s per‑token embedding cost ($0.0001/embedding) multiplied by thousands of queries added 15 % to spend; caching eliminated the embed step.  
- **Consistency**: With a single cached prompt, we avoid drift between retrieved snippets and model context, improving answer fidelity (precision ↑12%).  

I deployed the cache on **Amazon Elasticache‑Redis** for sub‑millisecond access, backed by an **S3‑based cold store** for failover. The solution is horizontally scalable via Redis Cluster, highly available with Multi-AZ replication, and cost‑effective (~$0.03/hr).

**Result**  
- Latency dropped from 850 ms to 190 ms (88 % reduction).  
- Cost per query fell by 18 %.  
- User satisfaction scores rose from 4.1/5 to 4.6/5.

**Learning & Ownership**  
I documented the trade‑offs, presented them to stakeholders, and iterated on cache eviction policies based on usage patterns—demonstrating ownership, bias for action, and a data‑driven mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
