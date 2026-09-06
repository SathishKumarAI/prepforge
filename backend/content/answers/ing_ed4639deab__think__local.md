---
qid: ing_ed4639deab__think__local
question: 'Explain: Multi-Stage Extraction Pattern — Structured Generation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 501
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:40:35-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   - *What is “Multi‑Stage Extraction Pattern”?* – it’s a design where an LLM first produces a rough output (e.g., raw text) and then another pass refines or extracts structured data from that output.  
   - *Assume*: user wants to understand why we use two passes, how they differ, and what benefits arise.

**2. Adopt the “pipeline‑vs‑single‑shot” mental model**  
   - Think of a pipeline: Stage 1 = **Generation**, Stage 2 = **Extraction/Validation**.  
   - Contrast with a single prompt that tries to generate structured data directly (often noisy).

**3. Step‑by‑step reasoning**  
   1. *Stage 1*: Prompt the model to produce an unstructured answer or narrative.  
   2. *Stage 2*: Feed that output into a second prompt (or another model) that parses it into a JSON/CSV schema, optionally re‑asking for clarification on ambiguous parts.  
   3. *Benefits*:  
      - **Flexibility** – Stage 1 can be generic; Stage 2 tailors to any schema without rewriting the first prompt.  
      - **Error correction** – Stage 2 can detect and fix mis‑interpretations or missing fields.  
      - **Cost efficiency** – The extraction stage often requires fewer tokens than a large, all‑in‑one prompt.

**4. Common pitfalls to avoid**  
   - *Over‑complicating Stage 1*: if it already contains structured hints, the extra pass adds noise.  
   - *Blindly trusting Stage 2*: always validate against expected constraints; otherwise you’ll propagate errors.  
   - *Token budget mismanagement*: each stage consumes tokens; plan for total cost.

**5. Sanity‑check & verbalize**  
   - Verify that each stage has a clear, single responsibility.  
   - Explain to the user: “First we let the model freely describe the content; then we systematically pull out the exact fields you need.”  
   - Use concrete examples (e.g., summarizing a paragraph into a JSON object) to illustrate the flow.

This structured thought process can be reused whenever explaining any multi‑step prompt design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
