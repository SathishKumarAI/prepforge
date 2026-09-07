---
qid: ing_0990e665f3__aws__local
question: 'Explain: Engineering — Jobs at Glean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 467
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:47:36-05:00'
sources: []
---

**Context & Challenge (S)**  
When I joined Glean’s product team, the engineering squad was responsible for building a *real‑time search layer* that surfaced relevant documents across an enterprise’s SaaS stack (Gmail, Confluence, Salesforce). The existing ingestion pipeline was batch‑based and lagged by 24 hrs, so customers complained that “search results were stale.”  

**Action (A)**  
I led a cross‑functional effort to redesign the architecture using *Amazon Kinesis Data Streams* for continuous change capture, *AWS Lambda* for lightweight transformation, and *Amazon OpenSearch Service* for indexing. I introduced *Lambda@Edge* to serve search queries from the nearest AWS region, cutting latency by 70 %. I also implemented a monitoring stack (CloudWatch metrics + Grafana dashboards) that surfaced SLA violations in real time.  

**Result (R)**  
Within three months, search freshness improved from 24 hrs to < 2 min, and click‑through rates on the Glean UI rose by **32 %** (from 4.1 % to 5.6 %). The new pipeline handled a peak of 15 M events/day with an average cost saving of $12K/month compared to the legacy batch jobs.  

**Leadership Principles & Take‑aways**  
- *Customer Obsession*: Built features that directly solved latency pain for end users.  
- *Dive Deep*: Analyzed event logs, identified bottlenecks in the ingestion path, and chose services that balanced performance with cost.  
- *Ownership*: Took responsibility from design to deployment, ensuring smooth hand‑off to Ops.  

**What a bar‑raiser looks for**  
- Clear ownership of scope and metrics.  
- Depth: Demonstrated understanding of AWS service trade‑offs (Kinesis vs. SQS, Lambda concurrency limits).  
- Quantified impact: 32 % lift in engagement + cost savings.  
- Learning from failure: Initially misestimated Lambda timeout; fixed by adding retry logic and CloudWatch alarms, turning a potential outage into an opportunity to strengthen resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
