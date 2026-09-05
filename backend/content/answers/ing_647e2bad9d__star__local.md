---
qid: ing_647e2bad9d__star__local
question: 'Explain: Internal agents — TypeScript AI Framework for Agents and Apps
  | Mastra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 340
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:48:37-05:00'
sources: []
---

**Situation**  
When my team was building a real‑time analytics dashboard for our ad‑tech platform, we hit a bottleneck: the front‑end had to fetch, process, and render data from three disparate APIs (Google Ads, Facebook, internal billing) every 30 seconds. A single monolithic service was too slow and hard to scale.

**Task**  
I needed to decouple the data ingestion pipeline into independent, reusable units that could run concurrently, cache results, and expose a simple interface for the UI without locking the main event loop.

**Action**  
Using Mastra’s TypeScript AI Framework I designed *Internal Agents*—small, stateless classes that encapsulate each API call, implement a lightweight LLM prompt to normalize payloads, and cache responses in Redis with a 30‑second TTL. Each agent exposes an async `run()` method; the orchestrator calls them via Promise.all, aggregates their outputs, and feeds the result into a Next.js page. I also added a “watchdog” agent that monitors latency and automatically scales worker instances on Kubernetes.

**Result**  
The dashboard’s load time dropped from 12 s to 3 s, and API call errors fell by 85%. The modular agents made it trivial to add a new data source in two days. I learned how AI‑driven orchestration can replace heavyweight microservices when the logic is mostly deterministic and can be expressed as stateless prompts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
