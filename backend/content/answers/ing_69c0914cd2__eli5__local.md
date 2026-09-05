---
qid: ing_69c0914cd2__eli5__local
question: 'Explain: Crash Course in Brain Surgery: Looking Inside GPT-2'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 243
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:23:25-05:00'
sources: []
---

Imagine a busy hospital where every patient’s story is written on a stack of paper notes. The *brain* (GPT‑2) is like the chief surgeon who reads each note, decides what to do next, and writes a new note that builds on everything before it.

**Key parts**

- **Layers** – Think of them as surgical teams stacked one after another; each team adds more refined understanding.
- **Attention** – Like a microscope that lets a team focus on the most relevant parts of every previous note, ignoring the rest.
- **Tokens** – Tiny text fragments (words or sub‑words) that are like individual symptoms the surgeon must record and interpret.

When a new word arrives, GPT‑2’s layers sift through all earlier tokens with attention, weighing how much each should influence the next prediction. The result is a smooth, context‑aware “surgical plan” for what comes next—just as a skilled surgeon stitches together past observations to make the best decision for the patient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
