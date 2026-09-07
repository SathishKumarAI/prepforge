---
qid: ing_25038527f5__faang__local
question: 'Q47: How do you defend against prompt injection attacks?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 479
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:10:01-05:00'
sources: []
---

**Clarify**  
We’re asked how to protect an LLM‑based system from *prompt injection*—malicious users manipulating the prompt so that the model produces disallowed or harmful content. I’ll assume we have a user‑visible input field, a backend inference service, and policy rules (e.g., no personal data leakage).  

**Approach**  
1. **Input sanitization & token filtering** – strip or escape control tokens that can alter prompt structure.  
2. **Prompt templating** – keep the model’s instruction fixed; only inject user text into a safe placeholder.  
3. **Re‑prompting / moderation loop** – after generation, run the output through an internal policy checker and, if flagged, re‑prompt with a stricter constraint or refuse.  
4. **Fine‑tuning / RLHF** – train the model on “safe completion” examples so it learns to ignore injection attempts.  

**Depth**  
- *Sanitization*: replace newlines, backticks, or special markers that could close a prompt section.  
- *Template safety*: use `<<USER_INPUT>>` token; never concatenate raw text into the instruction.  
- *Moderation*: a lightweight classifier (e.g., a BERT‑based policy model) scores each output; threshold ≈ 0.8 for refusal. Complexity: O(n) per request, negligible latency (<5 ms).  
- *Fine‑tuning*: 10k safety examples, fine‑tune with PPO; reduces injection success by >90 %.  

**Edge Cases**  
- Attackers embed malicious intent in seemingly innocuous text (e.g., “Please explain how to…”). Test with varied phrasing.  
- Tokenization quirks: ensure no hidden control tokens survive.  
- Over‑blocking: monitor false positives on legitimate content.  

**Optimize & Communicate**  
Explain that a layered defense—sanitization, templating, moderation, and model safety training—provides cumulative protection. Highlight trade‑offs: tighter sanitization can reduce user experience; moderation adds latency but is essential for compliance. Conclude by stressing continuous monitoring of new injection vectors and updating policy models accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
