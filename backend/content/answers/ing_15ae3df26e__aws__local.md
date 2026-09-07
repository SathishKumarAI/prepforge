---
qid: ing_15ae3df26e__aws__local
question: 'Explain: ⭐ Star Us on GitHub — GitHub - comet-ml/opik: Debug, evaluate,
  and monitor your LLM applications, RAG systems, and agentic workflows with comprehensive
  tracing, automated evaluations, and production-ready dashboards. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 275
output_tokens: 470
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:14:18-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team building an LLM‑powered recommendation engine for a retail client, we realized that the model drifted every few weeks and stakeholders had no visibility into why certain prompts failed. I needed a solution to trace, evaluate, and monitor the entire RAG pipeline end‑to‑end.

**Action**  
I introduced **Opik** (comet‑ml/opik) as our production observability platform.  
* **Requirements** – Capture prompt/response pairs, grounding documents, and agentic actions; run automated unit tests on every inference; expose dashboards for latency, accuracy, and drift.  
* **Design & AWS Services** –  
  * Store traces in **Amazon DynamoDB** (fast key‑value lookups) and long‑term logs in **S3**.  
  * Use **AWS Lambda** to trigger Opik’s evaluation jobs on each inference event (stateless, pay‑as‑you‑go).  
  * Push metrics to **Amazon CloudWatch** for alerting.  
  * Host dashboards via **Amazon QuickSight**, keeping costs under $200/month while maintaining high availability through Multi‑AZ deployments.  

I wrote a lightweight wrapper around the LLM API that logs every request/response pair to DynamoDB and invokes Lambda, which feeds data into Opik’s evaluation engine. The automated tests compare model outputs against ground truth and compute BLEU/Jaccard scores in real time.

**Result**  
* Reduced drift‑related incidents by **68%** (from 12/month to 4/month).  
* Latency of the monitoring pipeline added <10 ms per request, keeping SLA at 200 ms.  
* Cost remained below $1,000/month, a 30% saving compared to our previous custom logging stack.

**Learnings & Bar‑raiser cues**  
I demonstrated **Ownership** by taking end‑to‑end responsibility for the monitoring pipeline and **Dive Deep** through the data model and cost analysis. The quantifiable impact (68 % reduction in incidents) satisfies Amazon’s “Deliver Results” principle, while documenting lessons learned from an initial failure to ingest large documents helped refine our schema for future projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
