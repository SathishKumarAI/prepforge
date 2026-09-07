---
qid: ing_83ef985d7e__aws__local
question: 'Explain: The PM wants AI summaries of the user''s private messages. Design
  it privacy-first.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 376
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:23:19-05:00'
sources: []
---

**Situation & Task (Ownership + Customer Obsession)**  
I led a cross‑functional team tasked with delivering an AI summarization feature for users’ private messages while guaranteeing end‑to‑end privacy. The PM demanded a solution that never exposed raw text outside the user’s device and met GDPR/CCPA.

**Approach (Dive Deep & Bias for Action)**  
1. **On‑device inference** – use Amazon SageMaker Edge Manager to deploy a distilled BERT model on iOS/Android, so all NLP runs locally.  
2. **Secure enclave** – wrap the model in Apple’s Secure Enclave / Android Keystore; keys are never written to disk.  
3. **Zero‑knowledge data flow** – user text is tokenized in memory, passed through the model, and only the summary (a short string) exits the device. No logs or telemetry of raw content are stored.  
4. **Audit & compliance** – integrate AWS CloudTrail with a custom rule that flags any accidental write to S3; all logs are encrypted with KMS keys restricted to audit IAM roles.

**Result (Deliver Results)**  
Within 6 weeks, we shipped the feature with <0.5 % latency increase per message, and user satisfaction rose from 4.1 → 4.7 on NPS. Cost was $0.01 per inference, keeping the overall service under a 10 % margin.

**Learning (Bar‑raiser expectations)**  
I documented failure modes (e.g., model drift) and automated retraining triggers that never touch user data, reinforcing ownership of both privacy and quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
