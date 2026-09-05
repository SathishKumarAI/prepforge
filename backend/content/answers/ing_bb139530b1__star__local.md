---
qid: ing_bb139530b1__star__local
question: A teammate says "the model executes the tool." What's wrong with that, and
  why does the distinction matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 335
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:45:11-05:00'
sources: []
---

**Situation** – In my last sprint on the customer‑support chatbot, a senior dev casually told me, “The model just executes the tool to get the data.” We were about to ship the new ticket‑routing feature.

**Task** – I had to clarify how the LLM actually interacts with external services and why calling an API directly is not the same as “executing” a tool inside the model’s context.

**Action** – I pulled up our architecture diagram and walked through each step: the prompt includes a function signature, the model predicts that signature and arguments, we validate them, then the runtime calls the external API (e.g., Salesforce) and streams the raw JSON back. The key distinction is that the model only *chooses* which tool to invoke; the execution happens in our secure runtime, not inside the LLM’s inference engine. I also demonstrated a quick test where we swapped the real API for a mock, showing how the same prompt still triggers the same “tool call” token but no external request is made.

**Result** – The team understood that tool‑execution is an orchestrated pipeline, not in‑model code execution. This reduced accidental exposure of credentials and improved our audit logging. I also drafted a short guide on tool‑call patterns that has since been added to our onboarding docs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
