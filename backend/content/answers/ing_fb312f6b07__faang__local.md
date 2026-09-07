---
qid: ing_fb312f6b07__faang__local
question: 'Explain: Don’t Bother About Requirements — Design System Newsletter - by
  Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 491
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:24:13-05:00'
sources: []
---

**Clarify**  
Neo Kim’s “Don’t Bother About Requirements” newsletter argues that ML‑systems should be designed around *performance goals* (latency, throughput, accuracy) rather than exhaustive feature lists. The premise is that over‑engineering the data pipeline or model spec locks teams into brittle, hard‑to‑maintain solutions.  
Assumptions to confirm:  
- The product has well‑defined SLAs for inference and training.  
- There’s a continuous deployment pipeline in place.  
- Stakeholders can tolerate iterative feature rollouts.

**Approach**  
1. **Set Quantitative Targets** – Define latency, accuracy, and cost budgets.  
2. **Measure Everything** – Instrument data ingestion, preprocessing, model execution, and post‑processing.  
3. **Iterate on the System, Not the Specs** – Use A/B tests to validate changes against the targets.  
4. **Automate Feedback Loops** – Continuous monitoring + automated retraining triggers.

**Depth**  
- *Why it works*: By treating “requirements” as constraints rather than a checklist, teams focus on measurable outcomes. This reduces scope creep and allows rapid experimentation.  
- *Implementation*: Use feature‑store abstractions to decouple model logic from data schema changes; apply model compression (quantization, distillation) when latency targets are missed.  
- *Complexity*: Monitoring adds O(1) overhead per request; automated retraining can be scheduled during low‑load windows to keep the system responsive.

**Edge Cases**  
- Regulatory or privacy constraints may still mandate specific data handling requirements.  
- Sudden spike in traffic could violate latency budgets before retraining kicks in.  
- Model drift might lead to accuracy drops that aren’t caught by automated metrics if the monitoring window is too long.

**Optimize & Communicate**  
- **Optimization**: Introduce adaptive batching and dynamic model selection to balance throughput vs. latency.  
- **Narration**: Frame the conversation around *“We’re not ignoring requirements; we’re redefining them as measurable, actionable constraints that evolve with traffic.”* This keeps stakeholders aligned while freeing engineers to innovate.

By focusing on *performance goals* rather than a static feature list, teams build resilient ML systems that can grow without constant re‑specification.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
