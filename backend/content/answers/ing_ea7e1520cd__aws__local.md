---
qid: ing_ea7e1520cd__aws__local
question: 'Q74: A candidate claims their AI system achieves 95% accuracy. What questions
  do you ask to assess whether this is meaningful?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 496
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:08:22-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *Customer Obsession* – I want to know if the “95 % accuracy” truly benefits our users or just looks good on paper.  
> *Dive Deep* – I’ll drill into data, methodology, and operational implications.

**S – Situation**  
A teammate says their AI model scores 95 % accuracy on a classification task.  

**T – Task**  
Validate that this metric is trustworthy, actionable, and scalable for production.  

**A – Actions & Questions**  

1. **Dataset provenance**  
   - *How was the data collected?* (Bias, sampling frame)  
   - *What’s the class distribution?* (Imbalance → accuracy misleading)

2. **Metric definition**  
   - *Which metric is “accuracy” exactly?* (Top‑k, macro vs micro?)  
   - *Is it measured on a held‑out test set or cross‑validation?*  

3. **Robustness & Generalization**  
   - *Have you tested on out‑of‑distribution data?*  
   - *What is the confidence interval of the estimate?* (± 2 %?)  

4. **Operational context**  
   - *How does this accuracy translate to user experience?* (e.g., false‑positive cost)  
   - *What infrastructure will serve predictions at scale?* (AWS SageMaker, Lambda, ECS)

5. **Monitoring & drift**  
   - *Do you have a plan for continuous evaluation and retraining?*  

**R – Result**  
By asking these questions I discovered the model was evaluated on an imbalanced dataset (70 % positives) and accuracy masked 40 % precision on the minority class. Re‑evaluating with F1‑score and a balanced test set lowered “accuracy” to 82 %, but revealed higher real‑world impact.  

**Bar‑raiser cues** – Ownership: I asked about end‑to‑end pipeline; Dive Deep: I probed data, metrics, and monitoring; Quantified Impact: I linked accuracy to business KPIs; Learning from failure: I highlighted the risk of overfitting to a biased dataset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
