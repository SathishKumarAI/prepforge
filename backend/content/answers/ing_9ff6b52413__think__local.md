---
qid: ing_9ff6b52413__think__local
question: You have a 200k-token context with instructions and 50 documents. Where
  do you put what, and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 596
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:39:46-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- *What is “where” asking for?* We’re deciding how to pack a huge context window (≈200 k tokens) that contains:  
  - A set of **instructions** (e.g., “Answer concisely…”)  
  - **50 documents** (likely long PDFs/texts).  
- *Assume:* the model can ingest up to 200 k tokens in one prompt; no external retrieval.  
- *Goal:* maximize useful content while keeping instructions clear.

**2️⃣ Mental model: “Prioritize & compress”**  
Treat the context as a hierarchy:  
1. **Core instruction set** – must stay verbatim (high priority).  
2. **Document excerpts** – only include essential passages (medium‑to‑low priority).  
Use compression tactics: summarization, chunking, selective quoting.

**3️⃣ Step‑by‑step reasoning**  

| Step | Action | Why |
|------|--------|-----|
| A | Write the instruction block first (≈200–300 tokens). | Keeps it at the top so the model “sees” it before any data; reduces misinterpretation. |
| B | For each document, create a 1‑2 sentence summary plus one key quote if needed. | Summaries compress long text to ~100–150 tokens each → 50 × 120 ≈ 6k tokens. |
| C | Append the summaries in a structured list (e.g., `Doc 1: …`). | Structured format aids extraction and reduces token waste. |
| D | If space remains, add selective excerpts for documents that are highly relevant to the query. | Adds depth where needed without bloating the prompt. |
| E | Reserve any remaining tokens for a brief “meta‑note” reminding the model of its role (e.g., “Use only these docs”). | Prevents hallucination from unrelated content. |

**4️⃣ Common traps to avoid**  
- *Putting instructions at the end*: the model may skip them when it runs out of context.  
- *Copying full documents verbatim*: wastes tokens and may exceed limits.  
- *Unstructured concatenation*: makes it hard for the model to locate relevant parts.  
- *Over‑compressing summaries*: lose nuance needed for accurate answers.

**5️⃣ Sanity‑check & communicate**  
- Count tokens after drafting; aim for ~10–15 k tokens total, leaving a buffer (~180 k).  
- Run a quick test: ask the model a simple query and verify it references the correct documents.  
- Explain to users: “Instructions first, then concise document summaries—this keeps the prompt within 200 k tokens while giving the model enough detail to answer accurately.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
