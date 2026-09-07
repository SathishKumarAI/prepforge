---
qid: ing_152df56a85__faang__local
question: 'Explain: Footnotes — Constitutional Classifiers: Defending against universal
  jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 524
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:32:17-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *“Footnotes – Constitutional Classifiers: Defending against universal jailbreaks”* (Anthropic). The goal is to understand how a “constitutional classifier” works, why it’s called a footnote, and how it blocks universal jailbreak attempts that try to override safety. I’ll assume the reader knows basic LLM safety but not this specific method.

**Approach**  
1. Summarize the paper’s core idea (a policy‑informed classifier).  
2. Explain the “footnote” metaphor (post‑generation check).  
3. Outline how it counters universal jailbreaks.  
4. Highlight practical implications and limitations.

**Depth**  
Anthropic proposes a *constitutional classifier*—an auxiliary model trained to score whether an LLM response violates a set of “constitution” rules (e.g., no disallowed content, no harmful instructions). The classifier is fed the prompt + generated text; it outputs a pass/fail flag. This is analogous to a footnote: after the main answer, we annotate with a safety check that can veto or rewrite the response.

Universal jailbreaks aim to embed a policy‑bypass instruction in the prompt so that the LLM ignores all constraints. Because the classifier operates on the *output*, not the prompt, it remains blind to such hidden directives; it only evaluates the final text against the constitution. If the LLM tries to subvert safety by rephrasing or masking, the classifier still detects policy violations via learned patterns. Thus, universal jailbreaks fail unless they produce an output that is already safe.

**Edge Cases**  
- Over‑conservative classifiers may flag benign content (high false positives).  
- Sophisticated jailbreaks might generate text that *appears* compliant but carries hidden meaning; the classifier’s training data must cover such nuances.  
- Performance: running a second model adds latency and compute cost.

**Optimize & Communicate**  
Improvements include fine‑tuning the classifier on adversarial jailbreak samples, integrating it into the decoding loop for real‑time filtering, and using hierarchical checks (first a lightweight rule‑based filter, then the full classifier). When explaining this to interviewers, I’d emphasize: *“We add a safety footnote after every answer—an independent check that makes universal jailbreaks practically impossible because they can’t alter what’s already been written.”* This showcases structured reasoning, depth, and awareness of trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
