---
qid: ing_676f69117b__eli5__local
question: 'Q: How do temperature and top-p affect generation?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 233
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:20:05-05:00'
sources: []
---

Think of text generation as cooking a soup.  
The **temperature** is like how much heat you turn the stove on. A low temperature (≈0) keeps the pot very steady: only the safest, most common ingredients (words) are added, giving a bland but predictable soup. A high temperature turns up the heat, letting more adventurous spices appear; the soup becomes wilder and can surprise you, but it may also taste off‑balance.

The **top‑p** (or nucleus sampling) is like a filter on your ladle that only lets through the most promising chunks of soup—those whose combined probability adds up to *p* (e.g., 0.9). If p is small, you pick just the very best bits; if p is large, you allow more variety.

Together, temperature controls how daring each choice is, while top‑p decides how many choices you consider before making a decision. Adjusting them lets you craft text that’s either safe and coherent or bold and creative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
