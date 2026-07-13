---
qid: q013
question: "What is prompt engineering and why does it matter?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll frame prompt engineering as designing model inputs to steer outputs, and confirm the interviewer wants concrete techniques plus the "why," not just a definition.

**Approach** — Define it, enumerate proven techniques, then justify why it matters practically and economically.

**Depth** — Prompt engineering is the practice of crafting and structuring inputs—instructions, context, examples, and format constraints—to reliably elicit desired behavior from an LLM without changing its weights. Core techniques: clear role and task framing; **few-shot prompting** (showing input-output examples to demonstrate the pattern); **chain-of-thought** ("think step by step") to improve reasoning; explicit output formatting (JSON, delimiters); providing relevant context; and decomposing complex tasks. Why it matters: the same model can go from useless to production-quality based on prompt design—it's the cheapest, fastest lever, requiring no training data or GPUs, and it directly affects accuracy, cost (token count), latency, and safety.

**Edge cases** — Prompts are brittle—small wording changes shift results; they can be exploited via prompt injection; and behavior varies across models and versions, so prompts don't always transfer. Overly long prompts waste tokens and can dilute focus.

**Optimize & communicate** — I'd advocate systematic iteration: test on a labeled eval set, version prompts, and escalate to RAG or fine-tuning when prompting plateaus. Framing prompting as the first, cheapest rung of a capability ladder—before RAG and fine-tuning—signals engineering judgment, not just clever wording.
