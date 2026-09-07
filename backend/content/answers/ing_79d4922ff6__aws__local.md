---
qid: ing_79d4922ff6__aws__local
question: 'Explain: PII Detection — Guardrails'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 524
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:00:33-05:00'
sources: []
---

**Situation (S)** – While leading the data‑privacy team for a global e‑commerce platform, we discovered that our AI‑powered recommendation engine was inadvertently ingesting user PII (emails, addresses) from raw logs, violating GDPR and causing a 12 % spike in compliance audit findings.

**Task (T)** – Build an automated PII detection guardrail that scans all incoming data streams, flags or redacts PII before it reaches downstream ML models, while keeping latency <50 ms and cost <0.02 $/GB processed.

**Action (A)**  
1. **Requirements & Design** – Adopt a *“detect‑and‑mask”* pattern:  
   - Use **Amazon Kinesis Data Firehose** to ingest logs → **AWS Lambda** for real‑time regex/NER checks against a curated PII dictionary.  
   - If PII is detected, Lambda writes a redaction record to **DynamoDB** and streams the sanitized payload to **S3 Glacier Deep Archive** for audit.  
2. **Scalability & Availability** – Kinesis scales horizontally; Lambda auto‑scales with 1 k concurrent invocations (95th percentile latency <40 ms).  
3. **Cost** – Estimated $0.015/GB processed + minimal Lambda invocations → <$5/month for 200 TB/year.  
4. **Governance** – Integrate with **AWS Config Rules** to flag any un‑masked PII in S3, and publish alerts to **SNS**.

**Result (R)** – Within 90 days we reduced compliance audit findings by **15 %**, cut manual remediation effort by **70 %**, and maintained <0.05 ms average latency on the recommendation pipeline. The guardrail also enabled us to generate a monthly *PII‑free* dataset for internal ML training, improving model accuracy by 3 %.  

**Leadership Principles Highlighted**  
- **Customer Obsession & Ownership** – Protecting user data is our first responsibility.  
- **Dive Deep & Bias for Action** – Rapidly built and iterated a cloud‑native solution that balances performance with compliance.

*Bar‑raiser takeaway:* Demonstrated ownership, deep technical design (Kinesis + Lambda + DynamoDB), quantified impact, and continuous learning from the initial audit failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
