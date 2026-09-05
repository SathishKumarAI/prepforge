---
qid: ing_432c7ebf9d__star__local
question: 'Explain: Title: Finetuned Language Models Are Zero-Shot Learners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 318
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:43:10-05:00'
sources: []
---

**Situation:**  
At my last startup we were building a customer support chatbot that needed to understand legal jargon from contracts, but our training data was limited to only 500 labeled examples per domain.

**Task:**  
I had to create a system that could answer new, unseen user queries about contract clauses without retraining for each subtopic—essentially a zero‑shot capability—while keeping latency under 300 ms.

**Action:**  
First, I fine‑tuned GPT‑4 on the 500 examples using LoRA adapters to preserve the base model’s knowledge. Then I leveraged prompt engineering: I constructed a “meta‑prompt” that described the task (“classify this clause as indemnification, confidentiality, or termination”) and appended a few in‑context examples. To enforce zero‑shot behavior, I added a temperature of 0.2 and disabled beam search to keep responses deterministic. Finally, I wrapped the model with a FastAPI service and used TensorRT for inference acceleration.

**Result:**  
The chatbot achieved an 87 % accuracy on a held‑out test set of 1,200 unseen clauses—up from 65 % before fine‑tuning—and handled 95 % of live queries in <300 ms. I learned that carefully crafted prompts can turn a fine‑tuned model into a versatile zero‑shot learner, saving both time and compute.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
