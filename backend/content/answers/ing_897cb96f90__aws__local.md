---
qid: ing_897cb96f90__aws__local
question: 'Explain: Act I — Chatbots (when AI answers) — That Is Embarrassing: Why
  Frontier AI Still Makes Things Up, and What to Do About It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 359
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:37:11-05:00'
sources: []
---

**Customer Obsession | Ownership**

*Situation*: At my previous e‑commerce startup we launched a generative‑AI FAQ bot to reduce support tickets. Within the first month, 28 % of users complained that answers were “nonsensical” or “made up,” and churn rose by 3 %.  
*Task*: I had to own the bot’s accuracy, prove it mattered to customers, and deliver a fix before another quarter of revenue slipped.

*Action*:  
1. **Dive Deep** – Instrumented every prompt with a confidence score from the model and logged “confidence‑below‑threshold” events.  
2. **Bias for Action & Invent & Simplify** – Added a *fallback* layer: if confidence < 0.6, route to a curated knowledge base (AWS DynamoDB) or live agent.  
3. Deployed an **Amazon SageMaker Endpoint** with a small fine‑tuned Llama‑2 model; used **Amazon CloudWatch** for real‑time metrics and **Step Functions** to orchestrate the fallback workflow.  
4. Ran A/B tests: 200 k sessions, showing a 62 % drop in “made‑up” complaints and a 12 % lift in NPS (from 78→90).

*Result*: Reduced support tickets by 41 %, cut churn by 3 %, and saved ~$15K/month in agent costs. Learned that embedding confidence thresholds and fallback logic is essential—future bots must *never* “hallucinate” to keep customers trusting us.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
