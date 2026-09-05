---
qid: ing_1b443bd750__star__local
question: 'Explain: Zero-Shot vs. Few-Shot Efficiency — Prompt Engineering Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 313
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:24:03-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a customer‑support chatbot that needed to understand new product categories without retraining the model. The internal SLA required a response accuracy above 85 % for any category, but our baseline zero‑shot performance was only 68 %.

**Task:**  
I had to design a prompt strategy that could lift accuracy close to the target while keeping inference cost low—ideally staying within the same token budget as the zero‑shot setup.

**Action:**  
I started by profiling the model’s output with plain prompts, then experimented with few‑shot prompts that included two example Q&A pairs for each category. To control token usage I used a template that reused a shared context block and swapped in only the relevant examples. I also applied prompt compression: replacing long product descriptions with concise feature tags and leveraging the model’s internal embeddings to guide generation. I measured perplexity and F1 on a held‑out validation set, iterating until the few‑shot variant reached 84 % accuracy while consuming only ~10 % more tokens.

**Result:**  
The new prompt scheme pushed accuracy from 68 % to 84 %, meeting the SLA with minimal extra cost. I learned that carefully curated, compressed few‑shot prompts can bridge the zero‑shot gap without a full model retrain—an approach we now use for every new product line.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
