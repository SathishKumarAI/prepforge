---
qid: ing_b994f4a499__eli5__local
question: 'Explain: Pretraining Basics'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 152
output_tokens: 214
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:31:29-05:00'
sources: []
---

Imagine building a smart robot that can talk about anything.  
Before you let it answer questions, you first let it read millions of books, news articles, and websites—just to get familiar with how language works. This long reading phase is **pre‑training**.

During pre‑training the robot learns two key tricks:  

1. **Predicting missing words** – if a sentence says “The cat sat on the ___,” it guesses *mat*.  
2. **Understanding context** – it sees that “bank” can mean a money place or river edge, depending on nearby words.

These tricks are stored in the robot’s internal network (the *weights*). After pre‑training, you give the robot a specific job—like answering math questions—and fine‑tune those weights so it performs well on that task.  

So, pre‑training is like giving your robot a broad vocabulary and grammar before teaching it any particular skill.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
