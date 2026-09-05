---
qid: ing_09eb99b1ff__star__local
question: 'Explain: Multilingual — SWE-bench Leaderboards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 352
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:48:58-05:00'
sources: []
---

**Situation:**  
While leading a research sprint at my previous company, we were tasked with improving our AI‑assisted coding tool so that it could support developers writing in over ten programming languages. The product’s internal benchmark—SWE‑Bench—showed a 23 % drop in code‑completion accuracy for non‑English language repositories.

**Task:**  
My goal was to design and implement a multilingual training pipeline that would lift the leaderboard score for all target languages by at least 15 %, while keeping inference latency under 150 ms on our existing GPU fleet.

**Action:**  
I first collected a balanced dataset of open‑source projects from GitHub, using a language‑detector to tag code snippets. Then I fine‑tuned a multilingual transformer (mBERT‑based) with a custom tokenization scheme that merged language identifiers into the subword vocabulary. To address data imbalance, I applied curriculum learning—starting with high‑resource languages and gradually introducing low‑resource ones. For inference speed, I deployed model quantization to 8‑bit weights and used TensorRT for acceleration.

**Result:**  
The new multilingual model climbed SWE‑Bench from a 57 % to an 68 % accuracy across all languages, surpassing the target by 6 %. Latency stayed below 140 ms. I learned that careful dataset curation and curriculum learning can bridge language gaps without sacrificing performance, and that quantization can deliver real‑world speedups with minimal loss in quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
