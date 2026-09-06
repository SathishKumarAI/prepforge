---
qid: ing_bfbf1bf83c__think__local
question: 'Explain: Trace Your Application — GitHub - Arize-ai/phoenix: AI Observability
  & Evaluation \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 399
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:37:39-05:00'
sources: []
---

**Meta‑thinking guide for explaining “Trace Your Application – GitHub – Arize‑ai/phoenix”**

1. **Clarify the ask & set assumptions**  
   * Identify what “trace your application” means in this context (distributed tracing, observability).  
   * Assume the reader knows basic GitHub navigation but not the Phoenix repo specifics.

2. **Choose a mental model / framework**  
   * Use the *“Problem → Tool → Workflow → Outcome”* flow: first state the problem (hard‑to‑debug AI pipelines), then the tool (Phoenix’s tracing feature), followed by how it’s used, and finally what you gain.

3. **Step‑by‑step reasoning**  
   a. Open the GitHub repo link.  
   b. Locate the README or docs folder; find sections on “Tracing” or “Observability.”  
   c. Note key files (e.g., `tracing.py`, `config.yaml`).  
   d. Explain how to instrument code: import, start trace, add spans.  
   e. Mention integration points (FastAPI, TensorFlow).  
   f. Describe the UI/visualization in Arize platform.

4. **Common traps**  
   * Don’t assume every repo has a tracing section—check for missing docs.  
   * Avoid jargon: explain “span” vs “trace.”  
   * Beware of version mismatches; note if code is outdated.

5. **Sanity‑check & communicate clearly**  
   * Verify that each step logically follows the previous one.  
   * Use bullet points or short paragraphs for readability.  
   * End with a quick recap: what tracing solves, how to get it running, and where to find results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
