---
qid: ing_71fce01bb9__star__local
question: 'Explain: Enterprise-grade security and controls — Secure legal AI for the
  most sensitive matters | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 333
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:15:19-05:00'
sources: []
---

**Situation** – At a financial services firm, we were tasked with launching an internal AI advisory tool to review compliance documents for high‑risk clients. The data set included personally identifiable information (PII) and trade secrets, so any breach would trigger regulatory fines and reputational damage.

**Task** – Build the system so that it could process sensitive material in real time while meeting SOC 2 Type II, GDPR, and CCPA requirements, and ensuring that model outputs were auditable and non‑exfiltratable.

**Action** – I first implemented a zero‑trust architecture: all data were encrypted at rest with AES‑256 and in transit via TLS 1.3. We used Azure Key Vault to rotate secrets every 90 days. For the AI, we deployed a private‑cloud GPT‑4 instance behind an internal VNet, adding a WAF and DDoS protection layer. To enforce legal controls, I built a policy engine that automatically flagged any output containing PII; those passages were redacted before delivery. We also set up a comprehensive audit trail in Elastic Stack, logging every query, model version, and user access for compliance review.

**Result** – The tool processed 12,000 documents per month with a 99.9% uptime, reduced manual review time by 70%, and passed the first SOC 2 audit without any findings. I learned that combining strong encryption, strict access controls, and automated redaction is essential when deploying AI on sensitive enterprise data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
