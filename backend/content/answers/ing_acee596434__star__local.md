---
qid: ing_acee596434__star__local
question: 'Q: Why does GPT-4 struggle with simple character counting?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 311
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:18:00-05:00'
sources: []
---

**Situation** – In a client‑facing chatbot we had a feature that counted the number of characters a user typed before sending a message to an API. When we switched from GPT‑3.5 to GPT‑4, the character counter returned values off by 1–2% for long sentences, causing billing errors.

**Task** – I needed to pinpoint why GPT‑4’s tokenization was giving inconsistent counts and deliver a reliable counter that worked across both models without breaking latency.

**Action** – First, I inspected the tokenizer used in the OpenAI library. GPT‑4 uses a new BPE model where certain punctuation is merged into tokens; my previous “len(message)” approach counted raw bytes instead of user‑visible characters. I wrote a wrapper that normalizes Unicode (NFKC), strips zero‑width spaces, and then applies the same tokenizer used by the model to count tokens, converting back to approximate character length with a small lookup table for common emoji. I also added a cache keyed on message hash to avoid recomputation.

**Result** – The counter’s error dropped from ~2% to <0.01%, eliminating billing discrepancies and improving user trust. I learned that tokenization nuances matter even in “simple” text metrics, and that aligning tooling with the model’s internal representation is critical for accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
