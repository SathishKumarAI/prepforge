---
qid: ing_6a98d17399__faang__local
question: 'Explain: An enterprise customer reports that responses from your deployed
  system have gotten slow. Walk me through the diagnosis.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 626
total_tokens: 870
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:52:01-05:00'
sources: []
---

**Clarify**

> *Problem*: Enterprise client says response latency has increased after deployment.  
> **Assumptions to confirm**:  
> • Which endpoint/API is affected?  
> • Is the slowdown consistent or intermittent?  
> • Are there concurrent user spikes, new features, or data‑volume changes?  
> • What SLA are we targeting (e.g., 200 ms, 500 ms)?

---

**Approach**

1. **Metric collection** – gather request latency, error rates, queue depth, CPU/CPU‑core usage, memory, GPU utilization, and network I/O from Prometheus/Kafka logs for the last 24 h.  
2. **Baseline comparison** – compare current metrics to pre‑deployment baselines or to a healthy “golden” period.  
3. **Trace analysis** – use distributed tracing (OpenTelemetry) to locate the slowest span(s).  
4. **Resource profiling** – run a profiler on the inference container; check for CPU stalls, GC pauses, or GPU kernel wait times.  
5. **Model & data audit** – verify that the model size hasn’t increased and that input tensors are still the expected shape/size.

---

**Depth**

- If the bottleneck is *inference*, a likely culprit is **GPU memory pressure** leading to paging or a kernel queue backlog; solution: increase GPU count, use mixed‑precision, or shard the model.  
- If the bottleneck is *I/O*, high disk latency in loading embeddings or large batch buffers can slow things; cache frequently used data or move to SSDs.  
- For *CPU* stalls, check for contention on shared resources (e.g., thread pool exhaustion); tune `max_workers` or split workloads across nodes.  
- If tracing shows a spike after a recent code change, roll back that commit and run a canary test.

---

**Edge Cases**

| Edge | What breaks it | Test |
|------|----------------|------|
| Sudden traffic surge | Queue depth > capacity | Simulate load with locust |
| Model drift → larger tensors | Increased memory per request | Run inference on dummy batch of size 10× original |
| GPU driver mismatch | Kernel failures | Verify driver version against CUDA toolkit |

---

**Optimize & Communicate**

1. **Prioritize fixes**: address the highest‑impact bottleneck first (e.g., GPU paging).  
2. **Iterate with metrics**: after each change, re‑run the diagnostic pipeline and confirm SLA restoration.  
3. **Document** the root cause, fix applied, and monitoring thresholds so future incidents are caught early.  

By structuring the diagnosis—clarifying scope, planning diagnostics, diving into technical depth, anticipating edge cases, and iteratively optimizing—we demonstrate a methodical, data‑driven approach that aligns with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
