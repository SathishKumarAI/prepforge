---
qid: ing_dd3bf1e51e__eli5__local
question: 'Build a rate limiter. Every ten minutes I''ll add a requirement: per-tenant
  limits, burst allowances, then a sliding window. How do you keep your code from
  collapsing?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 296
total_tokens: 478
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:24:36-05:00'
sources: []
---

Think of the rate limiter as a **traffic light at a busy intersection**.  
At first, it only stops cars that arrive too fast (the “10‑minute bucket”).  
When you add **per‑tenant limits**, imagine each driver has a personal ticket that tells the light how many times they’re allowed to pass in a period—so the light treats each lane separately.  

Adding **burst allowances** is like giving a special “green‑light boost” to a driver who just started moving; the light lets them go a few extra cars quickly, but only if they still stay within their overall quota.  

Finally, the **sliding window** turns the traffic light into one that constantly checks the last 10 minutes of cars, not just whole blocks—so it smoothly adjusts to bursts instead of freezing when a new block starts.

Keep your code from collapsing by building each layer on top of a clear, reusable module:  
1. Base bucket logic (time‑based).  
2. Tenant wrapper that keeps separate counters.  
3. Burst module that temporarily increases allowance.  
4. Sliding window engine that re‑evaluates the counts as time moves.

By treating each feature like an independent traffic rule and composing them, your limiter stays organized, easy to test, and resilient when new requirements arrive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
