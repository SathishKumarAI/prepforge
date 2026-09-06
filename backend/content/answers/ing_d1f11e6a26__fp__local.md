---
qid: ing_d1f11e6a26__fp__local
question: 'Explain: Split — LlamaIndex | AI Agents for Document OCR + Workflows'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 515
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:26:54-05:00'
sources: []
---

**Why we *split* in LlamaIndex**

The core problem is that language‑model (LLM) backends can only ingest a finite number of tokens per request (≈ 8K–32K). A raw PDF or scanned image may contain millions, so we must break it into manageable pieces.  
Splitting is not arbitrary; it’s an *optimization* of two competing forces:

| Force | Effect |
|-------|--------|
| **Token budget** | Smaller chunks reduce per‑query cost and keep the LLM within its window. |
| **Semantic coherence** | Larger chunks preserve context, allowing embeddings to capture richer meaning. |

Mathematically, we minimize total retrieval error \(E = \alpha\,\frac{N}{S} + \beta\,\frac{1}{S}\) where \(N\) is document length, \(S\) chunk size, and \(\alpha,\beta\) weight token cost vs. semantic loss. The optimal \(S^\*\) balances these terms; it rarely coincides with a fixed “best” size but depends on the model’s context window and the document’s topical density.

**AI Agents for OCR + Workflows**

Once split, each chunk is fed to an *OCR agent* (e.g., a Vision‑LLM) that extracts text, corrects layout, and tags entities. A *workflow agent* then orchestrates downstream tasks—indexing, summarization, question answering—by chaining LLM calls with stateful memory. The workflow’s design follows the same optimization principle: keep each sub‑task within token limits while preserving cross‑chunk dependencies via a shared knowledge graph.

**Non‑obvious insight**

Many overlook that *over‑aggressive* splitting can actually hurt retrieval because embeddings become too local; a single concept split across two chunks yields two weak vectors instead of one coherent representation. Optimal splits are therefore *semantic*, not purely lexical—guided by topic boundaries, paragraph cohesion, or even visual cues in scanned documents. This nuance turns a simple preprocessing step into a principled design choice that directly boosts downstream AI performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
