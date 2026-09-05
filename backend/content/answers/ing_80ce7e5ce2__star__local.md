---
qid: ing_80ce7e5ce2__star__local
question: When would you fine-tune your embedding model, and how would you actually
  do it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 344
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:50:58-05:00'
sources: []
---

**Situation**  
In a product recommendation service for an e‑commerce platform, our search relevance had dropped from 0.72 to 0.58 in the latest A/B test. User click‑through on recommended items fell by 12 %, hurting revenue.

**Task**  
I needed to improve the embedding quality so that semantic similarity between user queries and product descriptions matched intent better, aiming for at least a 5 % lift in relevance score within two weeks.

**Action**  
First, I collected a fresh labeled dataset of 200k query–product pairs from recent search logs, adding a “relevance” label (0‑1). Using Hugging Face’s `transformers`, I loaded the pre‑trained Sentence‑BERT base model and froze all layers except the final projection. With PyTorch Lightning, I fine‑tuned on 80 % of the data for 3 epochs, using a cosine similarity loss and an AdamW optimizer at 2e‑5. To avoid overfitting, I applied early stopping when validation loss plateaued after epoch 2. After training, I evaluated embeddings against the held‑out 20 % set; cosine distance improved MAP from 0.58 to 0.64.

**Result**  
Deploying the new embeddings raised the recommendation click‑through rate by 9 %, surpassing the target and boosting revenue by $45k/month. I learned that targeted fine‑tuning on domain‑specific query–item pairs, even with a modest dataset, can significantly improve semantic search performance when properly validated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
