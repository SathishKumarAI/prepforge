---
qid: ing_69e3cc9f93__star__local
question: 'Explain: The Tree vs. The Chain — Tree Of Thought'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 353
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:59:08-05:00'
sources: []
---

**Situation** – In my last role as a research engineer at a conversational‑AI startup, we were building a chatbot that could generate creative writing prompts. The existing pipeline used a simple chain of thought (CoT) where the model produced one long reasoning sequence before answering. User tests showed low diversity and frequent repetition in the outputs.

**Task** – I was tasked with redesigning the generation strategy to increase prompt variety while keeping latency under 1 second per request, so we could roll it out in our mobile app.

**Action** – I introduced a Tree‑of‑Thought (ToT) architecture. First, I used a lightweight “branch selector” model (a distilled BERT) to generate five candidate sub‑reasonings from the same seed prompt. Each branch was then expanded by an LLM in parallel using beam search with a temperature of 0.8. I implemented a pruning step that discarded branches whose semantic similarity to the root exceeded 0.6, ensuring distinct creative directions. Finally, I aggregated the top three branches and fed them into a ranking module that scored coherence versus novelty.

**Result** – The new ToT pipeline cut output diversity scores (measured by BLEU‑like uniqueness metric) from 23 % to 68 %, while average latency rose only 12 ms per request. User satisfaction surveys jumped 35 %. I learned that a controlled branching strategy can dramatically improve creative AI systems without sacrificing performance, and that lightweight branch selectors are key for keeping the method real‑time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
