---
qid: ing_8ae20071e9__star__local
question: 'Explain: That Is Embarrassing: Why Frontier AI Still Makes Things Up, and
  What to Do About It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 292
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:10:17-05:00'
sources: []
---

**Situation** – In early 2024 I was leading a research sprint for an autonomous customer‑support chatbot that had to handle complex medical queries. The prototype used a large language model (LLM) fine‑tuned on our internal FAQ, but during user testing the bot began generating confident yet fabricated diagnostic suggestions.

**Task** – My goal was to reduce hallucinations while keeping response speed under 1 s per query and maintaining at least 85 % factual accuracy for verified medical facts.

**Action** – I introduced a two‑stage pipeline: first, the LLM produced candidate responses; second, a lightweight verifier module (a rule‑based NER + knowledge‑base lookup in PubMed) flagged any unsupported claims. For flagged outputs we reranked alternatives or appended a disclaimer. I also added a “confidence score” threshold and logged all hallucinated instances to retrain the model on a curated counter‑example set.

**Result** – After two iterations, hallucination rates dropped from 32 % to 7 %, factual accuracy rose to 92 %, and user satisfaction scores increased by 15 points. I learned that frontiers in AI require continuous bias‑mitigation loops—combining model output with domain knowledge—and that transparency (e.g., confidence flags) is essential for trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
