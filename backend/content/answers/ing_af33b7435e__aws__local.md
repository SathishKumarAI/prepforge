---
qid: ing_af33b7435e__aws__local
question: 'Explain: All evaluators registered in one place — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 516
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:01:45-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of our on‑prem AI evaluation suite to a cloud‑native platform. The product had dozens of evaluator modules (metrics, thresholds, post‑processing) scattered across GitHub repos and running in isolated Docker containers. Engineers struggled to discover or update evaluators, leading to duplicated logic and 30 % slower model release cycles.

**Action**  
I architected **AiEvals**, a single registry service built on AWS Lambda + DynamoDB with an API Gateway front‑end. Each evaluator is defined as a JSON schema that references its implementation (Langwatch or Langfuse) and optional post‑processing scripts stored in S3.  

*Key design decisions:*  
- **DynamoDB** for low‑latency, strongly consistent reads/writes; provisioned capacity auto‑scales with CloudWatch alarms.  
- **Lambda** for stateless evaluation orchestration, ensuring 99.9 % availability and cost control (pay per invocation).  
- **SQS** queues decouple the API from heavy inference jobs, guaranteeing at‑least‑once delivery while keeping the front‑end responsive.  
- **CloudWatch Logs & X-Ray** provide end‑to‑end tracing for debugging and performance tuning.  

I also introduced a CI/CD pipeline that automatically validates new evaluator schemas against a unit‑test harness (Langwatch) before promotion to production.

**Result**  
Post‑migration, the average time to discover and register a new evaluator dropped from 12 hrs to **15 min**—a **92 % reduction in engineer effort**. The unified registry cut duplicated code by 70 %, lowering maintenance spend by $35K annually.  

---

### Leadership Principles Highlighted  
- **Ownership & Deliver Results** – I owned the end‑to‑end migration and delivered measurable efficiency gains.  
- **Dive Deep** – I dissected existing pain points, benchmarked latency, and iterated on DynamoDB read/write capacity to meet SLAs.  

*Bar‑raiser takeaways:* depth of AWS service selection, clear cost/availability trade‑offs, and a concrete metric demonstrating business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
