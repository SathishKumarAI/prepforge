---
qid: ing_96260dbfed__aws__local
question: 'Explain: How do you evaluate a code-editing model before shipping it? Design
  the offline and online eval story for tab or agent edits.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 524
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:05:19-05:00'
sources: []
---

**Situation & Task**  
When I led the “Tab‑Assist” project at my previous company, we had a new code‑editing model that could auto‑complete or refactor snippets in an IDE. Before shipping to 1 M developers, I owned the end‑to‑end evaluation pipeline.

**Action – Offline Evaluation**  
*Requirements*: Detect functional correctness, preserve style, and avoid regressions.  
*Design*:  
- **Dataset**: Pull 200K real pull requests from GitHub, label with human‑verified edits (≈ 80 % correct).  
- **Metrics**: Accuracy of token prediction, BLEU for style similarity, *Edit‑Distance‑Weighted Recall* (EDWR) to capture semantic changes.  
- **Infrastructure**: Use **AWS SageMaker Pipelines** for reproducible training/validation runs; store datasets in **S3**, orchestrate with **Step Functions**.  
- **Scalability**: Parallelize inference across 16 GPU‑enabled EC2 Spot instances; cost ≈ $0.5k/month.

*Result*: The model achieved 92 % token accuracy and a 15 % improvement in EDWR over the baseline, reducing potential bugs by ~30 %.

**Action – Online A/B Test (Live)**  
- **Setup**: Deploy two versions via **AWS Lambda@Edge** behind CloudFront; route 10 % of IDE traffic to the new model.  
- **Metrics**: Time‑to‑completion, user click‑through on suggested edits, and post‑edit error rate (via automated linting).  
- **Safety Net**: If error rate > 5 %, auto‑rollback via CloudWatch alarms.

*Result*: After 48 h, the new model cut average edit time by 22 % and decreased lint errors by 18 %.  

**Result & Learning**  
The launch succeeded with a 99.9 % uptime SLA. I documented trade‑offs: heavier GPU usage vs. lower latency, and shared lessons on balancing speed and correctness—key for future models.  

> **Leadership Principles**: *Customer Obsession* (metrics from real devs), *Ownership* (end‑to‑end pipeline), *Dive Deep* (EDWR metric), *Bias for Action* (quick A/B rollback).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
