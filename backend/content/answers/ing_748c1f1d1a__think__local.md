---
qid: ing_748c1f1d1a__think__local
question: 'Explain: Prompt-injection defence (layered, assume the prompt fails)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 520
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:44:14-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
   - *What is “prompt‑injection” in this context?* (i.e., malicious user text that tricks the model into revealing sensitive data or executing unintended actions).  
   - *Assume the prompt has already bypassed basic filters.*  We’re focusing on downstream mitigations.  
   - *Target audience:* developers building AI services, not end‑users.

**2. Adopt a layered defense framework**  
   - Treat it like network security: multiple independent barriers (input sanitization, model‑level constraints, post‑processing).  
   - Map each layer to a “defense in depth” principle: if one fails, others still protect.

**3. Reason step‑by‑step through the layers**  

| Layer | What it does | How to implement |
|-------|--------------|------------------|
| **Pre‑filter** | Detect obvious injection patterns (e.g., `“/``, `“; DROP”`). | Regex, ML classifiers trained on known attacks. |
| **Prompt sanitization** | Strip or escape risky tokens before sending to LLM. | Use a whitelist of allowed characters or token‑level masking. |
| **Model instruction framing** | Explicitly instruct the model to “never reveal private info” and to treat user prompts as *context*, not commands. | Prefix with system messages; use role‑based constraints. |
| **Response post‑processing** | Scan output for policy violations (PII, instructions). | Regular expressions + a lightweight rule engine. |
| **Audit & monitoring** | Log all interactions, flag anomalies. | Anomaly detection on prompt patterns and response content. |

**4. Avoid common traps**  
   - *Overreliance on regex*: attackers can obfuscate inputs; combine with ML.  
   - *Single point of failure*: if only the pre‑filter is used, a bypass will crash everything.  
   - *Blindly trusting model instructions*: models may still hallucinate policy violations.

**5. Sanity‑check & communicate**  
   - Test each layer independently with crafted injection payloads.  
   - Summarize the defense stack in a diagram for stakeholders.  
   - Emphasize that “assume prompt fails” means the system must not rely on the prompt’s safety; every layer should be independent and verifiable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
