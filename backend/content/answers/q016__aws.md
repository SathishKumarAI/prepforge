---
qid: q016
question: "What is hallucination in LLMs and how can it be mitigated?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd define hallucination as an LLM producing fluent, confident output that is factually wrong or unsupported, because the model predicts plausible tokens, not verified truth. It has no built-in notion of "I don't know" unless we design for it.

To show **Insist on the Highest Standards** and **Customer Obsession** I'd anchor it in a customer-facing assistant I owned, where a wrong-but-confident answer was our worst failure mode. I attacked it on several fronts: grounding answers in retrieved sources via RAG so claims trace to evidence; lowering temperature for factual tasks; adding an instruction and confidence threshold so the model can say it's unsure and defer to a human; and building an eval set that scored factual accuracy on every release. Together these cut hallucinated answers by roughly 80% and raised measured accuracy to 91%.

The trade-off I'd name: aggressive guardrails and deferral reduce hallucination but can raise "I don't know" rates and hand-offs, so I tuned the threshold against a resolution-rate target rather than maximizing either extreme. On AWS I'd use Bedrock Knowledge Bases for grounding and Guardrails to filter unsafe or unsupported output.

A bar-raiser listens for whether I treat hallucination as a measurable reliability problem with a layered defense and an eval loop, not a single trick, and whether I quantified the reduction.
