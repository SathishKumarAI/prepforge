---
qid: ing_b610f74332__faang__local
question: 'Explain: Summarization: Consistency, relevance, length'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 492
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:46:31-05:00'
sources: []
---

**Clarify**  
We’re asked how a summarizer can balance three goals: *consistency* (the summary stays true to the source), *relevance* (key ideas surface), and *length* (compact yet complete). I’ll assume we’re working with an extractive or abstractive model trained on natural‑language corpora, and that evaluation will be via ROUGE or human judgment.

**Approach**  
1. **Model choice** – pick a transformer encoder–decoder (e.g., T5) fine‑tuned for summarization.  
2. **Loss design** – combine cross‑entropy with a *coverage* penalty to discourage repetition, and a *length‑control* token or dynamic temperature to hit target size.  
3. **Post‑processing** – run a consistency checker (e.g., entailment model) to flag hallucinations; prune low‑confidence sentences.

**Depth**  
- *Consistency*: Add an auxiliary entailment loss: the generated summary must be entailed by the source embedding, reducing hallucinated facts.  
- *Relevance*: Use pointer‑generator networks that copy salient tokens weighted by attention scores derived from a relevance classifier (TF‑IDF + transformer).  
- *Length*: Introduce a length token `<len=200>` at decoding start; during beam search, penalize sequences whose cumulative log‑probability diverges from the target length. Complexity: training ≈ O(N·L²) for N tokens, L sequence length; inference ~ beam×length.

**Edge Cases**  
- Extremely long inputs → truncate or hierarchical encoding.  
- Non‑textual data (tables, code) → specialized encoders.  
- Ambiguous facts → the entailment module may reject the summary; fallback to source snippet.

**Optimize & Communicate**  
Future work: replace static length token with a learned *length controller* that predicts per‑sentence stopping probability, improving fluency. I’d explain this by walking through a sample input, showing attention heatmaps, and demonstrating how the coverage penalty keeps repetition low while the length token guarantees brevity. This shows clear trade‑offs—extra loss terms increase training time but yield higher ROUGE and lower hallucination rates, satisfying FAANG’s emphasis on measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
