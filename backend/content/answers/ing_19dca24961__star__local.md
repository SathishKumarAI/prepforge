---
qid: ing_19dca24961__star__local
question: 'Explain: Tier-selection table — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 332
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:21:09-05:00'
sources: []
---

**Situation**  
In a recent NLP project we were building a conversational agent that had to remember user preferences across sessions while keeping the overall model size under 300 MB for deployment on edge devices.

**Task**  
I was tasked with designing a tier‑selection table that mapped different memory and state requirements to appropriate storage tiers (in‑memory cache, local disk, or cloud sync) without compromising response latency or accuracy.

**Action**  
First I profiled the agent’s token usage per turn, identifying which user attributes were high‑frequency (e.g., language preference) versus low‑frequency (e.g., conversation history). Using these metrics I created a tier table:  
- **Tier A (in‑memory)** for real‑time tokens that needed <5 ms latency.  
- **Tier B (SSD cache)** for medium‑size context windows (~200 tokens) with <20 ms latency.  
- **Tier C (cloud sync)** for rarely accessed long‑term state, refreshed asynchronously.  
I implemented a lightweight lookup service in Go that dynamically promoted or demoted entries based on access patterns, and used Redis for Tier A storage to keep CPU usage low.

**Result**  
The new tier system reduced average response time from 48 ms to 18 ms while keeping total memory footprint at 260 MB. User satisfaction scores rose by 12% in post‑deployment surveys. I learned that a data‑driven, multi‑tier strategy can reconcile strict latency budgets with limited device resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
