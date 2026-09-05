---
qid: ing_4c6ddefe44__eli5__local
question: What's the case for tokenizer-free models, and why hasn't the tokenizer
  died yet?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 240
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:38:03-05:00'
sources: []
---

Think of a text like a long piece of music written in notes.  
A **tokenizer** is a sheet‑music reader that chops the tune into small, familiar bars (words, sub‑words, or characters). The AI then learns to predict which bar comes next.  

A **tokenizer‑free model** skips that step: it listens directly to every sound wave of the music and tries to guess the next sound sample. It’s like a violinist learning to play by hearing the whole piece instead of reading the score.

Why we still need tokenizers?  
1. **Speed & size** – Reading bars lets us compress the tune into fewer pieces, so the AI can work faster and with less memory.  
2. **Learning signal** – Bars give clear, consistent chunks that are easier for a model to learn patterns from; raw samples are noisy and require much more data.

So tokenizers haven’t died because they still make learning practical and efficient, even though the “violinist” style is an exciting research frontier.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
