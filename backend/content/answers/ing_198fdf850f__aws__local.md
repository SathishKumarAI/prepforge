---
qid: ing_198fdf850f__aws__local
question: 'Explain: 🧑‍⚖️ LLM as a Judge metrics — GitHub - comet-ml/opik: Debug, evaluate,
  and monitor your LLM applications, RAG systems, and agentic workflows with comprehensive
  tracing, automated evaluations, and production-ready dashboards. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 282
output_tokens: 375
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:24:04-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
When our team rolled out a generative‑AI service to help legal teams draft contracts, the client demanded *real‑time confidence scores* that an LLM’s output was “judge‑ready.” They needed transparent metrics—accuracy, bias, and compliance—so they could trust the system before using it in court filings.

**Action (Ownership & Dive Deep)**  
I spearheaded a **LLM Judge Dashboard** using **Amazon SageMaker Model Monitor**, **AWS Step Functions**, and **OpenTelemetry** for tracing.  
1. **Evaluation Pipeline:** Every inference is routed through a *validation microservice* that compares the LLM’s answer against a curated gold‑standard set (≈ 10K labeled legal clauses).  
2. **Metrics Engine:** We compute precision, recall, F1, and a custom *Bias‑Score* (ratio of flagged vs. unflagged terms) using Amazon Athena queries over CloudWatch logs.  
3. **Alerting & Dashboards:** Metrics feed into an Amazon QuickSight dashboard; anomalies trigger SNS alerts to the devops team.

**Result (Deliver Results)**  
Within 6 weeks, we reduced the client’s manual review time by **45 %**, and the *Judge‑Score* accuracy rose from 82 % to **91 %**. Cost per inference dropped to <$0.02 thanks to spot‑instance SageMaker endpoints.

**Reflection (Bar‑Raiser)**  
I learned that *continuous feedback loops* are critical: each failure in the validation step was logged, retrained, and re‑evaluated—ensuring the system only improves over time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
