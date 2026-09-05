---
qid: ing_2f174a4712__fp__local
question: 'Explain: Part 2: Why It Happens — That Is Embarrassing: Why Frontier AI
  Still Makes Things Up, and What to Do About It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 511
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:45:09-05:00'
sources: []
---

## Why Frontier AI Still Makes Things Up  

At its core, a large language model (LLM) learns to **maximize the probability** \(P(w_t\mid w_{<t})\) of the next token in a text corpus—an empirical *cross‑entropy* objective.  
This objective guarantees fluent output but says nothing about *truth*. The training data is noisy, incomplete, and heavily biased toward certain styles or topics; the model therefore learns a **posterior distribution** over tokens that is a weighted blend of factual and fictitious patterns.  

When asked for facts, the LLM samples from this posterior. Because it has no internal notion of *world state*, it cannot verify whether a sampled token is consistent with reality. The result is a “hallucination”: plausible‑seeming text that is factually wrong.  
Two mechanisms amplify this:

1. **Temperature / beam width** – low temperature forces the model to pick the highest‑probability tokens, which may be *over‑generalized* and unverified; large beams encourage diversity but also propagate errors.
2. **Lack of grounding** – the model’s hidden states encode only statistical correlations, not a causal or ontological representation of entities.

### Non‑obvious insight  
The hallucination problem is fundamentally an **optimization mismatch**: we optimize for *likelihood* (language fluency) while evaluating against *truthfulness*. Any improvement must alter the objective—e.g., by adding a factuality penalty, integrating retrieval or knowledge bases, or constraining the output space to verified facts.

### What to do  
- **Retrieval‑augmented generation**: fetch real documents and condition the decoder on them.  
- **Fine‑tuning with truth‑labels**: penalize incorrect claims during training.  
- **Post‑generation verification**: run a separate model or rule‑based checker on the output.  

By aligning the loss function more closely with factual correctness, we can reduce the “make‑things‑up” tendency without sacrificing fluency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
