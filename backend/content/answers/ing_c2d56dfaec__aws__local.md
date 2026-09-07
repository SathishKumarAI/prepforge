---
qid: ing_c2d56dfaec__aws__local
question: 'Explain: Prompt Optimizer: Maximize Agent Performance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 375
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:43:31-05:00'
sources: []
---

**Prompt Optimizer – Maximizing Agent Performance**

*Situation:*  
In my last role as an AI Ops Lead at a fintech startup, we deployed a customer‑support chatbot that lagged behind human agents by 35 % in first‑contact resolution (FCR). Our SLA required ≥90 % FCR.  

*Task:*  
Own the end‑to‑end prompt engineering pipeline to lift agent performance while keeping inference cost <10 % of total ops spend.

*Action:*  
1. **Dive Deep** into user logs → identified 4 high‑impact intent clusters that were mis‑classified due to ambiguous prompts.  
2. Built an automated *Prompt Optimizer* microservice (AWS Lambda + Step Functions) that:  
   - Generates candidate prompts via a fine‑tuned GPT‑4 model (Amazon Bedrock).  
   - Scores each against historical success rates and latency using Amazon SageMaker Ground Truth annotations.  
3. Deployed the top 5% of prompts to production behind an **AWS AppConfig** feature flag for A/B testing.  
4. Introduced a *prompt‑caching* layer on **Amazon ElastiCache Redis** to cut token usage by 18 %.  

*Result:*  
Within two weeks, FCR rose from 55 % to **92 %**, exceeding SLA and saving ~$120k annually in manual support hours. Prompt latency dropped 12 %, keeping cost <8 % of total spend.

*Learnings:*  
Ownership forced rapid iteration; bias for action delivered measurable impact; continuous monitoring turned the optimizer into a learning loop that now auto‑updates prompts every 24 h.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
