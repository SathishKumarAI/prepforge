---
qid: ing_fb581e2a40__fp__local
question: 'Explain: Evaluation plan — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 514
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:54:27-05:00'
sources: []
---

**Evaluation Plan – Meeting‑Assistant AI**

The core problem the assistant solves is *transforming unstructured spoken or written dialogue into actionable, time‑efficient outputs* (agenda items, follow‑up tasks, summaries). To guarantee this transformation works, we must evaluate it against a principled set of objectives that capture three deep dimensions: **accuracy**, **usability**, and **value**.

1. **Accuracy – Fidelity to intent**  
   *Why*: The assistant’s decisions are only useful if they reflect what the participants actually intended.  
   *Metric derivation*: Treat each utterance as a classification problem (intent = agenda item, task, note). Compute **F₁** per class, weighted by utterance length to penalize over‑segmentation. Use **BLEU‑style overlap** between generated summaries and human‑annotated gold standards; the harmonic mean of precision/recall captures both brevity and completeness.

2. **Usability – Human‑centered interaction quality**  
   *Why*: Even a perfectly accurate system fails if users cannot trust or comprehend it.  
   *Metric derivation*: Apply the **System Usability Scale (SUS)** as a survey, but augment with *interaction latency* (seconds per turn) and *dialogue coherence* measured by a learned *turn‑level perplexity* on the assistant’s own generated responses.

3. **Value – Impact on meeting outcomes**  
   *Why*: The ultimate test is whether meetings finish faster and decisions are clearer.  
   *Metric derivation*: Record pre/post‑assistant metrics: average meeting duration, number of action items completed within 48 h, and a *meeting satisfaction* score from participants. Use **difference‑in‑differences** to isolate the assistant’s effect.

A non‑obvious insight: **Task completion is more informative than raw accuracy**. A system that misclassifies an utterance but still surfaces the correct action item (e.g., through redundancy or context cues) can yield higher value. Therefore, we add a *task‑completion ratio*—the fraction of assistant‑generated tasks that are actually executed—to our evaluation matrix.

By aligning metrics with these principled objectives and incorporating both quantitative and qualitative signals, the evaluation plan ensures the meeting assistant not only “works” but truly **improves** human collaboration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
