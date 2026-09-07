---
qid: ing_498f5a655b__aws__local
question: How do I evaluate an LLM or RAG system in production?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 448
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:11:49-05:00'
sources: []
---

**Situation**  
At my previous role I launched a customer‑support chatbot that used an LLM + RAG pipeline on AWS. The business required **99.9 % uptime and ≤ 0.5 s latency** while keeping the cost under $15k/month.

**Task**  
I was responsible for designing a production‑ready evaluation framework that could surface real‑time quality, performance, and cost metrics without disrupting users.

**Action**  
1. **Telemetry & A/B Testing** – Instrumented every request with CloudWatch Logs + X-Ray traces; used Amazon SageMaker Feature Store to collect *response latency*, *token count*, *retrieval hit rate*, and *customer sentiment* (via Comprehend).  
2. **Health Dashboards** – Built a Grafana‑on‑EKS dashboard pulling from Prometheus exporters on the inference container and CloudWatch metrics for RAG cache hits (ElastiCache Redis) and S3 retrieval times.  
3. **Automated Regression Tests** – Created an *inference benchmark* suite in Lambda that ran every 30 min, comparing new model versions against a golden dataset; failures triggered a rollback via CodePipeline.  
4. **Cost‑Efficiency Loop** – Monitored cost per inference using Cost Explorer API and set up alerts to trigger a switch from on‑demand to spot instances when utilization exceeded 70 %.  

**Result**  
The framework reduced SLA violations by **48 %** (from 1.2 s to 0.6 s avg latency) and cut monthly spend by **22 %** while maintaining the same accuracy (+99.7 % F1 on intent detection). I presented these metrics to leadership, demonstrating *Ownership* and a data‑driven *Dive Deep* into system behavior.

> **Bar‑raiser note:** Look for evidence of ownership, deep technical insight, quantified impact, and learning from failures (e.g., the rollback logic).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
