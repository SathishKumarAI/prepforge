---
qid: ing_32f8e08005__faang__local
question: 'Explain: Custom MCP Integration — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 448
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:43:07-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of how to integrate **Claude** (OpenAI‑style LLM) into a **Multi‑Tenant Cloud Platform (MCP)** so that each tenant can invoke the model via a custom endpoint.  
Assumptions:  
- We have an API gateway exposing per‑tenant REST endpoints.  
- The MCP already manages authentication, billing, and rate limits.  
- Claude is accessed through a third‑party SDK or HTTP client.

**Approach**  
1. **Tenant context extraction** – pull tenant ID from the request header or JWT.  
2. **Parameter mapping** – translate generic user prompt into Claude’s payload (model name, temperature).  
3. **Request routing** – forward to Claude’s endpoint with an API key scoped per tenant (or a shared key if isolation isn’t required).  
4. **Response normalization** – strip metadata, return only the text.  
5. **Audit & billing hook** – record tokens used for each tenant and trigger quota enforcement.

**Depth**  
- Use async HTTP client (`aiohttp`/`httpx`) to avoid blocking.  
- Cache frequent prompts with an LRU cache keyed by `(tenant_id, prompt_hash)`; TTL = 10 min.  
- Handle Claude’s 429 by exponential back‑off and retry up to 3 times.  
- Complexity: O(1) per request plus O(log n) for cache lookup; memory ~O(k) where k is cache size.

**Edge Cases**  
- Invalid tenant ID → 401.  
- Missing API key → 503.  
- Prompt exceeding token limit → truncate and return error.  
- Network partition → fallback to local LLM or queue request.

**Optimize & Communicate**  
Explain trade‑offs: per‑tenant keys increase security but add latency; shared key simplifies rotation but risks cross‑tenant data leakage. Emphasize monitoring: track latency, error rates, token consumption. Conclude by noting that this pattern scales horizontally—new tenants only need configuration changes, not code modifications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
