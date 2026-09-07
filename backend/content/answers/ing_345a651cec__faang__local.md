---
qid: ing_345a651cec__faang__local
question: 'Explain: Adapter swap budget and the noisy-neighbor problem'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 428
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:45:57-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how an *adapter‑swap budget* can help mitigate the *noisy‑neighbor* issue in multi‑tenant AI workloads.  
Assumptions:  
- Multiple models share GPU/CPU resources on a host (e.g., V100s).  
- “Noisy neighbor” means one model’s traffic spikes degrade others’ latency.  
- An adapter is a lightweight plug‑in that can swap the underlying compute graph or kernel without redeploying the whole service.

**2️⃣ Approach**  
1. Define a budget: number of adapters we may swap per unit time (e.g., 5 swaps/min).  
2. Monitor performance metrics per tenant.  
3. When a tenant’s latency crosses a threshold, trigger an adapter swap to a pre‑optimized kernel or a more isolated hardware path.  
4. Roll back when traffic normalizes.

**3️⃣ Depth**  
- *Adapter Swap*: Implemented as a dynamic module loader; the runtime replaces the compute graph at runtime with minimal state transfer (weights are shared).  
- *Budget enforcement*: Token bucket algorithm limits swap frequency, preventing oscillation.  
- *Impact on noisy neighbors*: By isolating high‑traffic tenants to dedicated adapters or hardware slices, we reduce interference for others.  
- Complexity: O(1) per swap; overhead of adapter load ≈ 2 ms, negligible relative to batch latency.

**4️⃣ Edge Cases**  
- Rapid traffic bursts may exhaust the budget → fallback to throttling.  
- Adapter incompatibility (e.g., new kernel requires newer driver).  
- Persistent high‑load tenants never hit budget → consider capacity scaling.

**5️⃣ Optimize & Communicate**  
Future work: predictive budgeting using ML on historical load, and adaptive thresholds per tenant. I’d explain the trade‑off between isolation overhead and throughput, emphasizing that a bounded swap policy keeps system stable while still providing responsiveness to noisy neighbors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
