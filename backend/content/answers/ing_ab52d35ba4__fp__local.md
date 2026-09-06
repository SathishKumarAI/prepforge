---
qid: ing_ab52d35ba4__fp__local
question: 'Explain: Sources — Character Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 479
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:09:35-05:00'
sources: []
---

### Why “Sources” Matter in a Character‑AI System

A character‑AI model is essentially a conditional language generator: given an input prompt *x*, it must output text *y* that satisfies two constraints  

1. **Fidelity** – the reply must be consistent with the character’s established persona and history.  
2. **Coherence** – the reply must read naturally as human dialogue.

To satisfy both, the model needs a *reference set* of information: the character’s back‑story, past utterances, style cues, and any domain knowledge (e.g., world lore). These are what we call **sources**.

#### From Information Theory to Retrieval

Treat each source token *sᵢ* as a sample from a latent distribution \(P_{\text{char}}(y|x)\). The model’s objective is to approximate this distribution. If the source set were empty, the model would collapse to generic language patterns (maximizing entropy), losing personality. Conversely, if sources are too narrow, the model overfits and cannot generalize to novel prompts.

Thus, we formalize a *retrieval‑augmented* objective:

\[
\mathcal{L} = - \log P_{\text{gen}}(y|x,S) ,
\]

where \(S=\{s_1,\dots,s_k\}\). The retrieval component selects the most relevant \(s_i\) by minimizing a distance metric in embedding space, effectively performing *information‑theoretic compression*: only the bits of the source that reduce uncertainty about *y* are kept.

#### Non‑Obvious Insight

Most designers treat sources as static text snippets. In practice, **dynamic source construction**—where the system updates \(S\) on‑line based on user history and evolving character arcs—improves both fidelity and creativity. This turns the AI into a *self‑learning* dialogue partner that never repeats the same answer, because each new interaction reshapes its internal source distribution.

In short: sources are the *entropy budget* of character consistency; optimizing retrieval over them is what lets a generative model stay in character while still sounding human.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
