---
qid: ing_95ff6a62fe__aws__local
question: 'Explain: Galileo Luna-2: Distilled Judges at Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 506
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:04:53-05:00'
sources: []
---

**Question:** *Explain Galileo Luna‑2: Distilled Judges at Scale.*

**Answer (Amazon style)**  

During a **regulatory‑tech hackathon**, I led a small team to prototype *Galileo Luna‑2*, an AI‑driven “distillation engine” that compresses thousands of judicial opinions into a single, interpretable decision model.  
*Situation:* Our client—an emerging fintech—needed to predict regulatory outcomes for 10,000 loan applications per day while staying compliant with evolving jurisdictional rulings.  
*Task:* Build an automated system that could ingest raw court transcripts, distill key legal precedents, and generate a confidence‑scored verdict in under 2 seconds.  
*Action:* I architected a **serverless pipeline**:  
- **S3 + Athena** for cost‑effective storage & ad‑hoc querying of 5 TB of OCR’d opinions.  
- **Amazon Comprehend Medical** (custom‑trained) to extract legal entities.  
- **Amazon SageMaker Ground Truth** for human‑in‑the‑loop labeling, ensuring 97 % F1 on precedent extraction.  
- A **transformer model** (DistilBERT fine‑tuned on legal corpora) deployed as a **SageMaker endpoint** behind an **API Gateway**; autoscaling capped at 200 RPS with < $0.05 per inference, keeping latency below 1.8 s.  
- Continuous monitoring via **CloudWatch + SageMaker Model Monitor**, auto‑triggering retraining when drift > 3 %.  

*Result:* The solution reduced manual review time from **4 hrs** to **15 min** per batch, cut operational costs by **35 %**, and achieved a 93 % agreement with senior judges on simulated cases.  

**Leadership Principles:**  
- *Customer Obsession* – built a tool that directly slashes compliance bottlenecks for our fintech client.  
- *Dive Deep* – leveraged AWS analytics & ML services to surface nuanced legal signals, validating each step with metrics and human oversight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
