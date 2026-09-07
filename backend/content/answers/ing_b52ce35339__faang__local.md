---
qid: ing_b52ce35339__faang__local
question: 'Explain: Availability Numbers — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 481
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:45:01-05:00'
sources: []
---

**Clarify**  
We’re asked to estimate the *availability* (uptime) a large‑scale ML inference service must achieve, using a “back‑of‑the‑envelope” calculation.  
Assumptions to confirm:  
1. Service receives ~10 M requests/day (~115 req/s).  
2. SLA target is 99.999% (five nines).  
3. Requests are stateless and can be retried locally.

**Approach**  
1. Convert the SLA into a *downtime budget* per year.  
2. Translate downtime into an acceptable failure rate for the system’s components (servers, network, model load).  
3. Verify that the chosen architecture (e.g., micro‑services + autoscaling) can hit that budget.

**Depth**  
- Five nines ≈ 0.00001 downtime → 5 min/year.  
- With 10 M requests/day, we get ~115 req/s → 3.9×10⁸ req/yr.  
- Thus the per‑request failure budget ≈ \( \frac{5\text{ min}}{3.9\times10^8}\approx1.3\times10^{-12}\).  
- For a stateless microservice with 100 instances, each instance must maintain >99.999% uptime (≈4 min/year).  
- A typical hardware failure budget (~0.5 % per component) plus autoscaling and health‑checks can satisfy this.

**Edge Cases**  
- Sudden traffic spikes: ensure autoscale triggers before the 4‑minute window.  
- Model drift causing many retries: incorporate back‑off to avoid cascading failures.  
- Network partitions: design for graceful degradation (fallback models).

**Optimize & Communicate**  
Explain that the calculation shows a *tight* but achievable budget; highlight trade‑offs between cost (more replicas) and risk. Emphasize continuous monitoring, automated rollbacks, and chaos engineering to validate the 5‑nines target. This structured reasoning demonstrates clear assumptions, quantitative analysis, and practical mitigations—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
