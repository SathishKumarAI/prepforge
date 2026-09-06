---
qid: ing_7e79e10a50__fp__local
question: 'Explain: Your LLM endpoint''s p99 latency doubled after a deploy. The model
  weights didn''t change. Walk me through your debugging.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 619
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:34:37-05:00'
sources: []
---

**Why latency spikes when the *weights* stay constant**

The inference pipeline is a deterministic function of input and architecture; if weights are unchanged, any performance change must come from **external resources or scheduling**—CPU/GPU contention, memory bandwidth, I/O, or network jitter.  
Treat each layer as an *optimization problem*: compute‑time = ∑ f_i(resource_state). A sudden increase in \(p_{99}\) indicates that the resource state has changed for a non‑negligible fraction of requests.

---

### 1. Instrument **every** boundary

| Boundary | Metric | Why it matters |
|----------|--------|----------------|
| Network ingress | RTT, packet loss | Latency can inflate before hitting the server. |
| Load balancer | Queue depth, request rate | A surge forces longer wait‑times. |
| Container runtime | CPU shares, cgroups | Oversubscription drags performance. |
| GPU / accelerator | Memory bandwidth, context switch time | Kernel launch overhead grows with contention. |
| Disk / swap | I/O latency | Unmapped tensors spill to disk. |

Collect histograms (not just averages) to spot the tail.

---

### 2. Correlate events

*Plot \(p_{99}\) vs. each metric over the same time window.*  
If a sharp rise in queue depth precedes the spike, the bottleneck is at the LB; if GPU memory‑bandwidth spikes, it’s the accelerator.

Use **distributed tracing** (e.g., OpenTelemetry) to see where requests pause inside the pipeline.

---

### 3. Validate assumptions

- Re‑run a batch of identical inputs on a *fresh* node; if latency drops back, the issue is environment‑specific.
- Swap in an older or newer GPU driver; sometimes a regression in the kernel scheduler inflates context switches.
- Temporarily reduce request rate; if \(p_{99}\) normalises, you’ve hit a capacity boundary.

---

### 4. Deep insight: *Tail latency ≠ mean latency*

Even with constant weights, a **small fraction of requests** can be slowed by transient resource spikes (e.g., background garbage‑collection or a nightly backup). The tail is governed by the *worst‑case* path through the system, not the average load. Hence, monitoring only the 50th percentile will miss the culprit.

---

### 5. Fix

- Scale out horizontally or increase per‑node resources.
- Pin GPU memory allocations to avoid paging.
- Tune the LB algorithm (e.g., round‑robin vs least‑connections) to flatten queue tails.

**Bottom line:** The weights are a *constant*; latency is a function of **resource scheduling**. By treating each boundary as an optimization sub‑problem and measuring its state, you can pinpoint where the tail is being stretched—and fix it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
