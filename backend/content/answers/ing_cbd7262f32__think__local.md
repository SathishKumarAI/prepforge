---
qid: ing_cbd7262f32__think__local
question: A team wants to add a third-party MCP server to give their agent a new capability.
  What do you check before approving it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 424
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:23:38-05:00'
sources: []
---

**1️⃣ Clarify the request and assumptions**  
   * Confirm what “MCP server” refers to (Microsoft Cloud Platform, Multi‑Channel Provider…?) and why it’s needed.  
   * Assume the team has a functional prototype that can benefit from the new capability but hasn’t yet vetted security or compliance.

**2️⃣ Adopt a risk‑assessment framework**  
   Use a “CIA + Availability” lens: Confidentiality, Integrity, Availability, plus Regulatory & Vendor Risk (e.g., GDPR, SOC 2). Map each potential issue to an impact/likelihood score.

**3️⃣ Step‑by‑step reasoning**  
   1. **Vendor reputation** – check public reviews, incident history, and vendor security certifications.  
   2. **Data flow & ownership** – map what data the MCP will receive, store, or transmit; ensure it stays within approved jurisdictions.  
   3. **Authentication & authorization** – verify that the integration uses strong, modern protocols (OAuth 2.0, mutual TLS) and least‑privilege access.  
   4. **Compliance fit** – cross‑check against internal policies (PII handling, audit trails).  
   5. **Operational impact** – estimate latency, uptime SLAs, and rollback procedures.  
   6. **Cost & contract terms** – ensure pricing is transparent and there are no hidden obligations.

**4️⃣ Common traps to avoid**  
   * Assuming “third‑party” automatically means insecure.  
   * Overlooking data residency or export controls.  
   * Neglecting the need for a formal acceptance test before production use.

**5️⃣ Sanity check & communicate**  
   • Re‑summarize key findings in one paragraph: risk level, mitigation steps, and any required approvals.  
   • Present this to the security lead and product owner so that both technical and business perspectives are aligned before granting approval.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
