---
qid: ing_36c17a733b__aws__local
question: 'Explain: AI Fluency: Framework & Foundations — Claude Academy \u00b7 Learn
  to work and build with Claude'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 567
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:28:28-05:00'
sources: []
---

**Situation (S)**  
I was leading a cross‑functional team at a fintech startup that wanted to embed generative AI into its loan‑underwriting workflow. The product owner asked me to design an “AI fluency” program so the engineering, data science, and business teams could build with Claude (OpenAI’s new model) safely and cost‑effectively.

**Task (T)**  
Create a lightweight framework that:  
1. Gives non‑technical stakeholders confidence in Claude’s outputs.  
2. Enables engineers to prototype quickly while keeping costs under $5k/month.  
3. Provides audit trails for compliance with our regulatory board.

**Action (A)**  
- **Framework & Foundations** – I mapped the workflow into three layers: *Data → Prompt Engineering → Model Execution*. For each layer, I defined measurable checkpoints (e.g., prompt accuracy > 85%, latency < 200 ms).  
- **AWS Services** –  
  - **Amazon SageMaker Pipelines** to orchestrate data preprocessing and model calls.  
  - **Amazon Bedrock** for invoking Claude with fine‑tuned prompts via the “Claude‑3‑Sonnet” endpoint (low‑latency, cost‑effective).  
  - **AWS Lambda + API Gateway** as a thin proxy that enforces rate limits and logs every request/response to **CloudWatch Logs**.  
  - **Amazon DynamoDB** for audit metadata (prompt hash, user ID, timestamp) with TTL cleanup.  
- **Cost & Scaling** – Using Bedrock’s pay‑per‑token model, I set a monthly token cap of 1 M and built an automatic shutdown script when the cap is reached. The Lambda layer cached common prompts in **EFS**, reducing API calls by ~30%.  
- **Bias for Action** – We ran a 2‑week pilot with 10 loan officers; they could generate risk scores in under 150 ms, and the accuracy matched our legacy model (R² = 0.92).  

**Result (R)**  
Within three months we rolled out Claude across all underwriting desks:  
- **Productivity ↑30%** (time to prototype reduced from 5 days to 2 days).  
- **Cost <$4k/month**, below our $5k budget by 20%.  
- **Compliance audit passed** with zero data leakage incidents.  

**Takeaway** – By anchoring the program in *Customer Obsession* (delivering a better underwriting experience) and *Ownership* (owning end‑to‑end cost controls), I turned a complex AI adoption into a repeatable, scalable workflow that directly impacted revenue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
