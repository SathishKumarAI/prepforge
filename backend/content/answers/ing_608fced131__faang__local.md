---
qid: ing_608fced131__faang__local
question: When should you NOT build an agent? — Questions
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 457
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:28:37-05:00'
sources: []
---

**When should you NOT build an agent?**

---

### 1️⃣ Clarify  
The question asks for scenarios where building a software agent (e.g., chatbot, recommendation engine) is *unwise*.  
*Assumptions to confirm:*  
- The “agent” refers to an autonomous system that learns or acts on behalf of users.  
- We’re evaluating business‑value vs risk, not the technical feasibility alone.

---

### 2️⃣ Approach  
1. List constraints: data privacy, regulatory burden, cost, and user trust.  
2. Map each constraint to typical agent use cases.  
3. Prioritize scenarios where negative impact outweighs benefit.

---

### 3️⃣ Depth  

| Situation | Why it’s a “no” |
|-----------|-----------------|
| **Sparse, noisy data** | Learning algorithms need clean signals; a poor model causes mis‑actions and erodes trust. |
| **High regulatory stakes** (e.g., medical diagnostics) | Incorrect decisions can be legally catastrophic; human oversight is mandatory. |
| **Low user engagement** | An agent that rarely interacts wastes compute & storage, providing no ROI. |
| **Critical safety domain** (autonomous vehicles, aviation) | Even a small failure rate is unacceptable; manual control is required until exhaustive validation. |
| **Unclear business value** | If the agent’s output doesn’t directly influence revenue or cost savings, resources are better spent elsewhere. |

---

### 4️⃣ Edge Cases  
- *Hybrid models*: partial automation with human review can mitigate risk.  
- *Pilot phases*: small‑scale trials reveal data quality issues before full rollout.

---

### 5️⃣ Optimize & Communicate  
Explain that skipping agent development saves time, avoids compliance penalties, and protects brand reputation. If the situation changes (e.g., richer data or tighter regulations), revisit the decision with a structured cost–benefit analysis.  

*Key takeaway:* Build an agent only when you have reliable data, clear regulatory pathways, high user interaction, and demonstrable business impact—otherwise, opt for simpler, safer solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
