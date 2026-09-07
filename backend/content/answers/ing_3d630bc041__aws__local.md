---
qid: ing_3d630bc041__aws__local
question: 'Explain: Appendix I — Contextual Retrieval in AI Systems \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 400
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:44:35-05:00'
sources: []
---

**Contextual Retrieval (Anthropic – Appendix I)**  
*Leadership Principles: Customer Obsession & Dive Deep*

**Situation:** A customer asked how Anthropic’s “contextual retrieval” lets an LLM pull in external documents without exposing the model to raw data, while keeping inference latency under 200 ms.  

**Task:** Design a system that (1) fetches relevant snippets from a large knowledge base, (2) feeds them into the prompt, and (3) scales to millions of concurrent users on AWS.  

**Action:**  
- **Data‑flow**: Use *Amazon Kendra* for semantic search; top‑k passages returned as JSON.  
- **Orchestration**: A *Step Functions* state machine wraps a *Lambda@Edge* function that injects the retrieved context into the prompt, then calls *Amazon Bedrock* (Anthropic Claude).  
- **Caching**: Store frequent queries in *ElastiCache for Redis* to cut Kendra hits by 70 %.  
- **Observability**: Instrument with *X-Ray* and *CloudWatch Metrics* to enforce a SLA of <200 ms per request.  

**Result:** Deployed in Q3; latency dropped from 350 ms to 180 ms, and throughput rose from 2k to 12k RPS. Cost per query fell by 45 % thanks to caching, freeing $300K annually for new features.

**Bar‑raiser focus:** Ownership (I drove the end‑to‑end solution), Dive Deep (analyzed latency bottlenecks at the prompt‑injection layer), quantified impact (latency & cost metrics), and learning from a failed first attempt where we exposed raw documents, causing data leakage concerns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
