---
qid: ing_7ce4190ad2__eli5__local
question: Prompts and completions contain user data. How do you redact PII in traces
  without destroying your ability to debug?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 208
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:54:42-05:00'
sources: []
---

Think of the system’s log as a diary that records every conversation it has with users.  
Some pages contain private notes—PII (person‑identifying information like names or addresses).  
To keep those secrets safe while still being able to read the diary for bugs, we use a “redaction filter.”  

The filter scans each entry and replaces any PII word with a generic tag such as `[REDACTED]`.  
It does this **before** the text is stored, so no sensitive data ever leaves the user’s device or travels to the server.  
At the same time, it keeps the rest of the message intact—so developers can still see why the AI behaved that way and trace errors.  

In short: redact only the parts that matter for privacy, leave everything else untouched; this lets you debug without exposing personal details.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
