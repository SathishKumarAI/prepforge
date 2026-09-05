---
qid: ing_86146c228f__eli5__local
question: 'Explain: So what we will do is if — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 256
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:09:04-05:00'
sources: []
---

Think of a machine‑learning model like a GPS that learns how to give the best directions without being told every rule ahead of time.  
**Unavoidable term:** *Model* – a computer program that has learned patterns from data.  

During a Google Maps interview, you might be asked: “How would you design a system that can suggest routes faster than the current one?” The interviewer wants to see if you can break the problem into parts (data storage, quick lookup, updating routes when traffic changes) and explain how each part works together.

The analogy is simple:  
- **Training data** = all the past trips people have taken.  
- **Learning phase** = the GPS looks at those trips, finds which roads are fastest in different situations, and stores that knowledge.  
- **Prediction phase** = when you ask for a route now, the GPS uses what it learned to pick the quickest path instantly.

So, machine learning is like a smart GPS that improves itself by studying many journeys instead of being hard‑wired with fixed rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
