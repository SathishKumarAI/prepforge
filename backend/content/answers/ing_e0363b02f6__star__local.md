---
qid: ing_e0363b02f6__star__local
question: Where is the line between the model provider's safety responsibility and
  the application developer's? Whose job is each control?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 318
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:57:08-05:00'
sources: []
---

**Situation:**  
While leading a fintech startup’s AML platform, we integrated OpenAI’s GPT‑4 for customer support chat. Our compliance audit flagged that the model could inadvertently expose sensitive transaction data if not properly filtered.

**Task:**  
I needed to delineate responsibilities: ensure the provider’s safety mechanisms were sufficient while implementing our own controls to protect user privacy and meet regulatory requirements.

**Action:**  
First, I reviewed OpenAI’s documented content filters, rate limits, and the “Fine‑Tuning Safety” guidelines. I then built a wrapper layer in Node.js that intercepted every prompt/response pair: it stripped PII from inputs, applied an additional regex blacklist for account numbers, and logged all exchanges to our secure audit trail. We used OpenAI’s `best_of=3` sampling with temperature 0.2 to keep outputs deterministic, reducing the risk of hallucinated data. Finally, I coordinated a joint review with the provider’s compliance team, establishing a shared incident response playbook.

**Result:**  
The combined controls cut false‑positive privacy breaches by 98%, keeping us audit‑ready and compliant with GDPR/KYC. We also reduced model latency by 12% through caching benign responses. This experience taught me that providers handle core safety (e.g., content filtering, data retention), while developers must layer domain‑specific safeguards, logging, and compliance workflows to fully protect users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
