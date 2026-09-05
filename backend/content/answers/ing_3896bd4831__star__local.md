---
qid: ing_3896bd4831__star__local
question: How do you build a training dataset without triggering model collapse when
  a lot of your data is synthetic?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 353
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:21:45-05:00'
sources: []
---

**Situation:**  
At my previous startup we were training a dialogue model for a customer‑support chatbot. Our real conversation logs covered only 15 % of the product’s features, so to reach the target 200k examples we had to generate synthetic dialogues using an in‑house script engine.

**Task:**  
Create a balanced training set that would not cause the model to overfit on synthetic patterns and collapse when evaluated on live traffic.

**Action:**  
1. Ran an exploratory data analysis on the real logs to identify high‑frequency intents, slot distributions, and utterance lengths.  
2. Built a “synthetic‑to‑real” weighting scheme: every synthetic example was assigned a probability weight inversely proportional to its similarity score against a k‑NN reference set of real samples.  
3. Implemented an on‑the‑fly data augmentation pipeline that mixed 70 % real with 30 % weighted synthetic, and used curriculum learning—starting training with the most realistic synthetic examples and gradually increasing diversity.  
4. Added a validation split composed exclusively of unseen real logs; whenever loss diverged beyond 5 %, we throttled new synthetic injections.

**Result:**  
The final model achieved a BLEU‑score of 0.68 on live queries, up from 0.52 before the dataset overhaul, and the response error rate dropped to <2 %. I learned that careful weighting and continuous validation against real data are key to preventing collapse when relying heavily on synthetic content.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
