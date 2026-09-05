---
qid: ing_366e8fca4e__star__local
question: 'Explain: does dynamic routing there''s a tier that'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 287
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:16:54-05:00'
sources: []
---

**Situation:**  
When I was building a computer‑vision model for an e‑commerce startup, our image classification accuracy plateaued at 83 % on the validation set, and we were struggling to distinguish fine‑grained product categories (e.g., similar shoe styles).  

**Task:**  
I needed to improve class discrimination without blowing up training time or requiring a massive data augmentation pipeline.  

**Action:**  
I introduced a capsule‑network module with dynamic routing between lower‑level feature capsules and higher‑level category capsules. In practice, I implemented the routing‑by‑agreement algorithm in PyTorch: each lower capsule produced a vote vector for every higher capsule; we iteratively updated coupling coefficients using softmax over logits that were adjusted by dot‑product agreement scores. To keep training tractable, I limited routing iterations to three and added a reconstruction loss that encouraged the capsules to encode pose information.  

**Result:**  
The model’s top‑1 accuracy jumped from 83 % to 91 % on our held‑out test set, with inference latency only increasing by ~15 ms per image. The exercise taught me how dynamic routing can capture hierarchical part relationships and that careful iteration limits are key to balancing performance and speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
