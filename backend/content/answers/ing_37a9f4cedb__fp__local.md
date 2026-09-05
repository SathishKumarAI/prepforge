---
qid: ing_37a9f4cedb__fp__local
question: 'Explain: WordPiece — Tokenization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 508
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:02:45-05:00'
sources: []
---

**Why we need sub‑word units**

When a language model sees an unseen word, its parameters are blind to that token.  
Treating every possible string as a separate symbol would explode the vocabulary
and hurt generalisation because many rare tokens share structure (prefixes,
suffixes, compound parts).  The fundamental problem is *efficiently representing* any
string with a finite set of symbols while keeping the vocabulary small.

**From probability to compression**

Let \(p(w)\) be the empirical unigram probability.  
The optimal fixed‑size alphabet that minimises expected code length (Shannon–Fano)
is the one that assigns shorter codes to higher‑probability items.  WordPiece
does exactly this, but in a *dynamic* way: it greedily builds tokens so that
each new token maximises the likelihood of the remaining suffix.

**Greedy construction**

1. Start with an empty vocabulary containing only the special end‑of‑word marker.  
2. Scan training text left‑to‑right; for every prefix \(p\) already in the vocab,
   try extending it by one character to form candidate token \(c\).  
3. Compute how often \(c\) would appear if we split the current word at that
   point; keep the extension with the highest *frequency* (or lowest *surprisal*).
4. Add that extension to the vocab and repeat until a maximum vocabulary size is reached.

This procedure guarantees that every token in the final model appears in the
training data, so the model never sees an out‑of‑vocabulary sub‑word.  The greedy
choice maximises local likelihood, which, by the chain rule, also maximises
the joint probability of the entire corpus under a first‑order Markov assumption.

**Non‑obvious insight**

Because WordPiece greedily optimises *local* frequency, it implicitly enforces a
form of *contextual redundancy*: common suffixes (e.g., “ing”, “ed”) become
independent tokens that can be reused across many words.  This reuse reduces
the entropy of the token sequence more than merely pruning rare words would,
making downstream training data far less noisy and improving transfer to unseen
sentences.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
