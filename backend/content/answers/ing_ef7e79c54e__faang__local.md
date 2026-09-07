---
qid: ing_ef7e79c54e__faang__local
question: 'Explain: Dimension 2: Groundedness (Faithfulness)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 508
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:56:20-05:00'
sources: []
---

**Clarify**  
The interview asks you to explain *Dimension 2: Groundedness (Faithfulness)* in the context of AI evaluation. Clarify that “groundedness” refers to how well a model’s outputs stay true to factual or source material, and “faithfulness” is the degree to which generated content accurately reflects that source without hallucination.

**Approach**  
1. Define the dimension and its importance.  
2. Contrast grounded vs. ungrounded behavior with examples.  
3. Discuss metrics/benchmarks used (e.g., FactCC, FEVER).  
4. Explain techniques to improve faithfulness (retrieval‑augmented generation, controlled decoding).  
5. Touch on evaluation challenges and future research directions.

**Depth**  
- **Definition:** Groundedness = alignment of model output with real‐world facts or a provided context; Faithfulness = absence of hallucinations.  
- **Why it matters:** Trustworthy AI, compliance, safety.  
- **Examples:** A medical QA system that correctly cites evidence vs. one that fabricates drug interactions.  
- **Metrics:** *FactCC* measures factual consistency via entailment classifiers; *FEVER* scores claims against Wikipedia snippets; *BLEU/ROUGE* are insufficient because they don’t capture truth.  
- **Improvement methods:**  
  - *Retrieval‑augmented generation (RAG):* retrieve relevant documents first, then condition the generator on them.  
  - *Controlled decoding:* penalize hallucination tokens or enforce evidence tags.  
  - *Post‑hoc verification:* run an external fact‑checking model on outputs.  
- **Complexity trade‑offs:** Retrieval adds latency; controlled decoding may reduce fluency.

**Edge Cases**  
- Ambiguous queries where multiple sources conflict → the model may still hallucinate a “consensus.”  
- Novel facts not present in training data → groundedness can degrade.  
- Over‑reliance on evidence leads to overly conservative responses.

**Optimize & Communicate**  
Wrap up by stressing that improving groundedness is an ongoing research frontier: better retrieval indexes, tighter integration of knowledge graphs, and multi‑modal grounding (e.g., images). In a FAANG interview, I’d finish with a concise statement: “Ensuring faithfulness isn’t just a technical tweak; it’s the cornerstone of safe, reliable AI that users can trust.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
