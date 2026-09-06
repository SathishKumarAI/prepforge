---
qid: ing_c57adc45e3__think__local
question: 'Explain: Pattern: Corrective RAG (CRAG) — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 413
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:00:36-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   * Identify what “Pattern: Corrective RAG (CRAG)” refers to—likely a design pattern for handling Red‑Amber‑Green (RAG) status indicators in AI systems, perhaps with corrective actions.  
   * Assume it’s an extension of standard RAG dashboards, not a new ML algorithm.  

**2. Adopt a mental model**  
   * Treat it as a **design‑pattern taxonomy**: problem → solution pattern → implementation steps.  
   * Use the classic “RAG + feedback loop” framework: observe status → trigger corrective action → update status.

**3. Step‑by‑step reasoning**  
   1. Define the domain (e.g., model monitoring).  
   2. Explain RAG states and why they’re insufficient alone (no guidance on remediation).  
   3. Introduce CRAG: add a *Corrective* layer that maps each status to an action plan.  
   4. Show how to encode the corrective logic (e.g., rule‑based, policy file).  
   5. Illustrate integration points—data pipelines, alerting, retraining triggers.

**4. Avoid common pitfalls**  
   * Don’t conflate RAG with risk scores; keep them distinct.  
   * Avoid over‑engineering: the corrective layer should be simple and auditable.  
   * Watch out for “alert fatigue” – ensure actions are meaningful.

**5. Sanity‑check & communicate**  
   * Verify that every RAG state has a deterministic corrective path.  
   * Present a concise diagram: Input → Monitor → RAG → CRAG Action → Update.  
   * Explain benefits (proactive remediation, reduced downtime) and trade‑offs (additional maintenance).  

This structured walk‑through lets you articulate the CRAG pattern clearly and adapt it to other AI monitoring contexts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
