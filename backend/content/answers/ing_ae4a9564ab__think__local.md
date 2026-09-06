---
qid: ing_ae4a9564ab__think__local
question: 'Explain: Three-Way Decision: Approve / Escalate / Reject'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 403
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:28:57-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
*What does “Three‑Way Decision” mean?* Assume it’s a tri‑state decision framework used in AI governance or model review (Approve = use as is, Escalate = needs human oversight, Reject = discard). Identify stakeholders: developers, ethicists, end‑users.  
**2️⃣ Adopt a mental model**  
Use the *decision‑tree* paradigm with a single branching node that yields three mutually exclusive outcomes. Think of it as a “triage” similar to medical triage or incident response.  

**3️⃣ Step‑by‑step reasoning**  
1. **Define criteria for each branch** (performance thresholds, bias metrics, compliance checks).  
2. **Collect evidence** (metrics, audit logs, stakeholder feedback).  
3. **Apply thresholds**: if all criteria satisfied → Approve; if some are borderline or uncertain → Escalate; if any critical violation → Reject.  
4. **Document rationale** for traceability and future learning.  

**4️⃣ Common traps to avoid**  
- *Over‑simplifying*: ignoring nuanced partial compliance that might still warrant a partial approval with constraints.  
- *Confirmation bias*: assuming the model is good because it performed well in training.  
- *Circular escalation*: letting Escalate become a default “failing” state without clear resolution paths.  

**5️⃣ Sanity‑check & communicate**  
Run a quick mental audit: pick an example model, walk through each branch; ensure no overlap and that every outcome is actionable. When explaining to others, use the triage analogy, show the criteria table, and outline post‑decision actions (deployment, review meeting, or deprecation). This keeps the reasoning transparent and reproducible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
