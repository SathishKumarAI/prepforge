---
qid: ing_b0371e7f49__aws__local
question: 'Explain: Cost model — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 476
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:03:47-05:00'
sources: []
---

**Leadership Principles:**  
*Customer Obsession & Ownership* – I built a cost‑modeling tool that lets AI ops teams see how much they spend on GPU compute in real time.  

**Situation / Task** – In 2023 our AI research wing was launching a new “Computer Use Agent” (CUA) that ran inference jobs across hundreds of EC2 G4 instances. The team had no visibility into per‑instance cost, so budgets were blown by 30 % month‑over‑month.

**Action** – I owned the solution:  
1. **Data ingestion:** A Lambda triggered by CloudWatch Events on each instance’s `DescribeInstances` output pushed tags and hourly usage to DynamoDB.  
2. **Cost calculation:** A scheduled Glue job queried AWS Cost Explorer API, joined it with our inventory table, and produced a per‑CUA cost metric.  
3. **Visualization & alerting:** I built an Athena‑backed Athena query that fed QuickSight dashboards; alerts were sent via SNS when spend exceeded $2 k/hr.  

**Result** – Within two weeks of deployment:  
* Monthly GPU spend fell from $15 k to $10 k (33 % reduction).  
* The team could instantly pause an outlier instance, saving $1.5 k in a single sprint.  
* I documented the pipeline and added unit tests that cover 95 % of data paths, making it a reusable template for other AI workloads.

**Bar‑raiser cues:**  
- **Ownership:** Took end‑to‑end responsibility, from design to ops.  
- **Dive Deep:** Leveraged Cost Explorer’s granular API and DynamoDB indexing to keep latency <2 s per query.  
- **Quantified Impact:** Delivered a 33 % cost saving with measurable metrics.  
- **Learning from Failure:** Initial Lambda had cold‑start delays; I switched to containerized Lambdas, cutting start time by 40 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
