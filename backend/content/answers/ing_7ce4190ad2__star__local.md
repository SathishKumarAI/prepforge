---
qid: ing_7ce4190ad2__star__local
question: Prompts and completions contain user data. How do you redact PII in traces
  without destroying your ability to debug?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 340
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:43:27-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we built an AI‑powered chatbot that processed customer queries. Every prompt and completion was logged for compliance audits and debugging, but the logs contained sensitive PII—account numbers, SSNs, and addresses—which raised regulatory concerns.

**Task:**  
I needed to implement a redaction system that removed or obfuscated any PII from our trace logs while preserving enough context (e.g., intent tags, response snippets) for engineers to troubleshoot performance issues without exposing personal data.

**Action:**  
First, I defined a whitelist of permissible fields (utterance ID, timestamp, intent label). Then I integrated an NLP‑based entity extractor (spaCy with custom NER models) into the logging pipeline. The extractor flagged PII entities in both prompts and completions. A post‑processor replaced each entity with a deterministic hash tied to the user session but not reversible—ensuring consistent placeholders across logs for correlation. For debugging, I stored the hashed values in a separate encrypted audit table indexed by session ID, accessible only to privileged engineers via role‑based access controls. Finally, I added automated tests that ran nightly scans against sample traces to confirm no PII leaked.

**Result:**  
After deployment, we achieved 100 % compliance with GDPR and CCPA while reducing debugging time by 35 % because engineers could still correlate user sessions without seeing raw data. The project also earned us an internal “Data Privacy Champion” award, and I documented the approach in a whitepaper that other teams adopted for their AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
