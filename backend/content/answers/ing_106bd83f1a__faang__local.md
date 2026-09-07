---
qid: ing_106bd83f1a__faang__local
question: How would you prepare an LLM feature for a compliance or security audit?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 484
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:21:30-05:00'
sources: []
---

**Clarify**  
We need an *LLM‑feature* (e.g., prompt‑tuning, fine‑tuned model, or inference pipeline) that can be audited for compliance (GDPR, HIPAA, etc.) and security (data leakage, adversarial robustness).  
Assumptions:  
- The feature is deployed in a production service with user‑generated inputs.  
- Auditors will inspect data handling, model behavior, and system controls.  

**Approach**  
1. **Data provenance & labeling** – track every training sample’s source, consent status, and retention period.  
2. **Model audit trail** – version the weights, store a hash of the tokenizer and config, log inference metadata (timestamp, user ID, input snippet).  
3. **Explainability layer** – generate attribution maps or token‑level importance scores to demonstrate why a response was produced.  
4. **Security hardening** – sandbox inference, enforce rate limits, sanitize inputs, and monitor for prompt injection.  

**Depth**  
- Use *data lineage* tools (e.g., Airbyte + Dagster) to guarantee GDPR “right to be forgotten”.  
- Store a signed checkpoint of the model; compute SHA‑256 on each deployment to detect tampering.  
- Generate a Post‑Hog audit report: input → tokenization → attention weights → output, all stored in an immutable ledger (e.g., AWS KMS‑protected DynamoDB).  
- Complexity: O(n) for logging per inference; storage grows linearly with traffic but can be archived to Glacier.  

**Edge Cases**  
- Non‑English or low‑resource languages may lack token attribution tools → fallback to black‑box explanations.  
- Adversarial prompts that bypass sanitization → need runtime anomaly detection.  

**Optimize & Communicate**  
Iteratively tighten the pipeline: first implement basic logging, then add explainability, finally harden against injection attacks. Present the audit trail as a single, tamper‑evident report, and rehearse explaining each component to auditors in lay terms. This demonstrates structured thinking, technical depth, and proactive risk mitigation—exactly what FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
