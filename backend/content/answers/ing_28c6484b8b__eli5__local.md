---
qid: ing_28c6484b8b__eli5__local
question: 'Explain: What does the temperature parameter actually do? Give the formula.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 266
total_tokens: 427
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:40:16-05:00'
sources: []
---

**The “temperature” is like a spice level for a recipe of words.**  
When a model thinks about its next word, it has a list of possibilities with different probabilities (how likely each word should follow). The temperature, \(T\), controls how sharply those probabilities are turned into choices:

\[
P_{\text{adjusted}}(w)=
\frac{\exp \bigl(\tfrac{\log P(w)}{T}\bigr)}
     {\sum_{v}\exp \bigl(\tfrac{\log P(v)}{T}\bigr)} .
\]

If \(T=1\), the recipe stays true to the original probabilities.  
A low temperature (e.g., 0.2) makes the top choices overwhelmingly likely—like adding a small pinch of spice that keeps the dish predictable.  
A high temperature (e.g., 1.5 or 2) flattens the distribution, giving rarer words more chance—like sprinkling lots of spice to create bold, surprising flavors.  

So temperature simply scales how “decisive” or “creative” the model’s word choices are.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
