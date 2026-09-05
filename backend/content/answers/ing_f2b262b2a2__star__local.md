---
qid: ing_f2b262b2a2__star__local
question: 'Explain: Cardinality'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 321
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:33:08-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a recommendation engine for an e‑commerce platform. The user‑item interaction table had over 12 million rows, but the “category” field in our product catalog was highly sparse—some categories appeared only once or twice.

**Task:**  
I needed to engineer categorical features that would improve model accuracy without blowing up memory or training time.

**Action:**  
I first calculated the cardinality of each category by grouping and counting distinct values. For high‑cardinality fields I applied target encoding, smoothing the mean with a global prior to avoid overfitting. For extremely rare categories (frequency < 5) I collapsed them into an “Other” bucket. I also used feature hashing for the product tags, limiting the hash space to 2^14 buckets to keep dimensionality manageable. During preprocessing I monitored memory usage in Spark; the hashed representation reduced RAM consumption by ~35% compared to one‑hot encoding.

**Result:**  
After integrating these engineered features, our gradient‑boosted model’s click‑through rate rose from 3.8 % to 4.6 %—a 21 % lift. Training time dropped from 1 hour to 45 minutes, and the model size shrank by 40 %. I learned that understanding cardinality lets you choose the right encoding technique: high cardinality needs smoothing or hashing; low cardinality can stay one‑hot if memory permits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
