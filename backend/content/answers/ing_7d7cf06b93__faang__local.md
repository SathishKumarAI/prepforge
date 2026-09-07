---
qid: ing_7d7cf06b93__faang__local
question: 'Explain: Design an agent that takes a draft NDA and returns a redlined
  Word document reflecting the firm''s playbook, not a chat response.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 478
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:37:00-05:00'
sources: []
---

**Clarify**  
We’re building an *auto‑redline* system: input is a raw NDA in Word; output is the same document with tracked changes that mirror the firm’s policy playbook (e.g., clause swaps, word substitutions).  
Assumptions to confirm:  
- The playbook is available as structured rules or templates.  
- Input documents are clean Office‑ML (docx) files, not PDFs or scanned images.  
- Legal staff want a *Word* output with tracked changes for review.

**Approach**  
1. **Parse the docx** → extract paragraphs, runs, and existing formatting.  
2. **Normalize content**: tokenize sentences; build an NLP pipeline to detect clause boundaries (e.g., using spaCy’s sentence detector + custom regex).  
3. **Match against playbook**: each clause is a rule with “find” patterns (regex or semantic embeddings) and “replace” templates. Use vector similarity for fuzzy matching.  
4. **Apply changes**: generate Word tracked‑change XML elements (`w:ins`, `w:del`) to insert deletions/insertions per rule.  
5. **Re‑assemble docx** → return a redlined file.

**Depth**  
- Complexity: O(n × m) where *n* = clauses in doc, *m* = rules; mitigated by indexing rules via hashing or ANN search.  
- Use `python-docx` + lxml for manipulation; keep original formatting to preserve layout.  
- Handle nested lists and tables by recursively processing child elements.

**Edge Cases**  
- Ambiguous clause matches → fallback to manual review flag.  
- Overlapping rules → priority queue or rule‑precedence metadata.  
- Large documents → stream processing to avoid memory blowup.

**Optimize & Communicate**  
Future improvements: train a fine‑tuned transformer on firm’s past redlines for higher accuracy; cache rule matches per document type. I’d explain the trade‑off between regex simplicity (fast, deterministic) and ML flexibility (better recall but heavier compute). This modular design lets us swap components without breaking the end‑to‑end pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
