---
qid: ing_d90e98934b__think__local
question: How does retrieval over a codebase differ from retrieval over prose?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 500
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:17:01-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Identify what “retrieval” means: searching for relevant text fragments, code snippets, or documentation.  
   - Assume a typical codebase (structured files, functions, classes) versus prose (articles, reports).  
   - Note that the goal is to explain differences in *content*, *structure*, and *search signals*.

**2. Adopt a mental model of “document vs. structured artifact”**  
   - Treat prose as free‑text with semantic flow; code as highly regular syntax with explicit identifiers and types.  
   - Use this dichotomy to separate retrieval cues: keyword matching, embeddings for meaning in prose; token patterns, AST nodes, and type signatures in code.

**3. Reason step by step toward the answer**  
   1. **Tokenization differences** – prose splits on whitespace/ punctuation; code respects language tokens (identifiers, operators).  
   2. **Semantic signals** – prose relies on contextual embeddings; code can use static analysis (imports, call graphs) to infer relevance.  
   3. **Granularity of results** – prose returns sentences or paragraphs; code returns functions, classes, or even specific lines with syntax highlighting.  
   4. **Noise and ambiguity** – natural language has synonyms/ambiguity; code has precise naming but may be obfuscated by aliases/macro expansions.  
   5. **Indexing strategies** – inverted indexes for prose; additional indices on AST nodes, type hierarchies, or symbol tables for code.

**4. Common traps to avoid**  
   - Assuming embeddings alone suffice for code (they miss structural constraints).  
   - Overlooking that code retrieval often needs semantic similarity (e.g., function signature matching) rather than keyword overlap.  
   - Ignoring versioning and file structure, which heavily influence code search.

**5. Sanity‑check & communicate clearly**  
   - Verify that each point maps back to a concrete difference (tokenization, semantics, granularity).  
   - Explain with examples: “searching for `fetchData` in prose finds any mention; in code it returns the function definition and all call sites.”  
   - Keep language concise, focusing on contrasts rather than exhaustive details.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
