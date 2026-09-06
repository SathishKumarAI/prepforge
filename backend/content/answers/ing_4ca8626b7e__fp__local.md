---
qid: ing_4ca8626b7e__fp__local
question: 'Explain: Context Assembly — Code Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 430
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:47:58-05:00'
sources: []
---

**Context Assembly – the backbone of modern code assistants**

The core problem a code‑generation model faces is *finite context*. A transformer can attend to only ~8 k tokens, yet a function may require dozens of files, external APIs, and project‑wide conventions. Context assembly turns this limitation into an opportunity: it selects, compresses, and stitches the most relevant pieces into a single attention window.

1. **Relevance as entropy minimisation**  
   Each candidate snippet \(s_i\) has an associated *utility* \(u_i=\mathbb{P}(\text{useful}\mid s_i)\). We wish to minimise the expected information loss \(-\sum u_i \log u_i\) while respecting the token budget. Greedy selection of highest‑utility snippets, followed by LRU‑style pruning, yields a set that maximises mutual information with the target code.

2. **Semantic graph routing**  
   The project is represented as a directed graph \(G=(V,E)\). Edges encode imports, type references, and test coverage. Shortest‑path heuristics from the cursor to potential helpers identify “hot spots” that are likely to influence the current edit. This geometric view ensures that we do not merely surface syntactically similar code but *functionally* relevant modules.

3. **Non‑obvious insight: caching latent embeddings**  
   Rather than recomputing a snippet’s embedding every time, most assistants cache its vector in an LRU store keyed by file hash and last‑modified timestamp. Because the embedding is deterministic given the source, this amortises the heavy forward pass cost across thousands of edits, allowing real‑time assembly without sacrificing relevance.

In short, context assembly transforms a sparse attention budget into a high‑utility, low‑entropy “snapshot” of the project, grounded in information theory and graph geometry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
