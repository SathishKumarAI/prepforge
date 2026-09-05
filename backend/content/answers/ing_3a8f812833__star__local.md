---
qid: ing_3a8f812833__star__local
question: 'Explain: So 4 character in phone, we get — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 347
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:25:47-05:00'
sources: []
---

**Situation:**  
At a telecom startup, our legacy SMS gateway was choking on the new “predictive text” feature we were rolling out for 4‑character phone keypads. The user satisfaction score dropped to 68 % because users couldn’t type common words quickly.

**Task:**  
I had to build a lightweight ML model that could map any four-digit sequence (e.g., 7328) to the most probable word or phrase, improving typing speed by at least 30 % without increasing server latency beyond 50 ms per request.

**Action:**  
First, I scraped millions of SMS logs to create a frequency table of n‑grams. Using Python’s `scikit-learn`, I trained a multinomial Naïve Bayes classifier with one-hot encoded keypad mappings as features. To keep inference fast, I precomputed a lookup dictionary and cached the top 10 predictions per sequence in Redis. During integration, I added an adaptive learning loop: every successful prediction was logged back into the model’s training set, retraining nightly to capture trending slang.

**Result:**  
After deployment, typing speed increased by 35 %, user satisfaction rose to 92 %, and latency stayed under 40 ms. The project taught me how to balance statistical rigor with real‑time constraints in a production ML pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
