---
qid: ing_8839fa7dbf__faang__local
question: 'Explain: Handling Unknown Topics — Answer Frameworks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 417
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:00:58-05:00'
sources: []
---

**Clarify**  
We need a systematic way for an LLM to respond when it encounters a query outside its training knowledge (e.g., “What is the latest protocol for X‑device?”). Assume we can’t fetch external data in real time and must rely on internal confidence signals.  

**Approach**  
1. **Detect uncertainty** – use the model’s logit distribution or an auxiliary uncertainty head to flag low‑confidence queries.  
2. **Layered response** –  
   * Low confidence → “I’m not sure, here’s what I know.”  
   * Medium confidence → provide best‑effort answer + caveats.  
   * High confidence → full answer.  
3. **Fallback strategy** – if uncertainty remains high after re‑prompting or context expansion, refuse or redirect to human help.  

**Depth**  
Implement a binary “confidence threshold” learned on validation data: `P(max_class) < τ` triggers the unknown path. Use a lightweight classifier (e.g., a 2‑layer MLP over hidden states). Complexity stays O(1) per token; memory overhead is negligible. The refusal style follows the *“safe completion”* pattern: concise apology + suggestion to consult an expert or provide additional context.  

**Edge Cases**  
- Ambiguous prompts that are partially known (e.g., “Explain X in terms of Y”). Test with synthetic mixes of known/unknown sub‑topics.  
- Over‑cautious thresholds causing many refusals—tune τ via ROC analysis.  
- Adversarial inputs that trick the uncertainty head; add adversarial training samples.  

**Optimize & Communicate**  
Reduce false positives by calibrating logits (temperature scaling) and adding a “confidence calibration loss.” Explain to interviewers: we keep response latency minimal, preserve user trust with transparent uncertainty handling, and maintain safety without sacrificing useful content.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
