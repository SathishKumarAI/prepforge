---
qid: ing_a90616c2a1__star__local
question: Why JSON Schema?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 311
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:10:54-05:00'
sources: []
---

**Situation:**  
During a fraud‑detection project for a fintech client, we were ingesting transaction data from multiple third‑party APIs. Each source sent JSON payloads with slightly different structures, and our ML pipeline was choking on schema mismatches every time a new vendor joined.

**Task:**  
I had to design a robust, automated validation layer that would guarantee each incoming JSON matched the expected feature set for the model, while allowing us to evolve schemas without breaking downstream code.

**Action:**  
I introduced JSON Schema as the contract language. Using `ajv` in Node.js, I defined reusable subschemas for core fields (amount, timestamp, merchant_id) and optional vendor‑specific attributes. We built a CI pipeline that auto‑generates TypeScript interfaces from the schemas, so our data ingestion code stays type‑safe. For any validation failure we log the exact error and route the payload to a quarantine queue, feeding the issue back to the vendor via a Slack webhook.

**Result:**  
Within two weeks of deployment, ingestion errors dropped by 87 %. The model’s feature drift detection rate improved from 12 % to <1 %, and onboarding new APIs took only 4 hours instead of days. I learned that treating schema as first‑class code not only protects the ML pipeline but also accelerates collaboration with external partners.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
