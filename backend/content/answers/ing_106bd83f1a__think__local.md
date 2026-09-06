---
qid: ing_106bd83f1a__think__local
question: How would you prepare an LLM feature for a compliance or security audit?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 482
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:46:57-05:00'
sources: []
---

**Metacognitive Blueprint – Preparing an LLM Feature for Audit**

1. **Clarify Scope & Objectives**  
   • Identify the *audit domain* (compliance, security, privacy).  
   • Pinpoint which feature(s) of the LLM are under scrutiny—e.g., data ingestion, output filtering, or model weights.  
   • List regulatory touchpoints (GDPR, HIPAA, SOC 2, ISO 27001) to align expectations.

2. **Adopt a Structured Framework**  
   • Use a *risk‑based* approach: map inputs → processing steps → outputs.  
   • Apply the *CIA triad* (Confidentiality, Integrity, Availability) plus *Non‑Repudiation* where relevant.  
   • Integrate a *data‑flow diagram* to visualise data provenance and control points.

3. **Step‑by‑Step Reasoning**  
   1. Enumerate all data sources & retention policies.  
   2. Document model architecture, training data provenance, and versioning.  
   3. Map audit controls: access logs, encryption at rest/transport, sandboxing.  
   4. Generate evidence artifacts (audit trails, test suites, compliance reports).  
   5. Conduct a dry‑run with auditors to validate traceability.

4. **Avoid Common Pitfalls**  
   • Don’t assume “black‑box” compliance; provide explainable logs.  
   • Resist over‑engineering – keep evidence concise and relevant.  
   • Beware of *audit fatigue*: too many checkpoints can obscure real risks.  
   • Do not neglect third‑party dependencies (tokenizers, libraries).

5. **Sanity‑Check & Communicate**  
   • Cross‑validate evidence against the audit checklists.  
   • Summarise findings in plain language: “What was checked, how it meets standards, and any residual risks.”  
   • Rehearse the walk‑through to catch jargon or ambiguous terminology before the actual audit.

This stepwise mental map can be reused for any LLM feature—just swap out domain specifics while preserving the core risk‑analysis loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
