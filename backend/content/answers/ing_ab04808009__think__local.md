---
qid: ing_ab04808009__think__local
question: 'Explain: Exfiltration Patterns — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 413
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:19:27-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   - *What exactly is “exfiltration” in AI?* Assume it means unauthorized data extraction from a model or system.  
   - *Scope of “safety and governance”*: focus on policy, technical safeguards, and oversight rather than user‑level tips.  

**2. Adopt a mental framework**  
   - **Threat model**: attacker → compromised component (model weights, logs) → data leak.  
   - **Defense layers**: architectural controls, runtime monitoring, post‑incident response.  
   - **Governance lens**: legal compliance, auditability, transparency, stakeholder accountability.  

**3. Step‑by‑step reasoning**  
   1. Identify potential exfiltration vectors (model outputs, side‑channels, metadata).  
   2. Map each vector to mitigation techniques (output filtering, differential privacy, encryption in transit).  
   3. Integrate governance checkpoints: data‑handling policies, audit trails, incident‑reporting protocols.  
   4. Validate the design against known attack scenarios and regulatory requirements (GDPR, CCPA).  

**4. Avoid common pitfalls**  
   - *Overreliance on single defenses*: attackers adapt; layered security is key.  
   - *Neglecting human factors*: insider threats or misconfigurations often bypass technical controls.  
   - *Assuming compliance ≈ safety*: legal compliance alone doesn’t eliminate exfiltration risk.  

**5. Sanity‑check & articulate**  
   - Run a mental “red team” exercise: can an attacker still extract data?  
   - Summarize findings in plain language for stakeholders, highlighting trade‑offs (performance vs privacy).  
   - Iterate with cross‑functional teams to ensure the plan is both technically robust and governance‑aligned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
