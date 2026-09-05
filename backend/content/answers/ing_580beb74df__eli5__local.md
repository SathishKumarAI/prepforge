---
qid: ing_580beb74df__eli5__local
question: 'Explain: It doesn''t look things up, it predicts the next token'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 251
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:56:05-05:00'
sources: []
---

Imagine a giant book‑ish brain that has read millions of stories and conversations. When you ask it a question or give it a sentence, it doesn’t search the internet for an answer; instead, it plays a quick game of “guess what comes next.”  
Think of it like a word‑prediction game in a crowded café: someone says, “I love eating…,” and everyone in the room instantly starts guessing the next word—pizza, ice‑cream, tacos. The brain has learned from all those past conversations which words most often follow each other. So when you finish a sentence, it looks at the words already said (the *context*) and chooses the word that statistically fits best as the next *token* (a token is just a piece of text—usually a word or part of a word).  

It repeats this one step at a time until it has produced a full answer. The “look‑up” you expect from a search engine never happens; the model simply keeps predicting, using patterns it learned during training.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
