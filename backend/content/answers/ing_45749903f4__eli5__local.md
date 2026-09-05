---
qid: ing_45749903f4__eli5__local
question: 'Explain: Prompting engineering — DeepSeek-R1 incentivizes reasoning in
  LLMs through reinforcement learning | Nature'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 189
total_tokens: 358
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:26:32-05:00'
sources: []
---

Think of a language model as a very clever but impatient student who loves to answer questions quickly. **Prompting engineering** is the way we ask that student—by wording the question or giving hints—to think more deeply before replying.

DeepSeek‑R1 takes this idea further by treating the student’s answers like a game: after each reply, it gives the model a *score* based on how much reasoning it shows (e.g., step‑by‑step logic, checking facts). This scoring is done with **reinforcement learning**—the model learns that higher scores come from thoughtful responses and so starts to prefer those strategies. In short, DeepSeek‑R1 trains the model to reward itself for thinking harder, making its answers clearer and more reliable over time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
