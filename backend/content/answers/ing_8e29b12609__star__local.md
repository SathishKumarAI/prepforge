---
qid: ing_8e29b12609__star__local
question: What is catastrophic forgetting in fine-tuning, and how do you mitigate
  it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 306
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:17:08-05:00'
sources: []
---

**Situation:**  
During a project at my previous company we had to adapt a large language model trained on general news text to our internal legal knowledge base. The model needed to retain its broad understanding while learning highly specialized terminology.

**Task:**  
I was tasked with fine‑tuning the model so that it performed well on both new legal queries and everyday questions, without losing accuracy on the original domain.

**Action:**  
First, I evaluated baseline performance using a held‑out test set from both domains. To prevent catastrophic forgetting, I employed *Elastic Weight Consolidation (EWC)*: after each batch of legal data, I calculated Fisher information to identify parameters crucial for general knowledge and added a quadratic penalty when updating them. I also mixed in 20% of the original news dataset during every epoch—this “rehearsal” helped keep the model grounded. Finally, I monitored loss curves on both datasets and adjusted the λ hyperparameter until the drop on the general set was below 2%.

**Result:**  
Post‑fine‑tuning, the legal accuracy rose from 78% to 92%, while the general accuracy only fell by 1.3%. The model now handles domain‑specific queries with confidence and still answers everyday questions accurately. I learned that balancing regularization with selective rehearsal is key to avoiding catastrophic forgetting in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
