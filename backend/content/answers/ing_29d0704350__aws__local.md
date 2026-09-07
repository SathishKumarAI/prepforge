---
qid: ing_29d0704350__aws__local
question: 'Explain: Appendix 2: Prompt engineering your tools'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 406
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:00:02-05:00'
sources: []
---

**Prompt Engineering Your AI Tools**

**Situation & Task (S)**  
At my previous role I led a team that built an internal chatbot for technical support. The existing LLM responses were generic and often irrelevant, causing a 35 % drop in first‑contact resolution.

**Action (A)**  
I introduced **prompt‑engineering best practices**:  

1. **Template Library** – defined reusable prompt templates per intent.  
2. **Dynamic Context Injection** – used Amazon DynamoDB to store user context and inject it into prompts via Lambda.  
3. **Feedback Loop** – integrated CloudWatch metrics and an A/B test harness (SageMaker Experiments) to measure accuracy vs. latency.

The architecture leveraged **Amazon Bedrock** for model inference, **API Gateway** + **Lambda** for orchestration, and **Step Functions** for multi‑step reasoning pipelines. Cost was kept under $0.02 per request by limiting prompt length (<300 tokens).

**Result (R)**  
Within three months:  

- First‑contact resolution rose from 65 % to **87 %** (≈22 % lift).  
- Average response time dropped 15 %.  
- Model usage cost decreased by 18 % due to token savings.

**Leadership Principles Highlighted**

- **Customer Obsession** – tuned prompts to deliver accurate, context‑aware answers.  
- **Dive Deep & Ownership** – built the end‑to‑end pipeline, monitored metrics, and iterated on failure cases.  

**Bar‑raiser cues**: clear ownership of data pipelines, quantified impact (resolution rate), deep dive into token economics, and learning loop from A/B failures to refine prompts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
