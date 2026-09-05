---
qid: ing_3b7017d363__think__local
question: 'Explain: rules like if a rook moves then — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 321
total_tokens: 514
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:45:54-05:00'
sources: []
---

**1. Clarify the ask & assumptions**  
   - Identify that “rules like if a rook moves then” refers to conditional rules in chess (e.g., castling).  
   - Assume the user wants a conceptual explanation, not full code.

**2. Pick a mental model**  
   - Think of each piece as a function: *move(piece, start, end)* → *validate(move)*.  
   - The rule is a guard clause inside that function.

**3. Step‑by‑step reasoning**  
   1. Define the piece’s movement pattern (rook = straight lines).  
   2. Enumerate conditions that must hold before executing: no pieces in between, not moving into check, etc.  
   3. Translate each condition into a boolean expression.  
   4. Combine them with logical operators to form the final guard.

**4. Common traps**  
   - Forgetting edge cases (e.g., board boundaries).  
   - Mixing “can move” vs “must not expose king”.  
   - Over‑optimizing early: write clear code first, refactor later.

**5. Sanity check & verbalize**  
   - Walk through a concrete example (rook at e1 moving to e8).  
   - Verify that all guard conditions evaluate correctly.  
   - Explain the logic in plain terms before coding it, ensuring the explanation matches the implementation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
