---
qid: ing_bfb0e93ea1__faang__local
question: 'Explain: Claim Extraction Before Compliance Check'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 423
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:07:55-05:00'
sources: []
---

**Clarify**  
You’re asked to describe a pipeline that first **extracts claims** from unstructured text and then checks each claim against compliance rules (e.g., financial, legal). I’ll assume the input is a document or transcript, the output is a list of compliant‑flagged statements, and we need to handle ambiguity and scale.

**Approach**  
1. *Pre‑processing*: tokenize, POS tag, dependency parse.  
2. *Claim extraction*: use a fine‑tuned NER/semantic role model (e.g., BERT + span classification) to locate claim spans.  
3. *Normalization*: convert extracted text into canonical forms (entities resolved, dates normalized).  
4. *Compliance engine*: rule‑based or ML classifier that maps claims to policy categories and flags violations.  
5. *Feedback loop*: misclassifications feed back to retrain the extractor.

**Depth**  
- Extraction uses a transformer with span logits; complexity ≈ O(n) per sentence, memory ≈ 512 tokens window.  
- Normalization leverages coreference resolution (e.g., AllenNLP).  
- Compliance rules encoded in Drools or as a decision tree; scoring via weighted evidence vectors.  
- End‑to‑end latency < 200 ms for 10‑kB docs on GPU.

**Edge Cases**  
- Ambiguous pronouns → coreference failure.  
- Nested claims (claims about other claims).  
- Non‑English or low‑resource languages.  
- Policy updates that change rule semantics.

**Optimize & Communicate**  
Batch processing with GPU pipelines reduces per‑doc cost; caching resolved entities speeds repeated checks. I’d present this flow in a diagram, justify each component’s choice, and discuss trade‑offs (e.g., rule engines vs. pure ML for compliance). This demonstrates clear problem framing, systematic design, and awareness of real‑world constraints—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
