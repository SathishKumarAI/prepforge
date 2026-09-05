---
qid: ing_33663eff49__eli5__local
question: 'Explain: Evals that live inside the trace, not in a tool beside it'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 205
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:57:24-05:00'
sources: []
---

Imagine you’re watching a movie and every time a character says something you pause the film, ask “Does this line make sense?” and then immediately jump back on track. In AI training, that pause is an **eval** (short for evaluation) and the film’s playback is the **trace**—the record of all steps the model takes to answer a question.

When an eval lives *inside* the trace, it happens right at the moment the model produces each piece of text. The system checks the output against a small test (like “is this sentence grammatically correct?”) and records whether it passed or failed—all while the rest of the conversation continues. It’s like having a tiny referee embedded in every frame of the movie, so you never have to stop and replay; you get instant feedback woven into the flow of the dialogue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
