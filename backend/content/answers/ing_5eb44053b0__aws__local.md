---
qid: ing_5eb44053b0__aws__local
question: 'Explain: 🔒 Security & Privacy — GitHub - langfuse/langfuse: \ud83e\udea2
  Open source AI engineering platform: LLM evals, observability, metrics, prompt management,
  playground, datasets. Integrates with OpenTelemetry, LangChain, OpenAI SDK, LiteLLM,
  and more. \ud83c\udf4aYC W23 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 307
output_tokens: 421
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:59:48-05:00'
sources: []
---

**Situation / Task**  
I led the rollout of a new open‑source AI platform (Langfuse) that exposes LLM evaluation and observability APIs to external customers. Our first release had to satisfy stringent security & privacy standards because we were handling potentially sensitive prompts, user data, and model outputs.

**Action**  
1. **Zero‑trust API gateway** – deployed an AWS API Gateway with custom authorizers (JWT from Cognito) and WAF rules blocking known injection vectors.  
2. **Data encryption** – enabled server‑side encryption on S3 buckets storing datasets; used KMS for key rotation and audit logs via CloudTrail.  
3. **Fine‑grained IAM & resource policies** – each tenant received a dedicated DynamoDB table with per‑tenant IAM roles, preventing data bleed.  
4. **Observability** – instrumented OpenTelemetry exporters to X-Ray and CloudWatch Logs; added automated anomaly detection on request latency/size.  
5. **Privacy by design** – implemented automatic redaction of PII in prompts using a Lambda layer that calls the AWS Comprehend PII detector before storage.

**Result**  
Within 30 days we achieved:  
- **Zero security incidents** reported during the public beta (vs. an industry average of ~4 per month).  
- **99.99 % API availability** with an RTO < 5 min for any tenant data recovery.  
- Cost saved by leveraging serverless Lambda + DynamoDB on‑demand: $0.12/1k requests vs. a dedicated EC2 fleet ($3.50/day).

**Reflection**  
Ownership drove the end‑to‑end pipeline; diving deep into IAM and encryption exposed hidden gaps early, preventing costly post‑launch fixes. The bar‑raiser expects this level of measurable impact and continuous learning from each sprint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
