---
qid: ing_0e6dff131a__star__local
question: 'Explain: Prompt caching — Agentic Engineering - by Neo Kim and Paul Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 319
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:57:32-05:00'
sources: []
---

**Situation**  
During a client‑facing project for a fintech startup, we had to deliver real‑time risk scoring using an LLM. The model was called every second, but the response latency kept rising as the conversation context grew; our SLA required <150 ms per request.

**Task**  
Reduce inference time while preserving accuracy, so the system could handle 10k concurrent users without exceeding budget limits on GPU usage.

**Action**  
I introduced *prompt caching*—an Agentic Engineering technique from Neo Kim and Paul Hoekstra. I built a lightweight key‑value store keyed by user session ID plus a hash of the last few prompts. When a request arrived, the agent first checked the cache for a pre‑generated continuation. If found, it served that snippet directly; if not, it forwarded the prompt to the LLM and stored the result in the cache with a TTL of 30 s. I also implemented a policy to evict stale entries and used a Bloom filter to avoid unnecessary lookups.

**Result**  
Latency dropped from an average of 280 ms to 110 ms, and GPU utilization fell by ~35 %, cutting inference costs by roughly $3k per month. The approach also reduced the number of token requests, improving overall throughput. I learned that a simple caching layer can be as powerful as complex model distillation when applied with careful eviction strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
