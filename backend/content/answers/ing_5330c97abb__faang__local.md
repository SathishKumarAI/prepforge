---
qid: ing_5330c97abb__faang__local
question: 'Explain: Scenario 4: Design a code assistant — Question Bank'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 465
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:57:43-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *code‑assistant* that can read, understand, and generate code snippets on demand—think of it as the “AI pair programmer” for a given language (e.g., Python).  
Key assumptions:  
- The assistant must support at least one mainstream language.  
- It should handle syntax errors, suggest completions, and refactor simple patterns.  
- Latency < 200 ms for an in‑IDE request; memory ≤ 4 GB per instance.

**Approach**  
1. **Language model backbone** – fine‑tune a transformer (e.g., GPT‑4) on large code corpora + comment–code pairs.  
2. **Prompt engineering** – prepend a “system” prompt that specifies the language, style guidelines, and error‑handling rules.  
3. **Context window management** – slide a 8 k token window over the file; use a lightweight LRU cache for surrounding modules.  
4. **Post‑processing** – run the model output through a syntax checker (e.g., `ast.parse`) to catch errors before returning.

**Depth**  
- *Training*: supervised fine‑tuning on 10M+ GitHub repos + reinforcement via human‑in‑the‑loop feedback loops.  
- *Runtime*: O(n) token generation, latency dominated by GPU inference (~50 ms per 512 tokens).  
- *Safety*: filter harmful code patterns; maintain a blacklist of dangerous APIs.

**Edge Cases**  
- Very large files → window truncation may miss context.  
- Ambiguous prompts (e.g., “refactor”) → request clarification or offer multiple suggestions.  
- Non‑deterministic outputs – seed control and deterministic decoding for reproducibility.

**Optimize & Communicate**  
Future improvements: incremental inference to reuse partial outputs, caching frequent patterns, and integrating static analysis tools for richer feedback. I’d explain the trade‑off between model size (accuracy) and latency, justify fine‑tuning over training from scratch, and outline how each component meets the interviewer's criteria of clarity, depth, and structured reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
