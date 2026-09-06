---
qid: ing_1dc3ce1b89__think__local
question: LLM APIs are slow, expensive, and flaky. How does your retry strategy differ
  from retrying a normal REST dependency?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 536
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:40:41-05:00'
sources: []
---

**1. Clarify the problem & set assumptions**  
   - Understand what “slow, expensive, flaky” means for LLM calls (high latency, high cost per token, occasional time‑outs).  
   - Assume we’re calling a commercial LLM API that bills per token and may return HTTP 429 or 5xx.  
   - Clarify the goal: minimize cost while keeping request success probability acceptable.

**2. Mental model / framework**  
   - Treat each LLM call as a *rate‑limited, high‑cost transaction* rather than a cheap REST hit.  
   - Use an *exponential backoff with jitter* + *adaptive throttling* that respects the API’s rate limits and billing granularity.

**3. Step‑by‑step reasoning toward a strategy**  
   1. Detect failure types: network errors → retry; HTTP 429 (rate‑limit) → wait until reset; expensive token usage → consider request size.  
   2. Apply exponential backoff (e.g., 0.5 s, 1 s, 2 s…) capped at a max delay, adding jitter to avoid thundering herd.  
   3. Keep track of cumulative cost per request; if cost > threshold, abort or switch to a cheaper model.  
   4. For persistent failures, implement circuit‑breaker logic: after N consecutive failures, pause all LLM calls for a cooldown period.  
   5. Log each retry attempt with cost and latency so we can tune thresholds.

**4. Common traps & wrong turns**  
   - *Retrying blindly*: increases cost linearly; never consider aborting when cost explodes.  
   - *Ignoring rate‑limit headers*: leads to repeated 429s and wasted time.  
   - *Fixed retry intervals*: cause synchronized retries (“thundering herd”) across clients.  
   - *Not accounting for token limits*: longer prompts trigger higher costs; better to trim or chunk.

**5. Sanity‑check & communicate**  
   - Verify that the total cost after N retries is still below a business‑acceptable ceiling.  
   - Explain to stakeholders: “We retry only on transient errors, with backoff and jitter, and we abort if cost exceeds X tokens.”  
   - Share metrics: success rate vs. average latency vs. average cost per request, showing the trade‑offs clearly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
