---
qid: ing_83b9217215__aws__local
question: 'Q32: How do you handle rate limits and quotas?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 413
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:22:44-05:00'
sources: []
---

**Customer Obsession | Ownership**

*Situation:* In a recommendation service I built for a media‑streaming app, the third‑party AI model provider imposed a hard limit of 5 k requests per minute and a daily quota of 1 M calls. During peak holiday traffic we hit the cap in under 2 minutes, causing a 30 % drop in recommendation freshness.

*Task:* Design a resilient architecture that respects quotas while maintaining user experience.

*Action:*  
1. **Rate‑shaping** – implemented an application‑level token bucket (AWS Lambda + DynamoDB for state) to throttle outbound calls to the provider.  
2. **Back‑off & retry** – used exponential back‑off with jitter, logging failures in CloudWatch and alerting via SNS when error rates exceeded 5 %.  
3. **Caching & batch inference** – cached top‑10 predictions per user in ElastiCache (Redis) for 15 min; aggregated low‑frequency requests into a nightly batch job on SageMaker to pre‑warm the cache.  
4. **Quota monitoring** – leveraged AWS Cost Explorer API and CloudWatch metrics to track quota consumption in real time, triggering an auto‑scaling policy that spun up additional Lambda concurrency during off‑peak hours.

*Result:* Within 48 h we reduced out‑of‑quota incidents by **92 %**, improved recommendation latency from 350 ms to 210 ms, and cut API call costs by **18 %**. The solution also provided a clear audit trail for compliance.  

*Reflection:* I learned that proactive quota modeling combined with adaptive caching can turn a hard limit into an opportunity for optimization—exactly what Amazon’s “Invent & Simplify” principle demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
