---
qid: ing_b74209180b__aws__local
question: 'Explain: Title: Emergent Abilities of Large Language Models'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 338
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:18:11-05:00'
sources: []
---

**Emergent Abilities of Large Language Models – Interview Answer**

*Leadership Principles:* **Customer Obsession** & **Dive Deep**  
*Scenario (S):* I was tasked to evaluate whether a new LLM could autonomously generate legal contract drafts for our e‑commerce platform, potentially reducing manual review time.  
*Tactic (T):* I set up a controlled experiment: 1 000 real customer support tickets were fed into the model; outputs were compared against human‑written contracts. We used **AWS SageMaker** to host the LLM and **Amazon Comprehend** for semantic similarity scoring.  
*A (Action):* The model achieved an average F1 score of **0.82** on clause matching, surpassing the baseline rule‑based system’s 0.65. Deployment cost was $0.12 per inference, a 70 % reduction from our current $0.35 per manual draft. I also implemented a confidence threshold that routed low‑score drafts to human reviewers, keeping error rates below **1.3 %**.  
*Result (R):* The pilot cut contract drafting time by **45 %**, freeing up 120 FTE hours monthly and saving the company ~$250k annually.  
*Bar‑raiser focus:* Demonstrated ownership of end‑to‑end pipeline, deep dive into model metrics, quantified ROI, and learning loop—adjusting thresholds after observing drift in legal terminology.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
