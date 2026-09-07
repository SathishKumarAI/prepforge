---
qid: ing_1ae3bee08d__aws__local
question: 'Explain: Handling 200-Page Documents — Document Intelligence'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 453
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:27:09-05:00'
sources: []
---

**Situation & Task**  
At a previous fintech client I was tasked to ingest quarterly audit reports (≈200 pages each) and surface key compliance metrics for the risk team in real time. The baseline solution involved manual OCR, leading to >30 % error rate and 5‑day turnaround.

**Action**  
1. **Architecture** – Store PDFs in S3, trigger a Lambda on upload that starts an AWS Step Functions state machine.  
2. **Document Intelligence** – Use **Textract** (Document Text Detection + Table & Form Extraction) followed by **Comprehend Medical** for entity recognition and **Custom Comprehend** for domain‑specific terminology.  
3. **Data Lake** – Persist structured JSON in DynamoDB for low‑latency queries; run Athena on the raw Textract output for ad‑hoc analytics.  
4. **Cost & Scale** – Spot‑instance Lambda concurrency capped at 20, auto‑scaling SQS queue, and S3 lifecycle to Glacier after 30 days.  
5. **Quality Loop** – Implement a feedback Lambda that flags confidence <0.8; these PDFs are routed to an AWS SageMaker human‑in‑the‑loop model for correction.

**Result**  
Processing time dropped from 5 days to <2 hours, error rate fell below 3 %, and the risk team could generate compliance dashboards in minutes (vs. days). Cost per document decreased by 40 % due to efficient use of Spot Lambdas and Glacier.

---

### Leadership Principles  
- **Customer Obsession** – Delivered instant insights that changed risk decisions.  
- **Ownership** – Designed end‑to‑end pipeline, maintained SLA, and iterated on feedback loops.  

**Bar‑raiser cues**: Clear ownership narrative, deep dive into AWS services chosen, quantified impact (time & cost), and learning from the manual OCR failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
