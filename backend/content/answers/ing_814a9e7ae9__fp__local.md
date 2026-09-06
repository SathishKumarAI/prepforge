---
qid: ing_814a9e7ae9__fp__local
question: 'Explain: Spaces — Harvey | AI software for legal and professional services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 379
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:40:12-05:00'
sources: []
---

**Why “Spaces – Harvey” exists**

Legal work is a *high‑dimensional* problem: each case contains statutes, precedents, client facts, and procedural rules that must be reconciled in real time. The fundamental bottleneck is **knowledge extraction**—turning unstructured documents into actionable, comparable data without losing nuance. Harvey solves this by framing every document as a point in a *semantic manifold* where distances reflect legal relevance.

**How it works**

1. **Contextual embedding** – Using transformer models fine‑tuned on court opinions, Harvey maps text to vectors that encode both syntactic and jurisprudential meaning.
2. **Graph construction** – These vectors become nodes; edges are weighted by similarity and precedent strength, forming a legal knowledge graph.
3. **Query propagation** – A user’s question initiates a message passing algorithm that aggregates evidence across the graph, producing ranked citations and argument templates.

This pipeline is an instance of *probabilistic inference on a manifold*: we approximate posterior relevance scores by traversing geodesics in embedding space, guaranteeing that highly similar precedents are always considered before distant ones. The optimization objective is to maximize recall while minimizing false positives, achieved via contrastive loss during training.

**Non‑obvious insight**

Most legal AI tools treat documents as flat bags of words; Harvey’s *graph‑based* approach preserves the **hierarchical structure of law** (e.g., statutes → case law → commentary). Consequently, it can automatically detect when a precedent is *overruled* or *distinguished*, something that flat models miss. This subtle structural awareness dramatically improves both accuracy and interpretability for legal professionals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
