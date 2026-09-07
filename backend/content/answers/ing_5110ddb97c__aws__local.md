---
qid: ing_5110ddb97c__aws__local
question: Tell me about your most significant failure. What happened, and what did
  you change afterward?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 352
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:28:10-05:00'
sources: []
---

**Situation & Task**  
At my previous startup I led the rollout of an AI‑driven recommendation engine for a SaaS product that promised to increase upsell revenue by 20 %. We used a custom TensorFlow model, hosted on EC2 spot instances and orchestrated with Docker Swarm.  

**Action (Ownership + Dive Deep)**  
When we hit production, the latency spiked to 1.8 s per request—three times higher than SLA—and the model accuracy dropped from 88 % in dev to 74 % live. I immediately:

1. **Diagnosed**: Enabled CloudWatch metrics and X-Ray tracing; discovered that batch inference jobs were queued during peak hours, causing back‑pressure.
2. **Redesigned**: Migrated to SageMaker endpoints with autoscaling and added a Redis cache (ElastiCache) for the top 10 % of queries.
3. **Automated**: Implemented CI/CD pipelines in CodePipeline that run sanity tests on every model retrain, ensuring dev‑prod parity.

**Result**  
Latency dropped to <400 ms, accuracy rebounded to 87 %, and upsell revenue grew by 18 % within two months—just shy of the target but a net $350K increase.  

**Learning & Bar‑Raiser Insight**  
I learned that **Ownership + Bias for Action** mean iterating on infrastructure as quickly as code. I now insist on end‑to‑end observability and treat production metrics as contractual guarantees, not optional extras.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
