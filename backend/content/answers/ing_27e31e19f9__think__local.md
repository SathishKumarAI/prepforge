---
qid: ing_27e31e19f9__think__local
question: You are swapping the model behind a live feature. Walk me through shadow,
  canary and A/B. When do you use each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 537
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:19:04-05:00'
sources: []
---

**1️⃣ Clarify the context & assumptions**  
- *Live feature*: an API or UI component that customers are already using.  
- *Model swap*: we want to replace a production‑grade ML model with a new one.  
- Assume we have: a stable “golden” deployment, monitoring infrastructure, rollback paths, and a clear definition of “success” (latency, accuracy, SLA).  

**2️⃣ Mental model – rollout strategies as safety nets**  
- **Shadow**: run the new model in parallel with the old one but *don’t use its predictions* for users. It only observes inputs/outputs so we can compare performance.  
- **Canary**: expose the new model to a small, controlled slice of traffic (e.g., 1–5 %) while keeping the rest on the old model; monitor for anomalies before full roll‑out.  
- **A/B testing**: split traffic into two or more groups that each receive a different model’s predictions and measure business metrics to decide which is better.  

**3️⃣ Step‑by‑step reasoning**  
1. **Shadow first** – ensures the new model behaves as expected (latency, error rates) without risking user experience.  
2. If shadow passes, launch a **canary**: gradually increase traffic share, continuously compare key metrics to thresholds.  
3. Once canary is stable, consider an **A/B test** if you need to prove that the new model yields measurable business benefits (e.g., higher conversion).  
4. After A/B confirms superiority, promote the new model to full production; otherwise rollback using the established safety nets.  

**4️⃣ Common traps**  
- *Skipping shadow*: missing subtle bugs that only surface under real load.  
- *Canary traffic too high too fast*: amplifies a failure before you can react.  
- *A/B without proper attribution*: attributing improvements to the model when they’re actually due to traffic or time effects.  

**5️⃣ Sanity‑check & communicate**  
- Review each step against SLAs and risk tolerance.  
- Communicate the plan with ops, product, and stakeholders: “Shadow → Canary → A/B” with clear exit criteria at every stage.  
- Document thresholds and rollback triggers so everyone knows when to stop or revert.  

By following this sequence—shadow first for safety, canary for gradual exposure, and A/B for business validation—you minimize risk while gaining evidence that the new model truly improves the live feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
