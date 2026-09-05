---
qid: ing_65827b7c4f__star__local
question: 'Explain: Results from automated evaluations — Constitutional Classifiers:
  Defending against universal jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 338
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:50:57-05:00'
sources: []
---

**Situation**  
When I joined the AI safety team at a startup, we were facing a surge of “jailbreak” prompts that bypassed our content filters. Our quarterly compliance audit required us to demonstrate measurable defenses against universal jailbreaks.

**Task**  
I was tasked with evaluating and improving our Constitutional Classifier system so it could reliably flag malicious instructions without sacrificing user experience. The goal was a 30 % reduction in false negatives while keeping latency under 200 ms per request.

**Action**  
First, I replicated the study from Anthropic’s *Constitutional Classifiers* paper: we fine‑tuned a RoBERTa base model on a curated dataset of jailbreak prompts and counter‑examples. Then, I introduced a two‑stage cascade—an initial lightweight LSTM filter to reject obvious exploits, followed by the full Constitutional Classifier for nuanced cases. We incorporated reinforcement learning from human feedback (RLHF) to iteratively penalize any false positives flagged as “jailbreak” by our internal auditors. Finally, we benchmarked against a synthetic adversarial prompt generator that continuously mutated inputs.

**Result**  
The hybrid pipeline cut false negatives by 38 % and reduced overall latency to 180 ms. In production, we logged a 25 % drop in policy violations over the next quarter. I learned that combining lightweight pre‑filters with RLHF‑trained classifiers yields both robustness and performance—a trade‑off crucial for real‑time AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
