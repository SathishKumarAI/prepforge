---
qid: ing_00ec8aa8b1__aws__local
question: 'Explain: Monthly Cost Projection — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 406
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:26:34-05:00'
sources: []
---

**Situation / Task**  
I was asked to forecast the monthly cost for a new conversational AI that would handle 10 M utterances per month in production. The goal was to keep spend under $200k while ensuring 99.9% availability.

**Action**  
1. **Data‑driven sizing** – I collected historical logs (avg 30 s inference, 20 MB payload) and extrapolated to the target volume.  
2. **Architecture** – *Amazon SageMaker* for model hosting (multi‑AZ endpoint), *AWS Lambda* for lightweight orchestration, *API Gateway* as a throttle layer, and *DynamoDB* for session state.  
3. **Cost model** –  
   - SageMaker: 10 M invocations × $0.0001 = $1k + 24 h of GPU instances (p3.2xlarge) at $3/h → ~$2160/month.  
   - Lambda & API Gateway: ~$200/month.  
   - DynamoDB and S3 backups: ~$100/month.  
4. **Optimization** – Deployed *SageMaker Neo* for edge inference, reducing GPU hours by 30%, cutting cost to $150k/month.  

**Result**  
The final projection was **$145 k/month**, a 28% savings over the baseline, while maintaining latency <300 ms and 99.9% uptime (verified via CloudWatch metrics). I documented assumptions in an internal wiki, allowing future teams to adjust for new models or traffic spikes.

---

*Leadership Principles:* **Ownership** – led end‑to‑end cost planning; **Dive Deep** – built a granular cost model; **Bias for Action** – delivered the projection within 2 weeks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
