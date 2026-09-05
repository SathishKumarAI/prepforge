---
qid: ing_69e0018e22__star__local
question: 'Explain: Safety, Poisoning, and Hallucinations — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 328
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:59:08-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building an AI‑driven financial advisor that could remember user preferences across sessions and generate investment insights on demand. Early beta testing revealed the model would sometimes “hallucinate” advice or even produce out‑of‑context statements that confused users.

**Task** – I had to harden the agent’s memory handling, prevent poisoning attacks from malicious data injection, and reduce hallucinations so that every generated recommendation stayed within verified financial guidelines.

**Action** – First, I implemented a two‑tier state store: an immutable audit log for raw user inputs and a sanitized cache that only stored embeddings vetted by a rule‑based filter. Next, I added a poisoning detection layer that flagged anomalous input patterns using a lightweight outlier detector (Isolation Forest) before they could update the model’s weights. For hallucinations, I introduced a “confidence gating” mechanism: any response with a score below 0.75 triggered a fallback to a curated knowledge base instead of raw generation. Finally, I ran a controlled A/B test where the new pipeline reduced hallucination incidents from 12% to 2%, and user satisfaction scores rose by 18%.

**Result** – The system now safely preserves user context without leaking sensitive data or being subverted by malicious inputs, while delivering reliable advice that aligns with compliance standards. I learned that coupling rigorous state management with lightweight anomaly detection can dramatically improve AI safety in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
