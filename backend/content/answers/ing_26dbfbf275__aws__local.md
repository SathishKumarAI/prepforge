---
qid: ing_26dbfbf275__aws__local
question: 'Explain: SFT mechanics — Fine Tuning And Alignment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 431
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:53:40-05:00'
sources: []
---

**Situation & Task (Customer Obsession & Ownership)**  
At my last role I led a project to deploy an in‑house LLM for customer support. The model needed to reflect company tone and comply with data‑privacy rules, so we used *Supervised Fine‑Tuning* (SFT) followed by *Alignment*.

**Action (Dive Deep & Bias for Action)**  
1. **Data Pipeline** – Collected 500 k QA pairs from legacy tickets, labeled sentiment and policy compliance using a SageMaker Ground Truth workflow.  
2. **Fine‑Tuning** – Trained on an `hf/t5-base` checkpoint with HuggingFace’s Trainer, leveraging Spot Instances (p3.2xlarge) to cut compute cost by 60 %.  
3. **Alignment** – Implemented a reward model (RLHF) that penalizes policy violations; used SageMaker Neo to compile the fine‑tuned weights for inference on AWS Inferentia chips, achieving <30 ms latency per request.  

The result: response accuracy rose from 68 % to 93 %, while policy‑violation rate dropped to 0.1 %. Deployment cost decreased by 45 % versus a pure GPU cluster.

**Result (Deliver Results)**  
- **Scalability** – Auto‑scaling Lambda + SageMaker endpoint handled 10k concurrent users with 99.9 % availability.  
- **Cost & Trade‑offs** – Spot Instances + Neo compilation reduced spend; trade‑off was a slightly longer training time, mitigated by checkpointing every epoch.

**Bar‑raiser takeaway**  
I showed deep ownership of the pipeline, quantified impact (accuracy ↑25 pp, cost ↓45 %), and learned that early data labeling quality directly limits alignment effectiveness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
