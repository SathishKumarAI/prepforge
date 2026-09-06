---
qid: ing_b3ac91367c__think__local
question: 'Explain: Static vs. Dynamic Batching — Batching Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 476
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:51:26-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   - *Goal*: Understand why we batch in inference and how static vs dynamic differ.  
   - *Assumptions*: The reader knows what a “batch” is (group of inputs processed together) but may not know batching strategies or performance trade‑offs.

**2️⃣ Adopt a mental model: “Throughput vs. Latency”**  
   - View each strategy as a point on the latency–throughput spectrum.  
   - Static batching fixes batch size ahead of time → high throughput, fixed latency.  
   - Dynamic batching adapts to real‑time traffic → lower average latency, variable throughput.

**3️⃣ Step‑by‑step reasoning**  
   1. **Define batching**: combining multiple requests into one tensor pass.  
   2. **Explain static batching**: pre‑allocate a fixed-size buffer; when it’s full, run inference; if inputs are fewer, pad or wait → predictable latency but idle compute.  
   3. **Explain dynamic batching**: collect incoming requests until either a time limit or size threshold is met, then invoke the model once; uses queues and timers → lower tail latency at cost of occasional smaller batches.  
   4. **Contrast key metrics**: average latency, worst‑case latency, GPU utilization, memory footprint.  
   5. **Mention implementation patterns**: thread pools, event loops, async I/O for dynamic batching.

**4️⃣ Common pitfalls to avoid**  
   - Confusing “batch size” with “number of requests”.  
   - Assuming dynamic batching always outperforms static; it depends on traffic patterns.  
   - Ignoring padding overhead in static batching.  
   - Over‑optimizing latency at the expense of throughput when traffic is low.

**5️⃣ Sanity check & verbal communication**  
   - Verify that both strategies are presented as trade‑offs, not alternatives.  
   - Use a concrete example (e.g., image classification service) to illustrate how each strategy behaves under bursty vs steady load.  
   - Summarize: *Static batching = high throughput, fixed latency; dynamic batching = flexible latency, adaptive throughput.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
