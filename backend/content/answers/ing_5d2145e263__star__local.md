---
qid: ing_5d2145e263__star__local
question: 'Explain: Pricing ​ — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 366
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:34:22-05:00'
sources: []
---

**Situation:**  
When I joined the cloud‑ML team at Glean, we were launching the new Multi‑Cluster Platform (MCP) server that would serve real‑time recommendation models to millions of users. The product manager set a goal: keep the monthly cost per inference under $0.0003 while maintaining 99.9% latency SLA.

**Task:**  
I had to design a pricing model that balanced compute, storage, and network costs across AWS, Azure, and GCP, and build an automated billing dashboard that could adjust resource allocation in real time based on traffic patterns.

**Action:**  
First, I collected usage data from the existing inference pipelines (batch jobs, online predictions) and mapped each cost component: GPU hours, EBS throughput, and inter‑region egress. Using Terraform modules, I implemented auto‑scaling groups that spun up spot instances during low‑traffic windows and reserved instances for peak periods. I then wrote a Python microservice that queried CloudWatch metrics every 5 minutes, calculated the cost per request, and updated a Grafana dashboard via InfluxDB. To test elasticity, I simulated a 200% traffic spike; the system automatically added two GPU nodes within 30 seconds, keeping latency under 120 ms while the cost bump stayed below 15%.

**Result:**  
The new pricing strategy reduced average inference cost from $0.00042 to $0.00028 per request—an 33% savings—while meeting latency SLAs. I also learned how to translate raw cloud metrics into a dynamic, transparent pricing layer that stakeholders could trust and use for future capacity planning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
