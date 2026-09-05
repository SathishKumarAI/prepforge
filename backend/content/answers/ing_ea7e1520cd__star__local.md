---
qid: ing_ea7e1520cd__star__local
question: 'Q74: A candidate claims their AI system achieves 95% accuracy. What questions
  do you ask to assess whether this is meaningful?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 298
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:17:18-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, I built an AI model that predicted fraudulent transactions for a payment gateway handling ~1 M transactions per day.

**Task:**  
When the product manager claimed our system reached “95% accuracy,” I had to verify whether that figure was realistic and useful for risk management.

**Action:**  
I first asked about the data split: *“Was this 95% from a hold‑out test set or cross‑validation? How many fraud cases were in it?”* Then I requested the confusion matrix, focusing on precision, recall, and F1-score because fraud is highly imbalanced. I also checked the class distribution—if fraud comprised only 0.5% of transactions, a naive model could achieve high accuracy by always predicting legitimate. I reviewed the evaluation period: *“Does this reflect recent patterns or a stale dataset?”* Finally, I ran a quick experiment on a fresh validation set to confirm the claim.

**Result:**  
The original figure was from an unstratified split and over‑estimated performance; the true recall dropped to 68%. After correcting the evaluation pipeline, we achieved 91% accuracy with 85% recall—enough to reduce false positives by 40% and save $2 M annually. I learned that context and proper metrics are essential before celebrating a headline number.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
