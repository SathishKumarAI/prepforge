---
qid: ing_edc43e96ee__think__local
question: 'Explain: Design a rate limiter for an LLM API where cost scales with tokens,
  not requests.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 465
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:43:42-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- What *rate* means here?  We’re limiting **tokens per second/minute/hour**, not raw calls.  
- Assume we have a token counter per user/API key, a global budget, and a cost‑per‑token model (e.g., $0.002 / 1k tokens).  
- Decide whether to allow bursty traffic or enforce a strict sliding window.

**2️⃣ Choose a mental model / framework**  
- Think of the rate limiter as a *token bucket* that tracks “spent” versus “available” tokens.  
- Map each request’s token usage (prompt + completion) into the bucket, and reject if insufficient balance.  
- For cost‑scaling we can convert cost to an equivalent token budget.

**3️⃣ Step‑by‑step reasoning**  
1. **Measure**: Count total tokens in the incoming request.  
2. **Translate**: Convert that count into a “cost” (e.g., `cost = tokens / 1000 * $0.002`).  
3. **Check budget**: Subtract from user’s remaining budget for the period.  
4. **Accept or reject**: If negative, deny; otherwise deduct and proceed.  
5. **Replenish**: At fixed intervals (hourly), restore users’ budgets based on subscription tier.

**4️⃣ Common traps to avoid**  
- Counting only prompt tokens while ignoring completion tokens → under‑billing.  
- Using a simple “requests per second” counter → ignores variable token sizes.  
- Failing to handle concurrent requests that together exceed the budget.  
- Not persisting state across restarts, leading to budget resets.

**5️⃣ Sanity‑check & communicate**  
- Test edge cases: very large prompts, extremely small completions, burst traffic.  
- Explain to stakeholders how “cost” is converted to a token budget and why we use a bucket model (smooths spikes).  
- Show sample logs: request ID → tokens used → remaining budget → decision.

This structured approach keeps the limiter aligned with cost‑based billing while being robust against variable workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
