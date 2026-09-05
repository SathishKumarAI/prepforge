---
qid: ing_ad2e241d90__star__local
question: 'Explain: Tell me about a time you disagreed with a researcher (or tech
  lead) about priorities, and what happened.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 289
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:18:29-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were building an anomaly‑detection model for fraud alerts. The data science lead wanted to prioritize feature engineering on transaction metadata because his past models had shown strong performance with engineered features.

**Task:**  
I needed to convince the team that we should shift focus to improving our deep learning architecture and training regime instead of spending weeks crafting new features, given our tight quarterly launch deadline.

**Action:**  
I pulled a quick benchmark: I built a lightweight transformer‑based model using only raw transaction sequences, trained it on the same data split, and ran an ablation study. The results showed a 4 % lift in AUC over the engineered‑feature baseline while reducing training time by 30 %. I presented this to the lead with clear visualizations, highlighted the risk of feature drift, and proposed a hybrid approach—adding a few high‑impact engineered features identified from the ablation. We agreed to iterate on both fronts.

**Result:**  
The final model achieved a 7 % increase in fraud detection rate at a 2 % lower false‑positive cost, meeting our launch window. I learned that data‑driven evidence and transparent trade‑off analysis are key when challenging established priorities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
