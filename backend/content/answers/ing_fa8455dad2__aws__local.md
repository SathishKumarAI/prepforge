---
qid: ing_fa8455dad2__aws__local
question: 'Explain: A. Customer support — Building Effective AI Agents \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 544
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:44:52-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: My team was tasked with launching an AI‑powered customer support agent for a global e‑commerce platform that handled 4 M tickets/month. The goal was to cut first‑response time (FRT) by 60 % and improve CSAT.

*Task*: Design a scalable, low‑latency solution that could understand intent across 30+ languages and integrate with our existing ticketing system.

*Action*:  
1. **Requirements & Deep Dive** – I mapped user journeys, identified high‑volume pain points, and set a KPI: FRT < 2 s for 90 % of tickets.  
2. **Design** – Leveraged **Amazon SageMaker** for fine‑tuning Anthropic’s Claude models, wrapped in **AWS Lambda** + **API Gateway** to serve instant responses. For multilingual support, I used **Translate API** and a custom NLU pipeline built on **Amazon Comprehend Custom**.  
3. **Scalability & Availability** – Deployed the Lambda layer across three AZs with provisioned concurrency (200 req/s) and autoscaling based on CloudWatch metrics. Implemented **AWS Step Functions** for fallback to human agents, ensuring 99.9% uptime.  
4. **Cost & Trade‑offs** – Optimized by caching top intents in **ElastiCache Redis** (30 % cost reduction) while accepting a slight increase in cold‑start latency.

*Result*: FRT dropped from 8.5 s to 1.7 s, CSAT rose from 82 % to 91 %, and we saved $120k/month on support staffing. The solution is now used across all regions and scales with traffic spikes of up to 10× during promotions.

**Bar‑raiser cues**  
- **Ownership**: I led cross‑functional squads, drove the full delivery cycle, and documented rollback plans.  
- **Dive Deep**: Detailed latency analysis revealed a bottleneck in intent extraction; solving it required re‑architecting the NLU pipeline.  
- **Quantified Impact**: 60 % FRT reduction, 9 % CSAT lift, $120k/month cost savings.  
- **Learning from Failure**: Early tests showed high false positives; we iterated on the intent classifier and added human review loops before production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
