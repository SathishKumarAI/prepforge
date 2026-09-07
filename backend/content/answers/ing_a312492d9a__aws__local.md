---
qid: ing_a312492d9a__aws__local
question: 'Explain: LLM-as-Judge — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 467
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:33:52-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a proof‑of‑concept to replace manual code‑review scoring with an **LLM‑as‑Judge** service that evaluated pull requests for style, security, and performance. The goal was to cut review time by 40 % while maintaining audit quality.

**Action (Design & Implementation)**  
1. **Data pipeline** – Pull request diffs → S3 → Lambda → SageMaker endpoint.  
2. **LLM model** – Fine‑tuned Llama‑2 on a curated dataset of 15K labeled reviews; deployed via SageMaker Hosting for low‑latency inference.  
3. **Governance** – Results stored in DynamoDB, with audit logs in CloudTrail; Step Functions orchestrated retries and fallbacks to a rule‑based baseline if the LLM confidence < 0.6.  
4. **Scalability & Cost** – Auto‑scaling on Lambda concurrency (max 5k RPS), Spot instances for SageMaker (≈ 30 % savings). Estimated $3k/month vs $12k for human reviewers.

**Result**  
- Review turnaround dropped from **48 h to 14 h** (71 % reduction).  
- Accuracy of LLM judgments matched senior reviewers on **92 %** of cases, with a false‑positive rate of only 2.5 %.  
- Cost per PR evaluation fell from $12 to **$0.35**.

**Leadership Principles Reflected**  
- *Customer Obsession* – Delivered faster feedback for developers.  
- *Ownership* – Took end‑to‑end responsibility, including monitoring and continuous model tuning.  

**Bar‑raiser Takeaway**  
Showed deep dive into LLM internals, quantified impact on velocity and cost, and iterated after a false‑positive spike by augmenting the training set—illustrating learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
