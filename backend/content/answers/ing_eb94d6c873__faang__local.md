---
qid: ing_eb94d6c873__faang__local
question: 'Explain: Common mistakes — Anthropic System Design Interview (2026 Guide)
  - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 525
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:47:57-05:00'
sources: []
---

**Clarify**  
The question asks for the *most common pitfalls* a candidate might hit when tackling the **Anthropic System‑Design interview**—the one that tests how you architect large‑scale AI/ML services (e.g., prompt routing, model scaling). I’ll assume the interviewer expects concrete examples, trade‑offs, and mitigation strategies.

---

### Approach
1. Identify the key dimensions of a ML system: data ingestion, preprocessing, model serving, monitoring, scalability, safety, and cost.  
2. Map typical interview questions to these axes.  
3. Enumerate mistakes that stem from misunderstandings or oversights in each area.  

---

### Depth (Common Mistakes & Fixes)

| Dimension | Typical Mistake | Why it’s problematic | Quick Remedy |
|-----------|-----------------|----------------------|--------------|
| **Data Pipeline** | Assuming “clean” data without audit | ML is only as good as its input; untracked drift leads to hallucinations. | Build lineage, versioning, and automated drift alerts. |
| **Model Serving** | Naïve single‑model endpoint | Latency spikes and no A/B testing. | Use a model router (e.g., feature‑flag based) and separate inference clusters per model. |
| **Scalability** | Relying on autoscaling alone | Cold starts, overshoot costs. | Pre‑warm nodes for high‑traffic windows; use spot instances with graceful fallback. |
| **Safety & Ethics** | Ignoring bias audit in the design doc | Regulatory risk and brand damage. | Integrate a bias‑audit microservice that flags content before routing. |
| **Observability** | Logging only “request/response” pairs | Hard to diagnose hallucinations or latency spikes. | Emit structured events (prompt ID, token counts, latency buckets) + anomaly detection. |

---

### Edge Cases
- Sudden data source outages → graceful degradation.  
- Model updates that increase size → need a blue‑green rollout.  
- Regulatory changes in a new jurisdiction → dynamic policy engine.

---

### Optimize & Communicate
*Highlight trade‑offs*: e.g., pre‑warming increases cost but reduces SLA violations; bias audits add latency but protect compliance.  
When explaining, start with the problem, show how the mistake leads to failure, then present a concrete design change that fixes it—all within 2–3 sentences per point.

**Word count:** ~200 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
