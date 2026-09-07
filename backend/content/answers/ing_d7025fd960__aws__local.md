---
qid: ing_d7025fd960__aws__local
question: 'Explain: Web Servers and Hosting — 11 Steps to Go From Junior to Senior
  Developer'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 506
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:25:28-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* I was promoted from a junior to senior ML engineer at a fintech startup that had just migrated its inference API to the cloud. The team struggled with latency spikes and cost overruns.

*Task:* Build a production‑grade, scalable web‑server stack that serves 10k concurrent requests daily while keeping < 95 % SLA for response time.

*Action:*  
1. **Requirements Deep‑Dive** – gathered KPI targets (latency, throughput, cost).  
2. **Architectural Blueprint** – chose **Amazon API Gateway + Lambda@Edge** for edge routing, **AWS Fargate** for containerized model inference, and **EFS** for shared weight files.  
3. **Security & IAM** – least‑privilege roles, VPC endpoints to keep traffic private.  
4. **Observability** – CloudWatch metrics + X-Ray tracing; set alarms on 99th percentile latency.  
5. **CI/CD Pipeline** – CodePipeline → Docker image build → ECS task definition update.  
6. **Auto‑Scaling** – target CPU < 70 % → scale out; target memory < 80 %.  
7. **Cost Optimization** – reserved instances for baseline, spot for burst.  
8. **Disaster Recovery** – multi‑AZ deployment, automated backups of EFS.  
9. **Performance Testing** – k6 load tests; iterated on cold start latency by adding Lambda warmers.  
10. **Documentation & Knowledge Transfer** – wrote runbooks, hosted lunch‑and‑learn sessions.  
11. **Post‑Go‑Live Review** – tracked metrics: latency dropped from 350 ms to 120 ms (−65 %), cost fell 30 % year‑over‑year.

*Result:* Achieved 99.8 % SLA, cut inference cost by $12k/month, and earned a “Top Contributor” award. The architecture now supports 100x traffic growth with minimal ops overhead.  

**Bar‑raiser signals:** ownership of end‑to‑end flow, deep dive into trade‑offs (cost vs latency), quantified impact, and continuous learning from load‑test failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
