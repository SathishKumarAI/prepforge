---
qid: ing_471be00fcc__eli5__local
question: 'Explain: Native Multimodality — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 215
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:29:47-05:00'
sources: []
---

Think of a large language model (LLM) as a huge library that can read both books and pictures. **Native multimodality** means the book‑shelf itself is built to handle different kinds of “media” without needing extra translators.

In the LLM, every input—text, image, audio—is first turned into numbers called *tokens*. The model’s hidden layers then treat all these tokens in the same way, like a single conveyor belt that moves any item forward. Because the same mathematical operations (attention and feed‑forward networks) work on every token type, the model can mix words with pixels or sound waves right inside its core.

So, native multimodality is simply the LLM’s ability to process multiple senses—text, images, etc.—using one unified set of internal rules, just as a single library can hold books and photographs side by side.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
