---
qid: ing_de6c033f76__faang__local
question: 'Explain: Explain indirect prompt injection, and what architectural defences
  actually raise the bar beyond guardrail classifiers.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 473
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:16:16-05:00'
sources: []
---

**Clarify**  
We’re asked to define *indirect prompt injection* (a form of adversarial manipulation where a user crafts input that triggers a model to produce hidden content) and explain which system‑level defenses make it harder than simple guard‑rail classifiers.

**Approach**  
1. Define indirect prompt injection and contrast with direct injection.  
2. List common architectural layers: token filtering, intent recognition, policy enforcement, context isolation.  
3. Highlight defenses that raise the bar: chain‑of‑thought gating, multi‑model sanity checks, provenance logging, and fine‑tuned policy networks.

**Depth**  
- **Indirect prompt injection** occurs when a user embeds malicious prompts inside seemingly benign content (e.g., code comments or data payloads). The model, unaware of the hidden trigger, outputs disallowed text.  
- Guard‑rail classifiers only flag obvious violations; they miss context‑masked triggers.  
- **Defenses beyond guardrails:**  
  - *Token‑level sanitization* removes suspect substrings before tokenization.  
  - *Intent‑aware filtering* uses a lightweight classifier to detect “stealth” prompts and routes the input through a stricter policy chain.  
  - *Chain‑of‑thought gating* forces the model to generate intermediate reasoning steps; any step that violates policy aborts execution.  
  - *Multi‑model sanity checks* run a secondary, smaller model on the same prompt; disagreement triggers a human review.  
  - *Provenance logging* records source and transformation of every token, enabling audit trails for post‑hoc detection.

**Edge Cases**  
- Over‑aggressive sanitization may truncate legitimate content (e.g., code with special characters).  
- Multi‑model checks can increase latency; need caching or parallelism.  
- Chain‑of‑thought gating may be bypassed if the model learns to embed policy violations in a single step.

**Optimize & Communicate**  
To improve, combine token sanitization with adaptive intent classifiers that learn from false positives. Communicate design choices by presenting threat models, latency budgets, and fallback paths (e.g., human review) so interviewers see a balanced trade‑off between safety and usability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
