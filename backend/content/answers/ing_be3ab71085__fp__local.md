---
qid: ing_be3ab71085__fp__local
question: 'Explain: Character vs Subword vs Word — Tokenization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 450
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:48:04-05:00'
sources: []
---

**Tokenization: the interface between language and models**

At its core a model consumes *numbers*. The mapping from raw text to numbers is a **discretisation** problem: we must partition an arbitrary string into symbols that can be indexed, learned, and recombined.  
The choice of symbol size trades off *model capacity* against *data efficiency*, exactly as in the bias‑variance trade‑off.

| Symbol type | Granularity | Why it works |
|-------------|--------------|--------------|
| **Character** | 1–2 bytes | Guarantees coverage: every input is representable. The representation is very fine, so a model must learn morphology from scratch; this inflates sequence length and slows training. |
| **Word** | Variable‑length token (often dictionary‑based) | Captures whole lexical items as atomic units, reducing sequence length drastically. However it suffers catastrophic out‑of‑vocabulary (OOV) errors: rare or morphologically complex words are unseen during training, forcing the model to ignore them. |
| **Subword** (BPE/WordPiece) | Data‑driven chunks that sit between characters and words | Optimises *information density*: each subword carries a predictable amount of entropy (~4–6 bits). It balances coverage with compression—rare words are split into frequent subwords, reducing OOVs while keeping sequences short. The greedy merge rule is an instance of **minimum description length (MDL)**: it finds the smallest alphabet that maximises compressibility.

**Non‑obvious insight:**  
Subword units implicitly encode *semantic regularities* because frequently co‑occurring morphemes are merged. Thus a model learns morphological patterns *for free*, without explicit linguistic supervision, and can generalise to unseen words by recombining known subwords—a property that character models lack (they must learn morphology from scratch) and word models lack (they cannot extrapolate beyond the dictionary).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
