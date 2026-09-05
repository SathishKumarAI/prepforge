---
qid: ing_b289f26252__star__local
question: What do RLHF, DPO, and Constitutional AI/RLAIF actually do for safety, and
  why can't a system prompt replace them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 377
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:28:47-05:00'
sources: []
---

**Situation** – While leading the safety team at an AI startup, we rolled out a new conversational model that was gaining traction on social media. Early user reports flagged subtle but harmful responses—misinformation and biased framing—despite our extensive unit‑testing and human review pipelines.

**Task** – I needed to design a scalable process that could continuously align the model with evolving societal norms, reduce hallucinations, and ensure it didn’t generate disallowed content, all while maintaining rapid deployment cycles.

**Action** – First, we introduced RLHF: fine‑tuned the policy network on a curated dataset of human preference pairs, turning abstract “good” vs. “bad” into concrete gradients. Next, we deployed DPO to replace costly pairwise labeling with direct optimization against a differentiable reward model—cutting annotation time by 60 % and allowing real‑time updates from user feedback loops. Finally, we built a Constitutional AI layer: a lightweight policy that evaluates each output against a set of declarative rules (e.g., “avoid defamation”) and can veto or rewrite unsafe responses before they reach the user. We integrated these layers into our inference pipeline with minimal latency overhead (<10 ms per token).

**Result** – Within three months, hallucination rates dropped from 12 % to 3 %, while user‑reported safety incidents fell by 75 %. The system also achieved a 40 % reduction in compute cost compared to a pure prompt‑engineering approach. I learned that human‑informed reward signals and rule‑based vetoes together create a robust safety net that a static system prompt simply cannot match, especially when norms shift or new edge cases emerge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
