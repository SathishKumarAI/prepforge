---
qid: ing_ec54c72e53__think__local
question: 'Explain: A customer''s LLM endpoint p99 latency jumped from 2s to 20s this
  week. No code changes on their side. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 509
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:37:33-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- *What exactly changed?* The customer reports a jump in p99 latency from ~2 s to ~20 s, no code changes on their side. Assume: same endpoint, same traffic volume, same infrastructure, same region.  
- *Ask for logs:* request recent metric snapshots (CPU, memory, network I/O), any infra‑level alerts, and whether the customer scaled resources or changed load balancers.  

**2️⃣ Adopt a layered mental model**  
1. **Infrastructure layer** – hardware, networking, VM/Container health.  
2. **Runtime layer** – LLM container, GPU utilization, memory pressure.  
3. **Model & data layer** – tokenization, context length, cache hits/misses.  
4. **External factors** – traffic spikes, concurrent users, third‑party services.  

**3️⃣ Step‑by‑step reasoning**  
- *Check infra metrics:* high CPU or memory saturation can cause GC pauses → latency spike.  
- *Inspect network path:* packet loss or increased MTU fragmentation leads to retransmissions.  
- *Look at container restarts/evictions:* a crash loop could force cold starts for some requests.  
- *Review model cache:* if the LLM lost its in‑memory embeddings (e.g., due to eviction), each request may recompute expensive operations, inflating latency.  
- *Analyze traffic patterns:* sudden surge or new long‑context queries can push p99 higher without affecting mean.  
- *Validate data path:* verify that the tokenizer isn’t getting stuck on malformed input; a single bad token could trigger a fallback to slower code paths.  

**4️⃣ Common traps**  
- Assuming “no code change” means no config change – hyper‑parameters or batch sizes might have been tweaked automatically.  
- Blaming only one layer (e.g., GPU) without checking others can miss the root cause.  
- Relying solely on p99; check mean and distribution for context.  

**5️⃣ Sanity‑check & communicate**  
- Summarize findings in a short diagram: metrics → suspected layer → evidence → next step.  
- Propose quick mitigations (e.g., increase GPU memory, adjust batch size) while deeper investigation continues.  
- Keep the customer informed of each diagnostic phase and expected timelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
