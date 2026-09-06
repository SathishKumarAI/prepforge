---
qid: ing_c7a1c57673__fp__local
question: 'Explain: Solving the “thundering herd” problem — Under the hood: Broadcasting
  live video to millions - Engineering at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 435
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:05:41-05:00'
sources: []
---

### The Thundering Herd in Live‑Video Distribution

When a live stream begins, every subscriber’s client simultaneously requests the same data packets from a server.  
If each request spawns an independent thread or process, the server is flooded with millions of concurrent connections—*the thundering herd*.  This defeats scalability because the operating system must wake and schedule all those threads even though only one packet needs to be served.

**Why a single‑stream solution works**

1. **Deterministic data flow**  
   The stream’s bitrate is fixed (e.g., 3 Mbps). The server can therefore pre‑allocate a *single* buffer of that size and write to it once per frame, rather than once per client.

2. **Hardware‑level multicast**  
   Modern NICs support *multicast hashing*: the kernel duplicates a packet only to the set of sockets that have joined a particular multicast group.  The OS does this in hardware, not by spinning millions of user threads.

3. **Queueing theory**  
   By reducing the service time per client from O(1) to O(1/clients), the system’s utilization \(U = \lambda W\) stays below one, keeping queues bounded (Little’s Law).  The queue length no longer grows linearly with user count.

4. **Energy and cost**  
   Fewer context switches mean less CPU time per byte delivered, cutting power consumption by an order of magnitude—critical for a data‑center scale service.

**Non‑obvious insight:**  
The bottleneck is *not* the bandwidth but the *per‑client bookkeeping*.  By moving from per‑connection state to a global multicast buffer and leveraging NIC offload, we convert a linear‑time problem into a constant‑time one.  This principle—centralizing shared data and delegating duplication to hardware—underlies many high‑scale streaming systems beyond Meta’s own architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
