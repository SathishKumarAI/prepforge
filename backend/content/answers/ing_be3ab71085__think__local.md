---
qid: ing_be3ab71085__think__local
question: 'Explain: Character vs Subword vs Word — Tokenization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 484
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:31:21-05:00'
sources: []
---

**1. Clarify the goal & assumptions**  
   • Define *token* in NLP (the smallest unit fed into a model).  
   • Assume we’re working with transformer‑based models that accept integer token IDs.  
   • Note the trade‑off: smaller vocab → more tokens, larger vocab → fewer tokens but higher memory.

**2. Adopt a hierarchical mental model**  
   • View tokenization as a cascade: *characters* → *subwords* (BPE/WordPiece) → *whole words*.  
   • Each level is a mapping from input text to a sequence of IDs, with its own vocabulary size and segmentation strategy.

**3. Step‑by‑step reasoning**  
   1. **Character tokenization**: split on every glyph; easy but yields long sequences and no shared sub‑units across words.  
   2. **Subword tokenization**: start from characters, merge frequent pairs (BPE) or add suffix/prefix markers (WordPiece); balances vocabulary size and out‑of‑vocabulary handling.  
   3. **Word tokenization**: split on whitespace/punctuation; simple but cannot represent unseen words and ignores morphological structure.

   Compare their *token counts*, *OOV rates*, *model memory* and *semantic granularity*.

**4. Common traps to avoid**  
   • Assuming fewer tokens always means better performance—longer sequences increase compute.  
   • Ignoring that subword vocab must be fixed during training; dynamic vocab changes hurt reproducibility.  
   • Overlooking language‑specific quirks (e.g., Chinese doesn’t have spaces).

**5. Sanity‑check & verbalize**  
   • Verify with a toy example: “unhappiness” → chars, BPE splits into “un”, “##hap”, “##piness”; whole word is one token.  
   • Explain the trade‑offs aloud: *characters* give maximal flexibility but high sequence length; *subwords* capture morphology and keep vocab manageable; *whole words* are fast but brittle to OOVs.  

This structured thinking can be reused whenever evaluating or designing a tokenizer for any language model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
