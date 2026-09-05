---
qid: ing_dca56a7313__star__local
question: How do you handle PII in an LLM pipeline end to end?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 289
total_tokens: 529
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:49:13-05:00'
sources: []
---

**Situation** – In my last role I built a chatbot for a financial services client that had to answer customer queries while staying compliant with GDPR and CCPA. The data feed included emails, transaction histories, and personal identifiers.

**Task** – My job was to design an end‑to‑end LLM pipeline that could ingest user requests, generate accurate responses, and guarantee that no PII leaked into the model or its logs.

**Action** – I started by implementing a token‑level scanner using spaCy’s named entity recognizer to flag names, account numbers, SSNs, and addresses. Detected tokens were replaced with placeholders before passing text to the transformer. For training data, I used differential privacy noise added to embeddings so that individual records couldn’t be reconstructed. All logs were encrypted at rest with AES‑256, and access was limited via RBAC in our Kubernetes cluster. Finally, we set up a real‑time monitoring dashboard that alerts on any accidental PII exposure.

**Result** – After launch, zero incidents of PII leakage were reported over 12 months, and the chatbot maintained an average response accuracy of 94 %. I learned that combining automated redaction with privacy‑preserving training gives both compliance and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
