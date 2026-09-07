---
qid: ing_7b6d5eaf08__faang__local
question: How do you load test an LLM service so the numbers actually mean something?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 480
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:31:12-05:00'
sources: []
---

**Clarify**  
We’re asked how to load‑test a large language model (LLM) API so that throughput and latency figures are meaningful for real users. I’ll assume:  
1. The service exposes an HTTP endpoint that accepts a prompt and returns text.  
2. Requests are stateless, but the backend may warm up or cache embeddings.  
3. Clients vary in request size (prompt length) and response expectations.

**Approach**  
1. **Define realistic traffic patterns** – mix short/long prompts, varying batch sizes, and time‑of‑day spikes.  
2. **Measure key metrics** – latency percentiles (P50/P90/P99), throughput (QPS), CPU/GPU utilisation, memory, and error rates.  
3. **Instrument the backend** – capture per‑token generation times to separate prompt parsing from decoding.  
4. **Use a distributed load generator** (e.g., k6, Locust) with time‑based ramps to mimic production peaks.  
5. **Validate results** – compare against a baseline (single‑request, no caching) and ensure consistency across runs.

**Depth**  
- Build synthetic workloads that reflect actual prompt distributions; use historical logs if available.  
- For each request, log token count, start/end timestamps, and any cache hits/misses.  
- Compute throughput as `total_tokens / total_time` to capture token‑level performance.  
- Complexity: O(N) over requests for metrics; storage overhead is linear in traffic volume.

**Edge Cases**  
- Extremely long prompts may hit memory limits → test overflow handling.  
- Sudden burst loads can trigger rate limiting or queueing – verify backpressure logic.  
- Model warm‑up latency differs from steady state; ensure warm‑up phase is excluded from averages.

**Optimize & Communicate**  
Present findings with clear visualizations (latency histograms, token‑rate curves). Highlight bottlenecks: GPU idle time vs CPU parsing overhead. Recommend scaling strategies (horizontal autoscaling for stateless workers, caching embeddings) and iterate tests after changes to confirm improvements. This structured pipeline ensures that reported numbers truly reflect user experience and guide reliable capacity planning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
