---
qid: ing_708e19648d__think__local
question: 'Explain: Common Failure Modes — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 467
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:27:07-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - *What is “availability” in this context?* Assume it means uptime or readiness of an AI‑driven service (e.g., a chatbot, recommendation engine).  
   - *Which “failure modes” are relevant?* Focus on those that surface when design choices compromise availability: single points of failure, data pipeline bottlenecks, model drift, resource exhaustion, and external dependencies.  
   - *Audience level:* Presume readers know basic system‑design terms but may not be AI specialists.

**2. Adopt a layered mental model**  
   - **Infrastructure layer** (hardware, networking) → **Runtime layer** (containers, orchestration) → **Data & model layer** → **Application layer**.  
   - Map failure modes to layers: e.g., “cold start” at runtime, “model degradation” at data/model.

**3. Step‑by‑step reasoning**  
   1. Enumerate each layer and its typical bottlenecks.  
   2. For each bottleneck, list concrete failure scenarios (e.g., a single GPU causing a compute stall).  
   3. Explain why the scenario hurts availability (latency spikes, total outage).  
   4. Suggest mitigations (auto‑scaling, model caching, fallback models).

**4. Avoid common traps**  
   - Don’t conflate *performance* with *availability*. A fast but flaky system still fails.  
   - Resist over‑engineering: adding redundancy can introduce its own failure modes if not managed.  
   - Beware of “black‑box” AI pitfalls—model drift may look like a code bug until data pipelines are inspected.

**5. Sanity‑check & communicate**  
   - Verify each failure mode actually reduces uptime, not just accuracy.  
   - Use real‑world analogies (e.g., traffic lights for load balancers) to ground abstract concepts.  
   - End with a concise checklist: “Redundancy?” “Graceful degradation?” “Monitoring?” so the reader can audit their own design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
