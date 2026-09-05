---
qid: ing_6124ac2eba__star__local
question: 'Explain: Parameter Instructions — GitHub - zai-org/GLM-4.5: GLM-4.5: Agentic,
  Reasoning, and Coding (ARC) Foundation Models \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 355
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:42:13-05:00'
sources: []
---

**Situation**  
While leading a research sprint on the new GLM‑4.5 model, my team was struggling to get consistent outputs from the “Parameter Instructions” feature described in the GitHub docs. The default prompt templates were producing vague responses that missed key business constraints.

**Task**  
I needed to design a robust instruction schema that would let us reliably steer the model’s behavior—ensuring it followed specific formatting rules, maintained tone, and adhered to domain‑specific jargon—all while keeping inference latency low for our live demo platform.

**Action**  
First, I mapped out the parameter hierarchy (system, user, tool) from the repo’s examples. Using Python and the Hugging Face `transformers` pipeline, I built a lightweight wrapper that injected dynamic instruction blocks into each prompt. I then ran A/B tests with 200 query‑sets, varying verbosity flags, temperature settings, and a custom “role” token to enforce agentic voice. Performance was measured via BLEU scores against annotated gold responses and latency via `time.perf_counter`. I iterated on the instruction tokens until we hit a 92 % accuracy benchmark with <120 ms per inference.

**Result**  
The new instruction pipeline cut erroneous outputs by 68 % and reduced average response time from 210 ms to 115 ms. The demo was deployed ahead of schedule, earning praise from stakeholders for its precision and speed. I learned that careful structuring of parameter instructions—combined with systematic A/B testing—is essential for turning raw foundation models into production‑ready agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
