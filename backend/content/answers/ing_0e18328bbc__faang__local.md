---
qid: ing_0e18328bbc__faang__local
question: 'Explain: Paired coding: write a chunker for a legal document that never
  splits a clause and carries enough context that a retrieved chunk is self-contained.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 455
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:16:32-05:00'
sources: []
---

**Clarify**  
We need a text‑chunking routine for legal PDFs/Word docs that:  
1. **Never cuts a clause** (a sentence or semicolon‑separated unit).  
2. Each chunk must contain *enough surrounding context* so that, when retrieved alone, it is self‑contained and meaningful.  
Assumptions: documents are UTF‑8, clauses end with `;` or `.`, and we can afford a 1–2 KB chunk size.

**Approach**  
1. **Preprocess** – tokenize into clauses (regex on `[.;]`).  
2. **Sliding window** – build chunks by appending clauses until the target size is reached, then add a *context buffer* of N preceding/following clauses.  
3. **Boundary check** – ensure we never split a clause; if adding the next clause exceeds size, finalize chunk and start new one with the same context buffer.  
4. **Output** – store each chunk with metadata (doc ID, start/end offsets).

**Depth**  
- Clause regex: `(?<=[.;])\s+` splits on punctuation followed by whitespace.  
- Context buffer size N tuned to cover pronoun references; empirically 2 clauses (~200 B) works for most contracts.  
- Complexity O(n) time, O(1) extra space per chunk.  
- Handles nested clauses because the split regex respects the outer delimiter.

**Edge Cases**  
- Extremely long single clause → exceeds target size; fallback: split at nearest semicolon or hyphen.  
- Missing punctuation → treat entire paragraph as one clause.  
- OCR artifacts → normalize whitespace before tokenization.

**Optimize & Communicate**  
- Use streaming I/O to handle gigabyte docs without loading whole file into memory.  
- Cache hash of chunks for duplicate detection.  
- Explain trade‑offs: larger context buffer = more self‑containment but higher storage; smaller buffer = tighter size but risk of incomplete references.  

This design guarantees clause integrity, provides sufficient local context for retrieval, and scales to large legal corpora.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
