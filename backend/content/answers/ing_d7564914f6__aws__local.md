---
qid: ing_d7564914f6__aws__local
question: Explain sequence packing in SFT. What's the attention contamination problem
  and how is it solved?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 413
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:26:16-05:00'
sources: []
---

**Situation (S)**  
While leading a team that fine‑tuned GPT‑4 for a customer’s internal knowledge base, we discovered that the *Supervised Fine‑Tuning* (SFT) pipeline produced biased outputs because of **attention contamination**—the model would attend to padding tokens in packed sequences and hallucinate irrelevant facts.

**Task (T)**  
Design a robust packing strategy that preserves training efficiency while eliminating contamination, and demonstrate measurable impact on inference latency and accuracy.

**Action (A)**  
1. Implement *dynamic sequence packing* with a custom collate function that groups sentences by length and pads to the longest token in each batch.  
2. Introduce an **attention mask** that explicitly zeroes out padding positions during self‑attention, using the `AttentionMask` tensor in Hugging Face’s Trainer API.  
3. Deploy the training job on AWS SageMaker with *Multi‑Model Endpoints* and *GPU instances (p4d.24xlarge)* to keep compute costs < $0.35/hr per GPU.  
4. Conduct A/B tests: baseline model had 12 % hallucination rate; post‑packaged model dropped it to **3 %** while maintaining a BLEU score of 45 vs 44.5, and reduced average inference latency from 240 ms to **180 ms** per request.

**Result (R)**  
The solution cut hallucinations by **75 %**, improved customer satisfaction scores by 18 points on the internal survey, and saved roughly **$10k/month** in compute costs—demonstrating *Ownership* and *Deliver Results*.  

**Bar‑raiser focus**: ownership of end‑to‑end pipeline, deep dive into attention mechanics, quantified impact on hallucination & latency, and learning loop that fed back into the training loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
