---
qid: ing_5d39ee6166__eli5__local
question: How do you evaluate a RAG pipeline? Why evaluate components separately from
  the end-to-end system?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 236
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:04:12-05:00'
sources: []
---

Imagine a sandwich shop that makes custom subs. The RAG (Retrieve‑Augment‑Generate) pipeline is like three chefs: the **retriever** looks up the best bread and fillings from the pantry; the **augmenter** adds fresh herbs and sauces to boost flavor; the **generator** writes the final recipe card for the customer.

To know if the shop serves great subs, you first test each chef alone. Does the retriever find the right ingredients quickly? Does the augmenter mix them tastefully? Does the generator produce clear, tasty instructions? Evaluating them separately lets you spot a slow ingredient lookup or a bland sauce before blaming the whole sandwich.

After that, you let all chefs work together and evaluate the final sub: speed, flavor, and customer satisfaction. End‑to‑end tests show how well the parts mesh, but component tests keep each chef sharp and help fix specific problems without re‑testing everything.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
