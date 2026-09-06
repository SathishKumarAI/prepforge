---
qid: ing_1650b68c72__think__local
question: 'Explain: Design a multi-provider LLM gateway: routing, fallbacks, and the
  pitfalls teams hit.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 406
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:12:49-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
- *What is “multi‑provider”*: different LLM APIs (OpenAI, Anthropic, Azure, etc.) or multiple versions of the same provider?  
- *Use cases*: latency‑critical inference vs. cost‑sensitive batch jobs.  
- *Constraints*: authentication flows, rate limits, data privacy, compliance.

**2. Adopt a routing framework**  
- Model the gateway as a **policy engine + executor**: policies decide which provider to hit based on context (prompt length, required model, SLA).  
- Use **feature flags or weight tables** for gradual rollout; keep a fallback queue.

**3. Step‑by‑step reasoning**  
1. *Input → Context extraction* (size, intent, compliance tags).  
2. *Policy lookup*: check provider availability, cost, latency budgets.  
3. *Select primary provider*.  
4. *Send request & await response*.  
5. If timeout/error → *fallback chain* (next best provider).  
6. Aggregate metrics, log decision path, and expose to monitoring.

**4. Common pitfalls to avoid**  
- **Hard‑coded priorities** that never shift after a provider outage.  
- Ignoring **per‑provider limits** → sudden throttling.  
- Mixing *synchronous* and *asynchronous* calls without normalizing latency expectations.  
- Not sanitizing or logging provider‑specific tokens → security gaps.

**5. Sanity‑check & communicate**  
- Run a *mock traffic test* where one provider is force‑failed to ensure fallbacks trigger.  
- Verify that the routing logic can be overridden via an API call for emergencies.  
- Present the flow diagram + failure scenarios in stakeholder demos; ask “what if this provider goes down tomorrow?” to surface hidden assumptions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
