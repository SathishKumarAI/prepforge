---
qid: ing_cf774cadac__star__local
question: 'Explain: Planner-Based Tool Selection — The Complete Guide to Tool Selection
  in AI Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 380
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:24:01-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we were building an AI‑powered customer support bot that needed to pull data from three internal services (CRM, billing, and ticketing). The bot had to decide which service to query first based on the user’s request context, but our initial prototype always hit CRM first, causing latency spikes during peak hours.

**Task**  
I was tasked with designing a planner‑based tool selection system that dynamically chooses the optimal sequence of API calls, reducing average response time while ensuring data consistency and respecting rate limits.

**Action**  
I started by modeling each service as a “tool” with cost (latency), benefit (information value), and constraints (rate limit). Using a lightweight planning library (Python’s `pydantic` for schema validation + a custom A* search), I built a state‑space that encoded the current request, tool availability, and remaining quota. The planner evaluated all feasible permutations up to depth 3, scoring them with a weighted utility function:  
- Latency penalty = 0.5 × ms  
- Rate‑limit risk = 2 × (remaining calls / threshold)  
- Data completeness bonus = +1 per unique field retrieved  

The planner returned the top sequence; I integrated it into the bot’s middleware so each request was routed through the chosen tool chain.

**Result**  
After deployment, average response time dropped from 1.8 s to 0.9 s (50% reduction). We also cut CRM API calls by 35%, easing load during traffic spikes. The exercise taught me how to formalize tool selection as a planning problem and balance performance with operational constraints in real‑world AI agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
