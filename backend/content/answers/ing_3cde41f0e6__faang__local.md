---
qid: ing_3cde41f0e6__faang__local
question: 'Explain: 2.2 Bandwidth Estimates — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 454
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:05:26-05:00'
sources: []
---

**1️⃣ Clarify**  
We need a load balancer that can estimate the *bandwidth* required per backend instance (2.2 Bandwidth Estimates). The goal is to route traffic so that no server is overloaded and overall latency stays low. Key assumptions:  
- Requests arrive as a Poisson stream with known average rate λ.  
- Each request size (bytes) follows a distribution (e.g., log‑normal).  
- Backends expose a health endpoint and can report current utilization.

**2️⃣ Approach**  
1. **Collect metrics** – each backend reports bytes served per second (`bw_in`, `bw_out`) and current CPU/memory usage.  
2. **Compute per‑instance bandwidth estimate** – average over a sliding window (e.g., 30 s) to smooth spikes.  
3. **Predict future load** – use exponential smoothing or a simple AR(1) model on the incoming request rate multiplied by avg payload size.  
4. **Weight routing decisions** – assign a weight inversely proportional to `(current_bw + predicted_increase)` so that lighter servers get more traffic.  

**3️⃣ Depth**  
- Complexity: O(n) per decision epoch (n backends).  
- Latency: Decision time negligible (<1 ms).  
- Trade‑off: Smoothing reduces sensitivity to bursts but may delay reaction to sudden spikes; adaptive window can mitigate this.

**4️⃣ Edge Cases**  
- Sudden traffic surge → predicted bandwidth underestimates; fallback to round‑robin until metrics catch up.  
- Backend reports stale data → use a timeout and treat as offline.  
- Zero requests → avoid division by zero in weight calculation by adding ε.

**5️⃣ Optimize & Communicate**  
- Cache the weighted distribution and update only on significant metric changes.  
- Expose an API for operators to override weights or inject manual scaling signals.  
- Narrate: “We first aggregate real‑time bandwidth metrics, smooth them, predict near‑future load, then bias routing toward underutilized nodes while protecting against stale data.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
