---
qid: ing_592d15c639__faang__local
question: 'Explain: Q116: Design cost-aware multi-provider routing for June 2026 prices:
  Fable 5 at $10/$50, Opus 4.8 at $5/$25, GPT-5.5 at $5/$30, Sonnet 4.6 at $3/$15,
  DeepSeek V4 Flash at $0.14/$0.28.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 300
output_tokens: 547
total_tokens: 847
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:11:11-05:00'
sources: []
---

**Clarify**  
We need a routing layer that picks the cheapest provider for a given request while respecting per‑token limits and ensuring reliability.  
Assumptions:  
* Each provider offers two plans – “Standard” (higher cost, higher throughput) and “Low‑Latency” (cheaper, slower).  
* Prices are per 1k tokens (June 2026).  
* Requests come with a required latency window and an optional max budget.  

**Approach**  
1. **Cost model** – compute *cost_per_token* for both plans of each provider.  
2. **Eligibility filter** – discard providers that cannot meet the latency requirement or exceed the budget.  
3. **Ranking** – sort remaining options by cost, then by latency as a tiebreaker.  
4. **Dispatch** – send the request to the top candidate; fall back sequentially if it fails.

**Depth**  
| Provider | Standard ($/1k) | Low‑Latency ($/1k) | Latency (ms) | Cost per token |
|----------|-----------------|--------------------|--------------|----------------|
| Fable 5  | 10              | 50                 | 250          | 0.01 / 0.05    |
| Opus 4.8 | 5               | 25                 | 180          | 0.005/0.025    |
| GPT‑5.5  | 5               | 30                 | 200          | 0.005/0.03     |
| Sonnet 4.6|3               |15                  | 150          | 0.003/0.015    |
| DeepSeek V4 Flash|0.14   |0.28                | 80           | 0.00014/0.00028|

The algorithm runs in **O(n log n)** (n = providers) for sorting, constant space.

**Edge Cases**  
* All providers exceed budget → return “No suitable provider.”  
* Multiple providers share identical cost → pick the one with lowest latency.  
* Provider outage → trigger fallback chain; log and update health metrics.

**Optimize & Communicate**  
We can cache the sorted list for a short window (e.g., 1 s) to avoid recomputation on burst traffic. Expose an API endpoint `/route` that returns `{provider, plan}`; document latency guarantees. This design balances cost efficiency with SLA compliance and is easy to extend when new providers appear.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
