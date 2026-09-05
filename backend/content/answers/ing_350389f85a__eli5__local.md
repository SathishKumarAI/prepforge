---
qid: ing_350389f85a__eli5__local
question: 'Explain: Step 1: Generate Traces — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 296
total_tokens: 463
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:59:43-05:00'
sources: []
---

**Step 1: Generate Traces – the “Story‑teller’s Notes”**

Think of an AI model as a storyteller who gives you a tale (its answer).  
A *trace* is like the writer’s notebook that records every word, pause, and change the storyteller makes while crafting the story. In AI evaluation, we collect these notebooks so we can later see how the model arrived at its final sentence.

**How it works**

1. **Run the model on test prompts** – each prompt is a “story request.”  
2. **Record every internal step** (token by token) into a trace file.  
3. Store the traces in Langwatch or Langfuse, which are like organized libraries that let you search, filter, and replay any part of the notebook.

*Unavoidable terms defined:*  
- **AI model** – software that generates text or answers.  
- **Prompt** – the question or instruction given to the model.  
- **Token** – a basic unit of language (often a word or piece of a word).  

With these traces, we can later analyze why the model chose certain words, spot mistakes, and improve its performance—just as a writer reviews notes to refine their story.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
