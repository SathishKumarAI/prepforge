---
qid: ing_842b9d4d73__fp__local
question: 'Explain: close — Tokenizer (Lucene 7.3.1 API)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 556
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:46:21-05:00'
sources: []
---

### Why a “close” tokenizer is needed

In full‑text search we treat a document as an *unordered bag of tokens*.  
A query must be tokenized the same way; otherwise, two semantically
identical strings can produce different internal representations and
fail to match.  Lucene’s **Tokenizer** is the bridge that turns raw
bytes into this canonical form.

The *close* tokenizer in Lucene 7.3.1 solves a subtle problem:  
when you build an analyzer that **splits on whitespace but keeps all
original characters**, you must also preserve the original token for
exact‑match queries, highlighting, or phrase matching.  A naive split
would lose the original form and make it impossible to reconstruct
the exact substring in the index.

### Derivation from first principles

1. **Tokenization as a mapping**  
   Let `f: S → T` be a function that maps a source string `S` to a set of tokens `T`.  
   For search we need an *invertible* mapping on the token level so that
   a query token can be matched against its stored representation.

2. **Preservation of identity**  
   The tokenizer must satisfy: for every input segment `s ∈ S`,
   there exists a token `t` such that `t = s`.  
   This is exactly what the *close* tokenizer does: it emits the
   original string as a token while also emitting any sub‑tokens
   required by the underlying analyzer.

3. **Efficiency constraint**  
   Tokenizing should be linear in input length and memory‑bounded.
   The close tokenizer achieves this by reusing the same buffer for
   both the original token and its derivatives, avoiding extra
   allocations.

### Deeper principle: *Information preservation*

The tokenizer is an instance of a *lossless encoder* for text.  
By emitting the full input as a token we guarantee that no
information about term boundaries or exact spelling is lost.
This aligns with Shannon’s information theory: the encoding rate
equals the entropy of the source when no compression occurs,
ensuring perfect recoverability.

### Non‑obvious insight

Most developers think a tokenizer merely *splits* text.  
In Lucene, however, a tokenizer can also **augment** the token stream.
The close tokenizer demonstrates that adding an extra token (the
original string) is not a waste—it preserves exact matches without
affecting the search performance of other tokens.  This duality,
often overlooked, allows analyzers to support both fuzzy and exact
search modes simultaneously.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
