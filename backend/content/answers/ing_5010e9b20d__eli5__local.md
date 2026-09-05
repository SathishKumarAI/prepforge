---
qid: ing_5010e9b20d__eli5__local
question: Why do LLMs use subword tokenization instead of whole words or raw characters?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 246
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:43:58-05:00'
sources: []
---

Think of a recipe book that’s written in an ancient language. If you tried to read it by translating each **whole word** at once, many phrases would be unfamiliar because the author invented new terms for every dish. Instead, chefs often break words into **sub‑words**—like “pre‑heat,” “mix‑up,” or “simmer‑down”—because those pieces appear in many recipes and can be combined to understand anything.

Large language models (LLMs) face a similar problem: the world’s vocabulary is huge, but many words are rare or never seen. If an LLM only knew whole words, it would miss most of them; if it used raw characters, it would have to learn long chains that make understanding harder. **Subword tokenization** splits text into frequent, manageable chunks (e.g., “un‑”, “‑breakable”). These pieces are common enough for the model to learn patterns, yet small enough to recombine into any word—including new or misspelled ones—just like a chef can mix familiar ingredients to make an unfamiliar dish.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
