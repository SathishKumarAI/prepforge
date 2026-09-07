---
qid: ing_d6671fa6d3__faang__local
question: 'Explain: You have two days in our codebase and no assigned task. What do
  you build, and how do you spend the time? (The work-trial meta-question.)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 399
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:57:50-05:00'
sources: []
---

**Clarify**  
I’d first confirm the goal: *“Build something useful in two days that showcases my engineering mindset.”* I’ll assume we have a sizeable codebase, a CI pipeline, and access to a test environment. I’ll also ask if there are any high‑impact bugs or performance issues already flagged.

**Approach**  
1. **Audit the repo** – run static analysis (e.g., SonarQube) and look for duplicated logic or flaky tests.  
2. **Pick a small, repeatable problem** – e.g., an API endpoint that returns stale data because of caching bugs.  
3. **Design a lightweight feature** – add a “refresh‑now” flag to the cache layer and expose it via a health‑check route.  
4. **Implement, test, ship** – write unit tests (≥90% coverage), integration tests in staging, then merge into main.

**Depth**  
- *Implementation*: Add a `CacheService.refresh(key)` method; expose `/api/cache/refresh?key=…` with auth.  
- *Complexity*: O(1) per request; no change to existing caching logic.  
- *Trade‑offs*: Exposing internal ops over HTTP risks abuse; mitigated by API key and rate limiting.

**Edge Cases**  
- Non‑existent keys → 404;  
- Concurrent refreshes → idempotent lock;  
- Production traffic spikes → throttling.

**Optimize & Communicate**  
After shipping, I’d add a dashboard widget to monitor cache hit ratios. I’ll document the change in the PR and present a brief demo to the team, highlighting how this small tweak can surface stale‑data bugs early. This shows initiative, deep understanding of the codebase, and a clear focus on reliability—qualities FAANG interviewers prize.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
