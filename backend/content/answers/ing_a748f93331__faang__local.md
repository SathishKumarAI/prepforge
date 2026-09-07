---
qid: ing_a748f93331__faang__local
question: 'Q: How would you evaluate models for a customer support chatbot?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 465
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:13:31-05:00'
sources: []
---

**Clarify**  
We’re evaluating *customer‑support* chatbots—so the goal is accurate, helpful replies that keep users satisfied and reduce agent load.  
Assumptions:  
1. We have labeled intent/response data (or can collect it).  
2. We track business metrics like CSAT, first‑contact resolution, average handling time, and cost per ticket.  
3. The bot runs in real‑time with latency constraints.

**Approach**  
1. Define *performance* vs *business impact*.  
2. Build a multi‑metric evaluation pipeline:  
   - **Intrinsic** (accuracy, perplexity, BLEU/ROUGE).  
   - **Extrinsic** (simulated user interactions, human‑in‑the‑loop A/B tests).  
3. Correlate metrics with business KPIs.

**Depth**  
- **Accuracy**: Use intent classification F1 and response generation BLEU≥0.7 on a held‑out set.  
- **Latency**: Target <200 ms inference; profile GPU/CPU usage.  
- **Robustness**: Evaluate against adversarial inputs (typos, slang).  
- **Explainability**: Add attention heatmaps for high‑impact queries to satisfy compliance.  
Complexity: O(N·logN) for ranking responses; memory footprint ~2 GB per model.

**Edge Cases**  
- *Cold start*: new products → unseen intents → fallback strategy.  
- *Data drift*: seasonal promos change language patterns.  
- *User frustration*: bot mis‑answers repeatedly → escalation flagging.

**Optimize & Communicate**  
Iterate: fine‑tune on domain data, use retrieval‑augmented generation for long context, deploy versioned A/B tests. Present findings in a dashboard linking metrics to business outcomes—so stakeholders see that improving BLEU by 5% translates to a 0.3 CSAT gain and $1k/month cost saving. This structured narrative satisfies FAANG interviewers: clear assumptions, systematic plan, technical depth, edge‑case awareness, and actionable optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
