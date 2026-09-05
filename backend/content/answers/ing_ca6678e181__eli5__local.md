---
qid: ing_ca6678e181__eli5__local
question: 'Explain: Preprocessing Different File Types — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 240
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:56:01-05:00'
sources: []
---

Imagine you’re a chef who wants to make a delicious soup from many kinds of ingredients—vegetables, meats, and spices. Each ingredient comes in a different form: some are fresh (text files), some are canned (PDFs), others are pre‑cooked (images with text). Before the soup can taste good, you must cut, grind, or reheat each item so they all mix smoothly.

In Haystack’s preprocessing tutorials, that “cutting and grinding” is turning every file type into a plain list of words.  
* **Text files** are already clean, just read them.  
* **PDFs** need a PDF reader to pull out the pages, then split long lines into sentences.  
* **Images** use OCR (optical character recognition) to “read” any printed text inside them.

Once every file is a simple stream of words, Haystack can index it and later find what you’re looking for—just like your soup is ready to be seasoned and served.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
