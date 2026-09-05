---
qid: ing_f82b1b68d7__star__local
question: After fine-tuning on a customer's task, target-task accuracy is up but the
  model got worse at everything else. What happened and what do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 333
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:45:01-05:00'
sources: []
---

**Situation:**  
In a recent project for a retail analytics client I fine‑tuned a pre‑trained vision transformer on their product‑recommendation dataset. After three epochs the recommendation accuracy jumped from 72 % to 85 %, but the model’s performance on the downstream image‑classification task dropped from 90 % to 68 %.  

**Task:**  
I needed to regain generalization without sacrificing the new recommendation gains, ensuring the model stayed useful for both the client and our internal services.  

**Action:**  
First I checked for catastrophic forgetting by running a quick validation on a held‑out “old‑tasks” set; it confirmed severe drift. To counter this, I introduced elastic weight consolidation (EWC) during fine‑tuning, adding a quadratic penalty that keeps weights near their pre‑trained values. I also mixed in 10 % of the original classification data as a replay buffer and employed layer‑wise learning rates—lower for early layers, higher for the final heads. Finally, I monitored both metrics on separate validation sets each epoch.  

**Result:**  
After five more epochs, recommendation accuracy stayed at 84 %, while classification rose back to 88 %. The model now balanced both tasks, and I learned that regularization + replay is essential when fine‑tuning for a single target in a multi‑task environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
