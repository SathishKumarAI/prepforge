---
qid: ing_fef910fb72__faang__local
question: 'Explain: Calculating Throughput — Latency vs Throughput vs Bandwidth |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 646
total_tokens: 887
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:33:01-05:00'
sources: []
---

**Clarify**  
We need to explain how a system designer would reason about *latency*, *throughput*, and *bandwidth* when sizing or optimizing a machine‑learning pipeline (e.g., inference service). I’ll assume the question targets an online ML inference scenario, but the same concepts apply to batch training.

---

### Approach  
1. **Define each metric** in context.  
2. **Show how they interrelate** mathematically.  
3. **Illustrate a practical design decision** (e.g., batching vs single‑request).  
4. **Mention tooling/measurement** that informs the trade‑offs.

---

### Depth  

| Metric | Definition | Typical Measurement |
|--------|------------|---------------------|
| **Latency** | End‑to‑end time for one request (client → model → response). | `t_response – t_request`. |
| **Throughput** | Number of requests processed per second. | `N / total_time`. |
| **Bandwidth** | Data rate the network can carry, often expressed in MB/s or Gbps. | Network interface stats (`iperf`, NIC counters). |

Mathematically:  
`throughput = 1 / average_latency` (when no batching).  
When batching \(B\) requests together, latency ≈ `latency_single + overhead(B)` while throughput ≈ `B / latency_batch`. Bandwidth limits both; if the model sends/receives 10 MB per inference and the NIC is 1 Gbps (~125 MB/s), maximum throughput ≈ 12.5 req/s.

**Design decision:**  
- *Low‑latency* use small batch size (even 1).  
- *High‑throughput* aggregate requests until network bandwidth saturates; compute cost per inference is amortized over the batch, but latency rises linearly with batch size.  

---

### Edge Cases  

| Scenario | Impact | Test |
|----------|--------|------|
| Network congestion | Latency spikes, throughput drops | Simulate packet loss / variable MTU |
| Model memory limits | Batching too large causes OOM | Stress‑test with increasing batch sizes |
| Asynchronous inference | Latency may be lower but throughput limited by queue | Measure per‑request completion time vs queued requests |

---

### Optimize & Communicate  

- **Profile**: Use `perf`, TensorBoard, or custom middleware to capture per‑stage latencies.  
- **Auto‑batching**: Dynamically adjust batch size based on real‑time latency SLA and observed bandwidth.  
- **Explain trade‑offs**: “Increasing batch size reduces compute cost per request but adds 2 ms of latency per extra sample; if our SLA is 50 ms, we cap batches at 20.”

By structuring the answer this way—clarifying assumptions, mapping metrics to equations, considering practical constraints, and anticipating edge cases—we demonstrate a systematic, engineer‑centric mindset that FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
