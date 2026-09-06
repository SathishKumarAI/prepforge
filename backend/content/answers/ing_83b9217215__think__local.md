---
qid: ing_83b9217215__think__local
question: 'Q32: How do you handle rate limits and quotas?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 502
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:44:29-05:00'
sources: []
---

**1️⃣ Clarify the context & assumptions**  
   - *What kind of API or service is being used?* (OpenAI, Google Cloud, custom‑hosted model)  
   - *Which limits matter?* (per‑second calls, per‑minute throughput, daily quota, token budget).  
   - *Who are the stakeholders?* (backend team, product owner, end users).

**2️⃣ Adopt a “resource‑budget” mental model**  
   Treat each rate limit as a finite resource pool. Think in terms of “tokens” that must be spent before the next call can be made. Map this to your code: a counter + reset timer.

**3️⃣ Step‑by‑step reasoning**  
   1. **Detect** – Wrap API calls with a wrapper that inspects HTTP status (429, 503) or SDK exceptions.  
   2. **Throttle** – Implement exponential backoff or token‑bucket to pace requests within the allowed window.  
   3. **Prioritize** – Queue high‑value requests; drop or defer low‑priority ones if the queue grows beyond a threshold.  
   4. **Monitor & Alert** – Log remaining quota, hit rates, and trigger alerts when approaching limits.  
   5. **Fallback** – Cache results or serve degraded content (e.g., static embeddings) when quotas are exhausted.

**4️⃣ Avoid common traps**  
   - *Blind retries*: looping without backoff leads to throttling loops.  
   - *Assuming a single global limit*: many services have per‑user, per‑project, and per‑IP limits.  
   - *Ignoring error codes*: treat 429 as recoverable; 403/401 usually mean permanent quota exhaustion.

**5️⃣ Sanity‑check & communicate**  
   - Verify that your backoff schedule respects the provider’s “retry‑after” header or documented policy.  
   - Explain to stakeholders: “We’re using a token bucket that caps us at X requests/minute, with exponential backoff and graceful degradation.”  
   - Show sample logs/metrics to prove limits are respected.

Follow this loop—detect → throttle → prioritize → monitor → fallback—and you’ll keep your AI integration smooth even under strict rate limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
