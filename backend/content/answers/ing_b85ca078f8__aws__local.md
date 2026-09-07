---
qid: ing_b85ca078f8__aws__local
question: How is structured output actually enforced at the serving layer, and what
  does it cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 386
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:21:02-05:00'
sources: []
---

**Leadership Principles:** *Ownership* + *Dive Deep*

**Situation / Task**  
I was asked to guarantee that every inference from our GPT‑style model returned a JSON payload matching a strict business schema (e.g., `{order_id, items[], total}`) while keeping latency < 200 ms.

**Action**  
1. **Serve with SageMaker Real‑Time Endpoint** – the model outputs raw text.  
2. **Post‑processing Lambda** – runs immediately after inference; it parses the text, validates against a JSON schema stored in DynamoDB (versioned), and injects missing fields with defaults.  
3. **Schema enforcement** – if validation fails, Lambda returns an HTTP 422 with a deterministic error object; otherwise it forwards the cleaned payload to downstream services via API Gateway + EventBridge.  
4. **Cost & scaling** – SageMaker endpoint on `ml.m5.large` (≈$0.10/hr) handles burst traffic; Lambda scales automatically (~$0.20/1M invocations). DynamoDB schema store adds negligible cost (<$1/month).  

**Result**  
- 99.9 % of responses met the schema without manual intervention.  
- Latency stayed at 180 ms avg, meeting SLA.  
- Operational cost dropped from $15k/month (manual QC) to <$2k/month.

**Bar‑raiser notes:** I owned the end‑to‑end flow, dove into the exact byte‑level validation logic, quantified impact with clear metrics, and iterated on the Lambda error handling after a false‑positive spike in early tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
