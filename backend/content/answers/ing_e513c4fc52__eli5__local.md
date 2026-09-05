---
qid: ing_e513c4fc52__eli5__local
question: PHI is in every audio file, transcript, and note you touch. How does that
  shape the architecture, and what can you send to a third-party model API?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 365
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:37:38-05:00'
sources: []
---

Imagine your data are like a diary kept in a tiny, locked safe that sits inside every device you use—phones, computers, microphones. “PHI” (protected health information) is the diary’s contents: names, dates, medical details. Because the diary is inside every device, any software that runs on those devices automatically has access to it unless it keeps the diary closed.

**How this shapes the system**

* **Always‑on encryption** – The safe locks itself whenever you turn off a device or even when you’re just listening. Only your own keys can open it.
* **Local processing first** – Before any information leaves the device, the software checks: “Do I really need to send this?” If not, it stays inside the safe.
* **Minimal sharing** – When something must go out (e.g., a medical app sending data to a doctor), only the bare essentials are extracted and sent. The rest of the diary remains locked.

**What you can safely send to a third‑party model API**

1. **Anonymized snippets** – Text or audio that has had names, dates, and other identifiers scrubbed out.
2. **Aggregated statistics** – Numbers like “average heart rate” without linking them back to the individual.
3. **Encrypted tokens** – If you need to use a cloud model, first encrypt your data locally; only the model’s key can decrypt it, so the API never sees the raw PHI.

In short, think of every device as a secure diary that automatically keeps its pages private unless you explicitly choose to share sanitized excerpts. This way, the architecture protects personal health information while still allowing useful AI services to run.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
