---
qid: ing_34c17befa8__aws__local
question: 'Explain: Tokenization — Encoding vs Encryption vs Tokenization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 474
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:24:12-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I was leading a fraud‑prevention team at an e‑commerce platform that handled $1B in annual card revenue. Our goal was to protect sensitive payment data while keeping checkout latency below 200 ms, and we needed a solution that could scale to millions of transactions per day.

**Action (Dive Deep + Bias for Action)**  
I mapped three data‑masking techniques:

| Technique | Purpose | AWS Services | Trade‑offs |
|-----------|---------|--------------|------------|
| **Encoding** (Base64, URL) | Simple representation, *not* security | S3/Glue for batch jobs | No confidentiality – anyone with the string can decode it. |
| **Encryption** (AES‑256 KMS) | Full confidentiality, reversible with key | AWS KMS + DynamoDB | Higher CPU cost; key rotation overhead; compliance requires strict audit logs. |
| **Tokenization** (AWS DynamoDB Token Store) | Replace PAN/SSN with non‑reversible tokens that map via a secure lookup table | DynamoDB + Lambda | O(1) lookup latency, no cryptographic ops per transaction; tokens can be stored in cookies without PCI scope. |

I chose **tokenization** for the checkout flow: each card number was replaced by a 12‑char token, stored in DynamoDB with an LRU cache. This kept latency at ~30 ms and reduced our PCI scope to a single lookup table, cutting compliance costs by 40%.

**Result (Deliver Results)**  
Post‑deployment, we saw:

- **0.01%** false positives on fraud alerts vs 0.05% pre‑tokenization.
- **$120k** annual savings in compliance fees.
- No security incidents in the first year.

I documented the architecture and conducted a post‑mortem after an initial latency spike; we added a second DynamoDB shard, improving throughput by 25%. This experience reinforced that *the right choice of data protection is a product decision, not just a tech one*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
