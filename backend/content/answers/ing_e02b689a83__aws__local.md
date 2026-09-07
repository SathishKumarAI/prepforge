---
qid: ing_e02b689a83__aws__local
question: 'Q89: Design a Process Reward Model (PRM) for a customer-support agent.
  What signals do you score, and how do you avoid degenerate reward?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 661
total_tokens: 913
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:46:29-05:00'
sources: []
---

**Leadership Principles:** *Ownership* + *Dive Deep*

**Situation** – A SaaS firm wanted to automate the evaluation of its live‑chat agents so that coaching could be data‑driven and bias‑free.

**Task** – Build a Process Reward Model (PRM) that scores each agent’s session on multiple signals, while preventing degenerate behavior such as “gaming” the system or over‑optimizing for a single metric.

**Action**  
1. **Signal set** –  
   * **Customer Satisfaction (CSAT)** – 5‑point survey sent automatically after closure.  
   * **First Contact Resolution (FCR)** – binary flag if the issue is closed in the first ticket.  
   * **Average Handle Time (AHT)** – weighted average of chat duration, capped at 15 min to avoid “over‑talking”.  
   * **Knowledge Base Utilization (KBU)** – proportion of replies that include a KB article link; penalize zero usage with a small negative weight.  
   * **Sentiment Score** – NLP model on transcript; high positive sentiment boosts reward, while prolonged negative sentiment incurs penalty.

2. **Reward function** –  
   `reward = 0.35*CSAT + 0.25*FCR - 0.15*AHT_norm + 0.20*KBU - 0.05*Sentiment_penalty`  
   All components are normalized to [0,1] and weighted so that no single signal dominates.

3. **Degeneracy mitigation** –  
   * **Threshold caps** (e.g., AHT > 15 min → penalty) prevent “speed‑through” tactics.  
   * **Randomized CSAT prompts** reduce the chance of agents timing their responses to influence surveys.  
   * **Adversarial testing**: run a Monte‑Carlo simulation where agents are rewarded for manipulating one metric; observe that reward drops when multiple signals conflict, proving robustness.

4. **Implementation** – Use AWS Lambda + Step Functions to orchestrate data pipelines from Amazon Connect (chat logs), Comprehend (sentiment), and DynamoDB (agent metadata). Store daily PRM scores in Amazon Redshift for trend analysis. Cost ≈ $0.0001 per chat, scaling linearly with volume.

**Result** – After 3 months, FCR rose from 72 % to 84 %, AHT fell by 18 %, and CSAT improved from 4.2/5 to 4.6/5—an overall PRM score increase of 27 %. Agents reported clearer coaching feedback (average survey rating on “usefulness” = 4.8).  

**Bar‑raiser takeaways:**  
*Ownership* – I owned the entire data flow and business impact.  
*Dive Deep* – I quantified each signal, set caps, and validated against adversarial scenarios.  
*Quantified Impact* – Clear KPI improvements with exact percentages.  
*Learning from Failure* – Initial prototype over‑rewarded speed; we added AHT cap after observing “speed‑through” sessions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
