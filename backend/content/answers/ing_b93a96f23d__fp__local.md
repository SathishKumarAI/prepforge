---
qid: ing_b93a96f23d__fp__local
question: What is WER, and why is it a misleading metric for a voice product?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 385
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:37:48-05:00'
sources: []
---

**Word‑Error Rate (WER)**  
At its core, WER measures how many word edits a recognizer needs to turn the *transcribed* sentence into the *ground‑truth* sentence:

\[
\text{WER}= \frac{S+D+I}{N}
\]

where \(S,D,I\) are substitutions, deletions and insertions, and \(N\) is the number of words in the reference.  
The formula comes from Levenshtein distance: the minimal cost to reconcile two sequences. It assumes every word contributes equally to “accuracy” and that all mistakes carry the same semantic weight.

**Why it misleads for a voice product**

1. **Equal‑weight penalty** – A single misspelled *“color”* is penalised like a catastrophic *“I’ll kill you”*. The metric ignores user intent.
2. **Alignment artefacts** – The optimal edit path can swap a high‑confidence phrase with a low‑confidence one, inflating WER without hurting usability.
3. **Contextual irrelevance** – In command‑style interactions, missing a filler word (“the”) is harmless; deleting “please” changes tone but not function.

**Deeper principle:** WER optimises *edit distance* rather than *user‑perceived quality*. It treats recognition as an isolated string problem instead of a probabilistic inference over intent and context.  
A non‑obvious insight: **WER conflates lexical recall with semantic fidelity**; a system can achieve low WER by memorising common phrases while still misinterpreting rare but critical commands. A voice product should evaluate *intent accuracy* or *task success rate*, not raw edit distance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
