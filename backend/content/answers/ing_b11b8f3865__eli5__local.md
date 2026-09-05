---
qid: ing_b11b8f3865__eli5__local
question: 'Explain: Explain precision, recall, and F1. Give a concrete case where
  99% accuracy means the model is useless.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 260
total_tokens: 433
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:17:52-05:00'
sources: []
---

Imagine you’re a guard at a museum looking for thieves (the “positive” cases).  
*Precision* is the guard’s **trustworthiness**: out of all the people he stops, how many are really thieves? If he stops 10 people and only 2 are thieves, his precision is 20 %.  
*Recall* is his **coverage**: out of all the actual thieves in the museum, how many did he catch? If there were 100 thieves and he caught 80, recall is 80 %.  
The *F1 score* blends these two into a single number that rewards balance; it’s the harmonic mean of precision and recall.

Now suppose 99 % accuracy sounds great. In a museum with only 1 thief among 10,000 visitors, a model that simply says “no thief” for everyone gets 99.99 % accuracy yet never catches any thief (precision = 0, recall = 0). High accuracy hides the fact that the rare but important class is ignored—making the model useless for its real purpose.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
