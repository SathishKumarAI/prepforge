---
qid: ing_f600fd4d1e__star__local
question: A stakeholder wants to send sensitive customer data (PII) to a third-party
  model API. They say the business need justifies it. What do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 286
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:40:32-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, a product manager approached me asking us to push our customer transaction data—containing name, address, and SSN—to an external AI service for fraud detection. The deadline was tight: we needed a working prototype in two weeks before the quarterly audit.

**Task:** I had to evaluate whether this would violate privacy regulations (GDPR/CCPA), assess technical risks, and propose a compliant solution that still met the business goal of real‑time fraud scoring.

**Action:** First, I mapped the data flow and identified all PII fields. I then applied *data minimization* by hashing SSNs with SHA‑256 and removing any nonessential columns. Next, I implemented a *tokenization layer* using AWS KMS so only the hashed token reached the API. I also negotiated an *on‑premises sandbox* for the model provider to run their inference locally, eliminating outbound traffic of raw PII. Finally, I drafted a data‑processing agreement and added audit logs to capture every transmission.

**Result:** The prototype launched on schedule, achieving 98 % fraud detection accuracy with zero PII exposure. We passed the audit without incident, saved $12k in potential fines, and learned that secure tokenization can satisfy both business speed and regulatory compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
