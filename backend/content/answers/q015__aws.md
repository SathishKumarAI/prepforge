---
qid: q015
question: "When would you fine-tune an LLM instead of using prompting or RAG?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd frame it as a ladder I climb only when justified: start with prompting, add RAG when the model needs fresh or private facts, and fine-tune only to teach a consistent behavior, style, or format that prompting can't reliably enforce, or to shrink prompts at high volume. Fine-tuning changes weights; it's great for form and tone but a poor way to inject facts, which RAG handles better.

To show **Are Right A Lot** and **Frugality** I'd give a real decision. A classification service needed a strict output style across millions of calls. Prompting got us to 92% but with long few-shot prompts inflating per-call token cost. I fine-tuned a smaller model on 5,000 curated examples: accuracy rose to 97%, and dropping the few-shot examples cut token cost per call about 55%, paying back the training spend within weeks.

The trade-offs I'd name: fine-tuning adds data-curation effort, training cost, and a model to maintain and re-tune as data drifts, so I only do it when volume amortizes that overhead. On AWS I'd fine-tune via Bedrock custom models or SageMaker and hold out an eval set.

A bar-raiser listens for whether I reach for fine-tuning last, for the right reason, behavior not facts, and can quantify the break-even that justified it.
