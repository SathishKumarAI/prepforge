---
qid: ing_5c4fcd4ada__eli5__local
question: 'Q: How do you handle embedding drift when updating models?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 214
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:02:22-05:00'
sources: []
---

**Embedding drift** is like a library that’s constantly getting new books.  
Each book (a word or image) gets shelved in a specific spot based on its *embedding*—the coordinates that tell the computer how similar it is to other items.  

When you update the model, you’re adding fresh books and sometimes reorganizing shelves. If the old shelves stay unchanged while new ones are added, the relative distances shift: a book that used to be next to “cat” might now sit farther away because the whole layout has subtly moved—this is drift.

To keep things tidy, we *re‑embed* the entire collection whenever major updates happen. Think of it as re‑labeling every shelf after adding new books so that each item’s position still reflects its true relationships. By doing this periodically, the model stays accurate and avoids misclassifying “cat” as a distant concept like “sailboat.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
