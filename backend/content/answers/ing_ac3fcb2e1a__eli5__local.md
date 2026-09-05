---
qid: ing_ac3fcb2e1a__eli5__local
question: 'Explain: Dictionary — GitHub - Asabeneh/30-Days-Of-Python: The 30 Days
  of Python programming challenge is a step-by-step guide to learn the Python programming
  language in 30 days. This challenge may take more than 100 days. Follow your own
  pace. These videos may help too: https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 231
total_tokens: 475
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:10:51-05:00'
sources: []
---

Think of a **dictionary** like a real‑world address book that you can look up instantly.  
Each entry has two parts: the *key* (the person’s name) and the *value* (their phone number). When you want to find someone, you give their name, and the address book gives you the number right away—no need to flip through pages.

In Python a dictionary is just that: an unordered collection of **key‑value pairs**.  
- A **key** must be unique and immutable (like strings or numbers).  
- The **value** can be anything—a string, list, another dictionary, etc.  

You add or change entries with `dict[key] = value`, remove them with `del dict[key]`, and check if a key exists with `"name" in dict`.  
Because the lookup is instant (like flipping to a page), dictionaries are great for tasks that need fast access, such as counting items, mapping codes to descriptions, or storing configuration settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
