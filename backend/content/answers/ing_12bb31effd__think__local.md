---
qid: ing_12bb31effd__think__local
question: 'Explain: Step 4: Build Your Judge Prompt — Ai Evals Comprehensive Study
  Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 421
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:58:16-05:00'
sources: []
---

**Metacognitive Blueprint for “Step 4: Build Your Judge Prompt – AI‑Evals Comprehensive Study Guide”**

1. **Clarify the ask & set assumptions**  
   - Identify what “Judge Prompt” means in AI‑Eval context (a prompt that instructs a model to act as an evaluator).  
   - Assume the reader knows basic Eval concepts but may be new to prompt engineering.

2. **Adopt a structured framework**  
   - *Goal → Audience → Constraints → Evaluation Criteria*  
   - Think of the prompt like a recipe: ingredients (instructions), method (structure), and expected dish (evaluation outcome).

3. **Reason step‑by‑step**  
   - Start with the purpose: “Why do we need a judge?” → objective of fairness, consistency.  
   - Define the role explicitly (“You are an impartial evaluator…”) to set context.  
   - Enumerate concrete criteria (accuracy, relevance, style).  
   - Provide examples or templates for each criterion.  
   - Include scoring guidelines and tie‑break rules.  
   - End with a call‑to‑action: “Return the score and brief justification.”

4. **Avoid common pitfalls**  
   - Don’t overload the prompt; keep it concise yet complete.  
   - Avoid ambiguous terms (“good” → specify measurable metrics).  
   - Beware of circular reasoning (prompt that references its own output).  
   - Don’t neglect edge cases or negative examples.

5. **Sanity‑check & articulate**  
   - Read the prompt aloud: does it flow logically?  
   - Verify each component covers a distinct evaluation dimension.  
   - Ask “What would I want from an evaluator?” and confirm those needs are met.  
   - Finally, draft a brief summary of the reasoning so the reader can see how each piece was derived.

Follow this loop whenever you build or critique a judge prompt: clarify → structure → reason → guard → verify.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
