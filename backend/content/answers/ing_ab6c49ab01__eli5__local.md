---
qid: ing_ab6c49ab01__eli5__local
question: 'Explain: The Core Concept — Speculative Decoding'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 199
total_tokens: 356
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:09:37-05:00'
sources: []
---

Imagine you’re reading a mystery novel and the author has only written the first chapter. You can try to guess what happens next, but every time you make a prediction it changes how the story will unfold—because the narrator might react differently to your guesses.  
In *speculative decoding*, an AI does exactly that with text. It reads the part of a sentence it’s already generated, then “pretends” to continue by guessing the next word. That guess becomes real input for the next step, so each choice influences all following words. The model keeps doing this, one word at a time, always speculating on what comes next and letting those guesses shape the rest of the output. It’s like a storyteller who writes the next line before seeing how the reader reacts, letting imagination drive every subsequent sentence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
