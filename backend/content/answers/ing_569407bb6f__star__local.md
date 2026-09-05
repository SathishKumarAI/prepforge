---
qid: ing_569407bb6f__star__local
question: 'Explain: Paper flash cards — Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 364
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:21:12-05:00'
sources: []
---

**Situation:**  
During my senior design project I had to memorize the architecture details of 12 different neural network models for a final presentation. The deadline was two weeks before the demo, and I was worried about forgetting key hyperparameters.

**Task:**  
I needed a system that would let me review each model’s specifics at optimal intervals so I could retain them long enough to explain the trade‑offs during the demo without cramming at the last minute.

**Action:**  
I created paper flash cards for each model, writing the name on one side and architecture, key hyperparameters, and performance metrics on the other. Using the spaced repetition principle from Wikipedia, I set a review schedule: first review after 24 h, then after 48 h, then after a week, and finally before the presentation. Each time I reviewed a card, I marked it “easy,” “medium,” or “hard.” Cards that were easy moved to a longer interval; hard ones returned to an earlier slot. This simple algorithm mimicked the Levenshtein‑based spacing algorithm described in the article.

**Result:**  
By the day of the demo, I could explain every model’s design fluently, and my presentation received a 4.8/5 rating for clarity. The exercise taught me that even basic spaced repetition can dramatically improve retention of technical details, and it inspired me to build an automated flash‑card app for future learning tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
