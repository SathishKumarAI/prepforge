---
qid: ing_f177960f07__think__local
question: Why do we obsess over P99 latency rather than the average, and what causes
  tail latency in LLM serving specifically?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 452
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:58:30-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
- “Obsess” → industry focus on service‑level agreements (SLAs).  
- Assume we’re talking about *user‑facing* LLM APIs, not internal training loops.  
- Tail latency = 99th percentile or higher; average is mean response time.

**2️⃣ Mental model: Reliability vs. performance**  
- Users notice a single slow request more than the average delay.  
- Service contracts often guarantee “X % of requests under Y ms.”  
- In LLM serving, latency spikes can be caused by resource contention, model size, or I/O bottlenecks.

**3️⃣ Step‑by‑step reasoning**  
1. **Identify metrics that matter to customers** → tail latency.  
2. **Map causes in an LLM stack**:  
   - *Model loading* (disk/SSD),  
   - *GPU/CPU queueing*,  
   - *Batching logic* (small batches → higher per‑token cost),  
   - *I/O to KV stores or embeddings*.  
3. **Quantify impact**: a single high‑latency request can stall the scheduler, causing cascading delays.  
4. **Design mitigation**: pre‑warm caches, use smaller batch sizes for latency‑critical requests, isolate hot slots.

**4️⃣ Common traps**  
- Confusing *average* with *median*: median often hides extreme outliers.  
- Assuming tail latency is only hardware; software scheduling matters too.  
- Ignoring that LLM inference can be *queue‑driven*, not just compute‑bound.

**5️⃣ Sanity‑check & verbalize**  
- Ask: “If I drop one 200 ms request from a 1000‑request batch, how does the overall SLA feel?”  
- Check against real logs: plot percentiles over time; see if spikes align with resource peaks.  
- Communicate that obsessing over P99 is about *user experience* and contractual risk, not just raw throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
