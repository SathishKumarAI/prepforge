---
qid: ing_8813e936b7__aws__local
question: 'Explain: Pitfall 14: Defending Wrong Answers — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 456
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:32:01-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led a cross‑functional team that built an AI‑powered FAQ bot for a consumer finance portal. The model was deployed in production, and within two weeks we saw a **20 % increase in user satisfaction scores**, but the bot began giving incorrect financial advice.

**Task (T)**  
I had to diagnose why the bot’s confidence metrics were misleading and implement a safety layer that would prevent “defending wrong answers” from reaching users.

**Action (A)**  
1. **Dive Deep** – I pulled audit logs, ran *confusion matrix* analyses, and discovered that high‑confidence predictions were often based on a single training example.  
2. Implemented a *fallback pipeline*:  
   - If the top‑k probability < 0.55 or the model’s confidence changed > 10 % between consecutive tokens, route to a human review queue (SQS + Lambda).  
   - Added an **Explainability** layer using SHAP values to surface feature importance for every answer.  
3. Updated CI/CD to include *confidence‑threshold tests* and automated rollback if accuracy dropped below 92 %.  
4. Trained the model on a balanced dataset, reducing class imbalance by 35 % (measured via ROC‑AUC).

**Result (R)**  
Within one month:  
- **Accuracy improved from 78 % to 94 %** on live traffic.  
- Human‑review queue handled only 1.2 % of requests, keeping cost < $200/month.  
- Customer support tickets dropped by **42 %**, and Net Promoter Score rose from 45 to 58.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Prioritized user safety over quick wins.  
- **Ownership** – Took end‑to‑end responsibility for the model’s reliability.  

Bar‑raiser cues: clear ownership, deep technical dive with metrics, cost–benefit trade‑offs, and learning from the initial failure to improve system robustness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
