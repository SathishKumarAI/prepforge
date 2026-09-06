---
qid: ing_7c83511df7__fp__local
question: How do reasoning models change prompting practice? What transfers and what
  becomes obsolete?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 482
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:30:09-05:00'
sources: []
---

## Why the Prompt‑Shift Happens

At its core a prompt is *information* fed to an inference engine that must decide how to transform it into an output. Traditional language models treat the prompt as a flat string; they learn from billions of tokens what “good” completions look like, but they have no explicit structure for *reasoning*. When we add a reasoning model—e.g., chain‑of‑thought (CoT) or tree‑of‑thought (ToT)—we give the system an internal *process* that mirrors human deliberation: intermediate steps, self‑questioning, and backtracking.  

The new engine now optimizes not just for final accuracy but also for *explanatory coherence*. This shifts the objective from “find any high‑probability sequence” to “produce a sequence that is both high‑probability and satisfies a logical flow constraint.” Consequently, prompts must encode *how* we want reasoning to unfold (e.g., “first list all assumptions”) rather than merely what the answer should be.

## What Transfers

1. **Prompt Length & Temperature** – Still control exploration versus exploitation.  
2. **Few‑shot Examples** – Remain crucial for shaping the style of intermediate steps.  
3. **Special Tokens/Markers** – Useful to delimit reasoning stages (e.g., `#STEP`).

These elements survive because they influence the same low‑level probability distribution over tokens.

## What Becomes Obsolete

- **Direct “Answer‑Only” Prompts** – The system no longer needs a single terse instruction; it requires scaffolding for the reasoning trajectory.  
- **Unstructured Prompting** – Randomly concatenated text yields poor intermediate quality because the model cannot infer the intended logical structure.

## Non‑Obvious Insight

*Reasoning models turn the prompt from a static input into an *interactive protocol*. The prompt now specifies not just content but also a *process contract*: “you must first outline, then evaluate, then conclude.” This contractual view explains why a tiny tweak—adding a single `#OUTLINE` marker—can dramatically improve accuracy: it turns an implicit expectation (the model should think) into an explicit instruction that aligns the optimization objective with human reasoning patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
