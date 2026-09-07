---
qid: ing_362216b129__aws__local
question: 'Explain: Creating Function-Calling Endpoints — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 424
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:27:06-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the launch of a *function‑calling API* that allowed third‑party agents to invoke internal ML models (e.g., summarization, sentiment). The goal was to reduce latency for 1 M daily calls while keeping costs under $50k/month.

**Action – Design & Execution**  
- **Architecture:** Serverless Lambda endpoints behind an Application Load Balancer with a 30‑second timeout.  
- **AWS Services:** API Gateway (request throttling), Step Functions (orchestration for multi‑step inference), DynamoDB (audit log, caching), and Secrets Manager (model credentials).  
- **Scalability/Availability:** Auto‑scaling Lambda + ALB guarantees 99.95 % SLA; DynamoDB Global Tables provide cross‑region failover.  
- **Cost & Trade‑offs:** Chose Lambda over EC2 to avoid idle capacity, resulting in ~70 % cost savings versus a reserved instance baseline. Introduced an optional *cold start* mitigation layer (Provisioned Concurrency) for critical paths.

**Result**  
- 99.9 % success rate, average latency 120 ms vs the prior 350 ms.  
- Reduced operational overhead by 40 % through automated CI/CD with CodePipeline and CloudWatch alarms.  
- Achieved a 25 % reduction in monthly spend while supporting 3× traffic growth.

**Reflection (Bar‑raiser Lens)**  
I owned the entire pipeline, dug deep into Lambda cold‑start logs to identify bottlenecks, quantified impact via A/B testing, and learned that early throttling rules can preempt catastrophic spikes. This experience reinforces *Customer Obsession* (fast, reliable service) and *Ownership* (end‑to‑end responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
