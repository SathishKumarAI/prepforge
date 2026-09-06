---
qid: ing_dc4acb1069__fp__local
question: 'Explain: Capacity Planning System Design — Back of the Envelope - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 493
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:47:35-05:00'
sources: []
---

**Capacity‑Planning “Back‑of‑the‑Envelope” for a ML Serving System**

1. **Fundamental problem** – We must guarantee that the *expected* latency (say 95 % percentile) never exceeds \(L_{\max}\) while keeping cost minimal.  
2. **Model the workload** – Let \(R\) be requests per second, \(S\) average CPU‑seconds per inference, and \(C\) cores available. The *utilization* is \(\rho = R\,S/C\).  
   - If \(\rho < 1\), the system can handle traffic; if \(\rho > 1\), queues grow exponentially (Little’s law).  
3. **Latency constraint** – For an M/M/1 queue, \(E[T] = S/(1-\rho)\). Setting \(E[T] \le L_{\max}\) gives  
   \[
   C \ge \frac{R\,S}{1 - L_{\max}/S}.
   \]
   This is the *minimum* core count that satisfies the latency target under Poisson arrivals.  
4. **Cost optimization** – Suppose each core costs \(p\). Total cost \(= pC + \text{fixed overhead}\). The above inequality defines a convex region; the optimal point lies on its boundary (adding more cores only raises cost).  
5. **Non‑obvious insight** – **The latency target should be set relative to the *processing time*, not absolute.** If \(S\) doubles, keeping \(L_{\max}\) fixed forces a quadrupling of cores, but if we allow \(L_{\max} = 2S\), only a doubling is required. Thus, design the service‑level agreement in terms of *multiples* of processing time, not hard millisecond limits.

**Bottom line:**  
Compute \(\rho\) from measured \(R,S\); solve for minimal \(C\) to keep \(E[T]\le L_{\max}\). This simple back‑of‑the‑envelope captures the trade‑off between latency guarantees and infrastructure cost, grounded in queueing theory and convex optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
