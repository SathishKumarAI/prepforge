---
qid: ing_04c8663fe2__aws__local
question: 'Explain: LLM-as-Judge Across Different Domains — Ai Evals Comprehensive
  Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 439
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:36:48-05:00'
sources: []
---

**Situation & Task (Amazon Leadership Principles: Ownership, Customer Obsession)**  
I led a cross‑functional team to build an *LLM‑as‑Judge* platform that scores AI models in finance, healthcare, and autonomous driving—domains where regulatory compliance and safety are non‑negotiable. The goal was to reduce evaluation cycle time from 4 weeks to 1 week while keeping accuracy > 95 % versus human experts.

**Approach (Dive Deep, Bias for Action)**  
I mapped each domain’s legal/ethical constraints into a *policy graph* stored in DynamoDB and used SageMaker Pipelines to orchestrate data ingestion, preprocessing, and inference. A custom “judge” LLM (trained on 10 M policy‑annotated samples) runs as an AWS Lambda layer behind API Gateway for low‑latency scoring. For high‑throughput batch evaluation, we spin up EC2 Spot Instances with GPU‑accelerated containers; Auto Scaling keeps cost < $0.50 per 1,000 predictions.

**Result (Deliver Results)**  
- Evaluation time cut from 28 days to 7 days (–75 %).  
- Accuracy vs. human experts: 96.3 % overall (finance = 97.1 %, healthcare = 95.8 %, autonomous = 94.5 %).  
- Cost per evaluation dropped 60 % thanks to spot instances and Lambda’s pay‑per‑invocation model.

**Learnings & Bar‑Raiser Signals**  
I documented every failure (e.g., mis‑labeling in the healthcare policy set) and added a continuous feedback loop that retrains the LLM on new edge cases, showing true ownership. I also shared the architecture repo with open‑source contributors to foster transparency—a hallmark of Amazon’s “Invent & Simplify” principle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
