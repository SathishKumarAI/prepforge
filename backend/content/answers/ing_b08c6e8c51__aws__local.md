---
qid: ing_b08c6e8c51__aws__local
question: How do you evaluate multimodal systems - understanding and generation?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 496
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:04:22-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team at a fintech startup to launch an AI‑driven customer support bot that combined text, voice, and image inputs. The goal was to improve response accuracy by 30 % while keeping latency under 1 s.

**Action (Technical)**  
- **Requirements & Design:** Defined evaluation criteria: *understanding* (intent recall/precision) and *generation* (BLEU/FID for text/images). Built a modular pipeline in SageMaker, using multimodal transformers (e.g., CLIP + T5) deployed on GPU‑optimized `ml.p3.2xlarge` instances.  
- **Data Pipeline:** Ingested 1 M labeled samples via Kinesis Data Streams → Lambda → S3. Trained models in distributed SageMaker training jobs, leveraging Spot Instances to cut cost by 40 %.  
- **Scalability & Availability:** Employed Elastic Load Balancer + Auto Scaling Groups for inference endpoints; used CloudWatch alarms to trigger scaling on CPU/GPU utilization >70 %.  
- **Cost & Trade‑offs:** Compared SageMaker vs. EKS with GPU nodes; chose SageMaker for lower ops overhead, accepting a 5 % higher per‑hour cost but overall savings due to rapid iteration.

**Result**  
After two sprints, intent recall rose from 72 % to 96 %, and generation BLEU improved from 0.45 to 0.73. Latency stayed <900 ms for 99th percentile traffic. Customer satisfaction scores increased by 18 pts, and we reduced support tickets by 27 %. The model was deployed in production with a 99.9 % uptime SLA.

**Reflection (Bar‑raiser notes)**  
- *Ownership:* I owned the entire ML lifecycle, from data ingestion to monitoring.  
- *Dive Deep:* I benchmarked multiple architectures, quantified trade‑offs, and chose the optimal mix of cost vs. performance.  
- *Learning from Failure:* Early trials with a single‑modal model failed to capture context; pivoting to multimodal architecture was a hard lesson that paid off.

**Leadership Principles** – Customer Obsession, Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
