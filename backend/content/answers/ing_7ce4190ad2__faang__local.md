---
qid: ing_7ce4190ad2__faang__local
question: Prompts and completions contain user data. How do you redact PII in traces
  without destroying your ability to debug?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 453
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:34:25-05:00'
sources: []
---

**Clarify**  
We’re asked how to scrub personally‑identifiable information (PII) from the logs that capture prompt–completion pairs, yet still retain enough context to troubleshoot failures or bias in an LLM pipeline. Key assumptions:  
* Logs are persisted for audit/debugging.  
* PII may be text or structured fields (emails, IDs).  
* We need deterministic redaction without losing semantic signal.

**Approach**  
1. **Identify PII** – use a lightweight NER/regex pass to flag sensitive spans.  
2. **Redact deterministically** – replace each span with a hash‑based token (`<PII:hash>`).  
3. **Preserve context** – keep surrounding tokens and the original redacted string in an encrypted side‑channel (e.g., HSM or key‑protected vault) for on‑demand inspection by authorized ops.  
4. **Audit trail** – maintain a separate immutable audit log of when each token was created, who accessed it, and for what purpose.

**Depth**  
* The NER model runs in O(n) time per message; hashing is O(1).  
* Redaction keeps the prompt length unchanged, preserving token‑level debugging.  
* Encrypted side‑channel adds negligible latency (encryption/decryption ~ microseconds).  
* We avoid re‑training or fine‑tuning models on raw PII by ensuring all training data passes through this pipeline.

**Edge Cases**  
* Over‑redaction: false positives can erase useful context—test against a curated dataset.  
* Under‑redaction: missed patterns (e.g., obfuscated emails)—update regexes regularly.  
* Token collision in hashing – use SHA‑256 and truncate to 8 bytes; unlikely collisions.

**Optimize & Communicate**  
Explain the trade‑off: deterministic tokens give reproducible debugging while encrypted storage satisfies compliance. Propose monitoring alerts when a redacted token is accessed, ensuring minimal performance impact and clear ownership of sensitive data. This balances security with developer productivity—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
