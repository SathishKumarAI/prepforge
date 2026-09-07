---
qid: ing_26fb187e53__faang__local
question: Why do LLMs famously miscount the number of r's in "strawberry"?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 493
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:14:14-05:00'
sources: []
---

**Clarify**

The question asks why large language models (LLMs) often give a wrong count for the letter “r” in the word *strawberry*.  
*Assumptions to confirm:* we’re dealing with token‑level generation, not post‑processing; the model is asked “How many r’s are in strawberry?” and it outputs a number.

**Approach**

1. Identify how LLMs represent text internally (tokenization).  
2. Examine the training objective (next‑token prediction) vs. exact counting.  
3. Consider error propagation from noisy context or token boundaries.  
4. Relate to known phenomena: hallucinations, surface‑level pattern matching.

**Depth**

- **Tokenization:** *strawberry* splits into sub‑tokens like “str”, “aw”, “ber”, “ry”. The two “r”s are split across tokens; the model never sees a single token containing both.  
- **Training objective:** Models learn to predict the next token, not to perform arithmetic on characters. Counting requires an internal representation of the entire string, which isn’t part of the training loss.  
- **Contextual noise:** During inference, the prompt may introduce ambiguity (“In strawberry, how many r’s?”). The model relies on statistical patterns (e.g., “strawberry” usually has two r’s) but can mis‑associate due to token overlap or similar words (*starberry*).  
- **Hallucination bias:** When asked for a number, the model often defaults to common counts seen in training data; if it never saw “two r’s in strawberry” explicitly, it may guess “one” or “three”.

**Edge Cases**

- Variants: *Straw‑Berry*, *strawberry* with diacritics.  
- Non‑English tokenizers that merge whole words—would reduce the error.  
- Explicit instruction to count characters before generation.

**Optimize & Communicate**

To fix this, add a preprocessing step: count characters locally and feed the exact number as a prompt, or fine‑tune on character‑counting tasks. Communicating this reasoning shows awareness of tokenization limits, training objectives, and hallucination behavior—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
