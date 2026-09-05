---
qid: ing_10eae68c14__eli5__local
question: 'Explain: Context Relevance — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 261
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:02:29-05:00'
sources: []
---

Imagine you’re at a party and someone asks, “What’s the best pizza place?” You can answer with any pizza shop you know, but the most helpful reply is one that fits where the person is: their city, what they like (thin‑crust vs deep‑dish), or if they’re vegan. That fittingness is *context relevance* for a language model.

When an LLM gets a question, it first reads the “context” – the words around the query and any extra text you give. Then it tries many possible answers, each one scored by how well it matches that context: Does it mention the right city? Does it use the same tone? Is it consistent with facts already stated?

The evaluation is like a friendly judge who checks whether your answer stays in the party’s conversation. If the model picks an answer that feels out of place—like recommending a sushi restaurant when the question was about pizza—it gets a low relevance score. The higher the score, the more the reply sticks to the context you set. This keeps answers useful and on point, just like a good friend who remembers what’s already been said.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
