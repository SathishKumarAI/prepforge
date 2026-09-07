---
qid: ing_317b6e7452__faang__local
question: 'Explain: Your Copilot summarises incoming email. An attacker emails a target
  user with hidden instructions addressed to the model. Walk me through the attack
  and your defence.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 553
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:39:22-05:00'
sources: []
---

**Clarify**  
We have an AI‑powered *Copilot* that auto‑summarises inbound mail for a user. An adversary sends an email containing malicious instructions hidden (e.g., steganography or encoded in the subject) that are only interpretable by the Copilot. The attacker’s goal is to manipulate the model into taking unintended actions—like executing code, leaking data, or sending spoofed replies.

**Assumptions**  
- Copilot runs locally on the user’s device or within a secure enclave.  
- The model receives raw email text (subject + body) and can generate outputs based on that context.  
- No external verification of content beyond the summarisation step.

---

**Approach**  
1. **Threat modeling**: Identify how hidden data could be injected (e.g., base64 in headers, zero‑width characters).  
2. **Input sanitisation**: Strip or neutralise non‑ASCII/zero‑width sequences before feeding to the model.  
3. **Model constraints**: Use a *prompt‑guard* that only allows summarisation tokens and rejects any “action” directives.  
4. **Audit trail**: Log raw inputs vs. generated summaries for forensic review.  

---

**Depth (Technical Detail)**  
- Implement a regex filter to remove Unicode control characters (`\u200B-\u200D`, `\uFEFF`).  
- Wrap the summariser in an *execution guard*: a fine‑tuned classifier that flags any request containing verbs like “run”, “execute”, or suspicious URLs.  
- Use token‑level attention masking so the model cannot attend to removed characters.  
- Complexity: O(n) for filtering; negligible overhead compared to inference time.

---

**Edge Cases**  
- Legitimate emails using zero‑width spaces (e.g., for formatting).  
- Encrypted attachments that may contain hidden payloads but appear benign.  
- Attackers embedding instructions across multiple headers or MIME parts.

Test by fuzzing with synthetic emails containing encoded commands, ensuring the guard rejects them and the summariser remains accurate on clean inputs.

---

**Optimize & Communicate**  
- Incrementally update the regex set as new steganographic techniques emerge.  
- Provide a user‑configurable “strict mode” toggle for high‑security contexts.  
- Document the defense in design docs, emphasising that we treat all incoming content as untrusted and enforce a *least privilege* policy on model outputs.

This layered strategy balances usability (accurate summaries) with robust protection against hidden instruction attacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
