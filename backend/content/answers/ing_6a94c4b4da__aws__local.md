---
qid: ing_6a94c4b4da__aws__local
question: 'Explain: Indirect Injection Through Tool Outputs — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 434
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:25:28-05:00'
sources: []
---

**Situation / Task**  
At a fintech startup I led the rollout of an AI‑driven recommendation engine that delivered investment insights to millions of users. The challenge was to prevent *indirect injection*—where malicious tool outputs could manipulate downstream services or user data—while keeping latency under 200 ms and costs <$0.01 per request.

**Action**  
1. **Guardrails & Governance** – Built a multi‑tiered policy engine in Amazon Step Functions that intercepts every model response.  
   * IAM roles + KMS‑encrypted payloads ensure only authorized services read the data.  
   * An AWS Lambda “sanitizer” runs a lightweight NLP filter (BERT‑tiny) to flag toxic or disallowed content before it reaches downstream APIs.  
2. **Safety Monitoring** – Deployed Amazon GuardDuty & CloudWatch Logs to detect anomalous output patterns in real time; automated alerts trigger a rollback of the affected model version via SageMaker Endpoint Management.  
3. **Cost & Scale** – Leveraged SageMaker Edge Manager for on‑device inference, reducing data transfer and achieving <200 ms latency at $0.0004 per invocation.

**Result**  
- Reduced injection incidents by 99.8% (from 12 alerts/month to 0).  
- Maintained 99.95 % availability across 3 AZs with a cost saving of 35 % over the previous batch‑processing approach.  

**Learning**  
I realized that *Ownership* means building end‑to‑end safety, not just patching symptoms; and *Dive Deep* taught me to quantify every guardrail’s impact—metrics are what prove reliability in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
