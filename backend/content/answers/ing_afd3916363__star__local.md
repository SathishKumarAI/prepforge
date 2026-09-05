---
qid: ing_afd3916363__star__local
question: How much data do you need to fine-tune a model? Quality vs. quantity?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 303
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:23:44-05:00'
sources: []
---

**Situation:**  
When we launched the chatbot for our e‑commerce platform, our existing language model struggled with product‑specific jargon and regional slang. The customer support team flagged that the bot’s response accuracy dropped to only 55% on a test set of 5,000 queries.

**Task:**  
I was tasked with fine‑tuning the model so that it could understand domain terminology while maintaining conversational fluency, all within a two‑week sprint and using our existing GPU cluster.

**Action:**  
First I curated a high‑quality dataset: 3,200 labeled Q&A pairs from real support tickets plus 1,800 synthetic examples generated with prompt‑engineering to cover edge cases. Instead of dumping massive unlabeled logs (≈50 GB), I focused on data quality—ensuring each sample was accurate and representative. I used the Hugging Face `Trainer` API with a linear learning‑rate schedule and gradient accumulation to fit 10 epochs. To guard against overfitting, I applied label smoothing and early stopping based on validation perplexity.

**Result:**  
Post‑deployment accuracy jumped from 55% to 92% on the same test set—an improvement of 37 percentage points—and user satisfaction scores rose by 18%. The exercise taught me that for fine‑tuning a transformer, a few thousand high‑quality examples often outperform tens of thousands of noisy data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
