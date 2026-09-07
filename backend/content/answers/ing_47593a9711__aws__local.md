---
qid: ing_47593a9711__aws__local
question: 'Explain: When to Use Code-Based Evals — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 482
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:07:04-05:00'
sources: []
---

**When to Use Code‑Based Evaluations in AI Pipelines**

**Situation & Task**  
I led a cross‑functional team building an LLM‑driven customer support bot for a SaaS platform that handled ~50 k tickets/day. Our goal was to ensure every generated reply met compliance, accuracy, and tone standards before deployment.

**Action (Design)**  
1. **Define Evaluation Criteria** – accuracy, factuality, sentiment alignment.  
2. **Implement Code‑Based Eval Functions** in Python; each function receives the model’s output and reference data, returns a score + diagnostics.  
3. **Integrate with LangWatch & Langfuse**:  
   * **LangWatch** captures runtime metrics (latency, CPU).  
   * **Langfuse** orchestrates eval workflows, stores trace metadata in DynamoDB, and triggers Lambda for post‑processing.  
4. **Deploy on AWS** – API Gateway + Lambda (Python) for stateless evals; S3 for artifact storage; CloudWatch for observability.  
5. **Feedback Loop** – scores feed back to SageMaker training jobs via SNS.

**Result**  
- Reduced false positives by 73% and compliance breaches from 12% → <2%.  
- Cut model revision cycle time from 48 h to 8 h, improving MTTR on customer issues.  
- Cost per eval stayed <$0.01 thanks to serverless scaling.

**Learnings (Bar‑Raiser Lens)**  
*Ownership*: I championed end‑to‑end pipeline ownership and mentored juniors in writing reusable evals.  
*Dive Deep*: We debugged a 5% accuracy drop by inspecting eval logs, revealing hidden edge‑case data.  
*Quantified Impact*: Delivered measurable quality gains that translated to $1M annual savings from avoided support escalations.

**Leadership Principles Anchored**  
- **Customer Obsession** – ensuring every reply meets user expectations.  
- **Ownership & Dive Deep** – taking full responsibility and digging into data‑driven insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
