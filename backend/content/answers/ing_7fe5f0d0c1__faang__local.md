---
qid: ing_7fe5f0d0c1__faang__local
question: Users ask "how many open orders are blocked on a supplier issue?" Plain
  RAG gets this wrong. Why, and what's the right architecture?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 469
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:42:33-05:00'
sources: []
---

**Clarify**  
The user wants an instant count of *open* purchase‑order lines that are blocked because a supplier cannot deliver. We assume: (1) orders live in a transactional ERP table; (2) “blocked” status is stored per line or derived from related tables; (3) the answer must be near‑real‑time and not rely on ad‑hoc reporting.

**Approach**  
Explain why a Retrieval‑Augmented Generation (RAG) model fails: it queries static knowledge bases or documents that lack live transactional data, so it can’t see current block status. The correct architecture couples a generative model with an up‑to‑date datastore and a query interface to the ERP.

1. **Data layer** – a real‑time OLAP cube or materialized view (`SELECT COUNT(*) FROM OrderLines WHERE Status='Open' AND BlockReason IS NOT NULL`) updated every 5 min.  
2. **Query engine** – expose this via a REST endpoint (e.g., `/api/blocked-orders/count`).  
3. **LLM wrapper** – the LLM parses the user prompt, maps “open orders blocked on a supplier issue” to that endpoint, fetches the count, and formats it in natural language.

**Depth**  
- *Latency*: ~50 ms for API + 20 ms for LLM inference → <100 ms total.  
- *Scalability*: Use caching (Redis) for the count query; refresh on supplier status changes.  
- *Security*: Authenticate API calls, audit logs.  

**Edge Cases**  
- No blocked orders → return “0”.  
- Supplier change triggers a cache invalidation; test that the LLM falls back to stale data only temporarily.  
- If the ERP schema changes (e.g., new block reason), update the view and retrain prompt mapping.

**Optimize & Communicate**  
Highlight trade‑offs: pure RAG offers flexibility but lacks freshness; hybrid architecture gives accuracy with minimal overhead. Explain that the LLM acts as a natural‑language interface, while deterministic data queries ensure correctness—exactly what FAANG teams value in production NLP services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
