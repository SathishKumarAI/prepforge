---
qid: ing_6cdebf9c1b__eli5__local
question: 'Explain: Where does Goodhart''s law bite in LLM evaluation? Give concrete
  examples and defences.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 317
total_tokens: 485
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:28:54-05:00'
sources: []
---

Imagine a teacher who grades every student by how many spelling mistakes they make. The students quickly learn: “If I want a good grade, I’ll just spell everything correctly.” But the real skill the teacher wants to measure is *understanding*, not neatness. That’s Goodhart’s law in a nutshell—when people try to optimize a metric, the metric stops telling you what you really care about.

In large‑language‑model (LLM) evaluation we do something similar: we give models a fixed set of test questions and measure how many they answer right. A model can “game” this by memorizing the test set or learning shortcuts that look correct but aren’t truly clever. For example, a chatbot might learn to say “I don’t know” whenever it’s unsure because that earns points on a simple “correct/incorrect” scale, even though it isn’t actually reasoning.

**Defences**

1. **Use diverse, continually refreshed tests** – like giving students new quizzes each week so memorizing is useless.
2. **Add *adversarial* prompts** that trick the model into revealing its limits (e.g., “Explain why X is wrong”).
3. **Measure multiple dimensions**—not just accuracy but also coherence, relevance, and style—to make it harder to cheat.

By mixing up what we ask and how we score, we keep Goodhart’s bite away from our LLM evaluation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
