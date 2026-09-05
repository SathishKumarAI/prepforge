---
qid: ing_7940daa926__star__local
question: You want to switch model providers and your prompts break. Why, and how
  would you have made them portable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 365
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:36:18-05:00'
sources: []
---

**Situation**  
In a production chatbot for a fintech app, we migrated from OpenAI’s GPT‑3.5 to Anthropic’s Claude 2 after the licensing costs spiked. The live traffic hit 10k queries/day and every prompt was hard‑coded in our codebase.

**Task**  
I needed to ensure the new model understood the same prompts without breaking user experience or increasing latency, while keeping the cost under $0.02 per request.

**Action**  
First, I mapped out all tokenization quirks: GPT‑3.5 used byte‑pair encoding (BPE) whereas Claude uses a custom SentencePiece tokenizer that splits contractions differently. I built a lightweight adapter layer around the API calls, normalizing prompts into a canonical JSON schema and re‑encoding them per provider. I also parameterized style tags (“$tone”, “$length”) so we could switch templates without touching logic. Automated unit tests ran each prompt against both models, checking for identical output shape and length constraints. Finally, I added a fallback cache that stored the first 1k responses to avoid repeated calls during validation.

**Result**  
The migration took two weeks instead of the anticipated month. Prompt accuracy stayed above 95 % across providers, latency dropped from 350 ms to 280 ms, and we avoided a $1.2K monthly cost spike. I learned that abstracting prompt logic and tokenization early is essential for provider portability and cost control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
