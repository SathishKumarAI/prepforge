---
qid: vq_c72b1d708d__aws__local
question: Prompt Engineering ?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 222
output_tokens: 397
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:13:46-05:00'
sources: []
---

**Prompt Engineering for a Customer‑Facing AI Chatbot**

**Situation & Task**  
At my previous role I led the launch of an AI chatbot that handled $2 M in annual revenue from subscription upgrades. The bot’s success hinged on prompt quality—each interaction could either convert or churn customers.

**Action**  
1. **Ownership & Bias for Action:** Built a “Prompt‑Lifecycle” pipeline in AWS (Step Functions → Lambda → DynamoDB) to version, test, and roll out prompts at 10× speed.  
2. **Dive Deep:** Instrumented prompts with Amazon CloudWatch metrics—latency, success rate, and NPS score per prompt. Used SageMaker’s “Inference Recommender” to auto‑tune embeddings for top‑5 most common intents.  
3. **Invent & Simplify:** Created a reusable Prompt‑Template DSL stored in S3; Lambda parses templates into OpenAI API calls, reducing developer effort by 70 %.  
4. **Customer Obsession:** Ran A/B tests on 1,000 users/day; the optimized prompts increased conversion rate from 18 % to 27 % (Δ9 pp) and reduced average chat time by 32 %.

**Result**  
- $0.75 M incremental revenue in Q3.  
- 99.5 % prompt‑execution uptime via multi‑AZ deployment.  
- Cost per inference cut from $0.10 to $0.04 (40 % savings).  

**Learnings**  
Bar‑raisers look for ownership, deep data dives, quantified impact, and iterative learning—exactly what this project delivered.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
