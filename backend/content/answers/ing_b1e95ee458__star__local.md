---
qid: ing_b1e95ee458__star__local
question: 'Explain: Your fraud dataset is 0.5% positive. Walk me through your strategy
  for handling the imbalance.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 346
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:27:23-05:00'
sources: []
---

**Situation**  
In my last role I was building a credit card fraud detector. The training set had only about 0.5 % fraudulent transactions—roughly 500 positives out of 100 000 samples. A naive model would simply predict “legitimate” for everything and still achieve 99.5 % accuracy, which is useless.

**Task**  
I needed to create a system that could reliably flag fraud while keeping the false‑positive rate low enough not to annoy customers or overload analysts.

**Action**  
First I performed exploratory data analysis in Python (pandas, seaborn) to spot any useful feature distributions. Then I used SMOTE to synthetically oversample the minority class, but capped it at a 1:5 ratio to avoid overfitting. Next, I trained an XGBoost classifier with early stopping on a stratified validation split and tuned `scale_pos_weight` based on the class imbalance (≈199). To further reduce noise, I added cost‑sensitive loss by weighting false positives higher. Finally, I evaluated the model using precision–recall curves and set a threshold that achieved 95 % precision with 30 % recall.

**Result**  
The final pipeline raised fraud detection from 3 % to 28 % while keeping false positives below 1.2 %. The system was deployed in production, resulting in a 12 % reduction in financial losses over six months. I learned that balancing synthetic techniques with cost‑sensitive learning can turn a sparse signal into actionable insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
