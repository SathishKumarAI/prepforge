---
qid: ing_8868243c82__faang__local
question: 'Explain: Traffic Funnel and Read QPS — Airbnb System Design - by Neo Kim
  and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 513
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:01:25-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise explanation of how *Airbnb* models traffic with a **funnel** (entry → processing → output) and why the **Read QPS (queries‑per‑second)** metric matters in that context. I’ll assume you want to understand: 1) what a funnel looks like, 2) how read QPS is measured, and 3) why it’s critical for scaling.

**Approach**  
1. Define the funnel stages.  
2. Explain read QPS calculation per stage.  
3. Discuss its impact on capacity planning and latency.  
4. Highlight trade‑offs (caching vs. freshness).  

**Depth**  
- **Funnel**: *Entry* (user hits search), *Processing* (matching & scoring), *Output* (display results). Each stage can throttle traffic; the bottleneck determines overall throughput.  
- **Read QPS**: Count of read‑only service calls per second that deliver data to clients (e.g., listing lookups, availability checks). It is measured by instrumentation (Prometheus counters) and aggregated over sliding windows.  
- **Why it matters**: High read QPS stresses database replicas, cache layers, and network I/O. Airbnb uses *read‑replica sharding* and a CDN for static assets to keep per‑second load within SLA. A sudden spike in read QPS can cause cache misses → DB hits → increased latency or throttling.  
- **Trade‑offs**: Aggressive caching reduces read QPS but risks stale data; stricter consistency increases DB load.

**Edge Cases**  
- *Flash sales* or *holidays* produce bursty QPS spikes—test with synthetic traffic and observe cache warm‑up times.  
- *Data partitioning failures* can mislead QPS metrics if counters are not properly namespaced.  

**Optimize & Communicate**  
To improve, add adaptive rate‑limiting: when read QPS > 70 % of capacity, temporarily serve from a read‑only cache or throttle lower‑priority requests. In interviews, explain that this keeps latency bounded while preserving throughput for critical paths. Summarize the logic in a diagram and quantify expected savings (e.g., “reducing DB hits by 30 % cuts tail latency from 350 ms to 200 ms”).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
