---
qid: ing_8c5e78ecb7__fp__local
question: Bulbul-style TTS has to speak code-mixed, mixed-script text naturally. What
  are the hard parts of text normalization and prosody for Indian-language TTS?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 434
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:03:35-05:00'
sources: []
---

**Why code‑mixed, mixed‑script TTS is hard**

The core problem is *semantic alignment*: a single phoneme must encode not only a sound but also an implicit discourse function (e.g., a switch from Hindi to English). When the input text contains multiple scripts (Devanagari + Latin) and languages, the system has to decide

1. **Which grapheme‑to‑phoneme (G2P) rule applies**  
   *Why it matters*: G2Ps are language‑specific; a letter “a” in Devanagari is /ə/ while in English it may be /æ/. The model must learn the joint distribution \(P(\text{ph}|\text{grapheme}, \text{lang})\) and keep the latent “language tag” coherent across tokens.

2. **Prosodic segmentation**  
   *Why it matters*: Prosody is conditioned on discourse structure, not just lexical content. Code‑mixing introduces *prosodic resets*—a pause or pitch drop at a language switch. The system must infer these boundaries from sparse cues (script change, punctuation), which violates the Markovian assumption of most statistical prosody models.

**Deep principle: Information bottleneck**

Treat each spoken segment as an information‑preserving code for *both* linguistic content and discourse function. Minimizing KL divergence between source and target distributions forces the model to compress language identity into a low‑dimensional latent space, naturally yielding prosodic cues aligned with language switches.

**Non‑obvious insight**

Most systems treat script change as a hard boundary; instead, leverage *script‑aware subword embeddings* that retain cross‑lingual similarity. By sharing embedding space across scripts, the model learns that “राम” (Devanagari) and “Ram” (Latin) map to similar phonetic clusters, enabling smoother prosodic transitions without explicit language tags.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
