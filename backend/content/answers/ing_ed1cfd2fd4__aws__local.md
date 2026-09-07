---
qid: ing_ed1cfd2fd4__aws__local
question: Your app is getting 429s from your LLM provider at peak traffic. How do
  you handle rate limits properly?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 423
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:14:33-05:00'
sources: []
---

**Situation / Task**  
At launch our recommendation engine was sending ~10 k LLM calls per minute to OpenAI. During traffic spikes (e.g., holiday sales) we hit their 429 limit and user requests stalled, hurting conversion rates.

**Action**  
1. **Rate‑limit guardrail:** Wrapped every outbound call in a token bucket (AWS Lambda + DynamoDB for state). Each token = one allowed request; refill rate set to the provider’s SLA.  
2. **Exponential back‑off & retry:** If 429 returned, we queued the request in an SQS DLQ and retried after *t* = 1 s × 2ⁿ (max 5 retries).  
3. **Graceful degradation:** For critical flows, we switched to a cached “fallback” model stored in Amazon SageMaker endpoints, so users still saw a recommendation.  
4. **Monitoring & alerts:** CloudWatch metrics on token bucket depletion + SQS queue depth triggered PagerDuty escalations.  
5. **Cost‑scaling:** Deployed the fallback endpoint on an *inf1.xlarge* instance (GPU) only during peak windows, then autoscaled down.

**Result**  
- 429 incidents dropped from ~30 % of requests to <0.2 %.  
- User latency stayed below 200 ms for 95 % of traffic.  
- Conversion rate improved by **4 pp** during the holiday window.  

**Leadership Principles Highlighted**  
*Customer Obsession* – ensured users never saw errors.  
*Ownership* – built a self‑healing, cost‑aware system rather than relying on vendor fixes.  

**Bar‑raiser Takeaway**  
Show depth by detailing token bucket math and back‑off strategy; quantify impact (4 pp lift); demonstrate learning from failure (initial 429 spike) and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
