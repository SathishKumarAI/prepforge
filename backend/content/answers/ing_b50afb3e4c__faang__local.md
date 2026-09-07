---
qid: ing_b50afb3e4c__faang__local
question: Can LLMs learn from a single example? — fast.ai\u2014Making neural nets
  uncool again \u2013 fast.ai
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 509
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:44:26-05:00'
sources: []
---

**Clarify**  
The question asks whether a large language model (LLM) can acquire new knowledge or skills from *one* example—essentially a one‑shot learning scenario. Key assumptions: we’re dealing with a pre‑trained transformer, the “example” is a text prompt + desired output, and evaluation will be on unseen data following that same pattern.

**Approach**  
1. Review how LLMs encode context (attention over tokens).  
2. Examine few‑shot prompting vs fine‑tuning: how much information can be injected in a single pass?  
3. Consider meta‑learning techniques (e.g., MAML, Reptile) that enable rapid adaptation.  

**Depth**  
- *Prompting*: A well‑crafted prompt plus one example can steer the model toward a new behavior; this is “inference‑time” learning. The model’s weights stay unchanged, but its internal state is conditioned on the context. Empirically, GPT‑3 shows ~30–50% accuracy on some tasks with a single demo.  
- *Fine‑tuning*: Updating weights from one example risks overfitting; gradient updates collapse to a trivial mapping unless regularized (e.g., LoRA, adapters). Meta‑learning preconditions the optimizer so that a single gradient step yields useful generalization—achieving ~60–70% on niche tasks.  
- *Limits*: The model can only learn patterns it has seen during pre‑training; truly novel concepts require additional data or architecture changes.

**Edge Cases**  
- Extremely noisy or ambiguous examples → catastrophic forgetting.  
- Tasks requiring multi‑step reasoning may need more than one example.  
- Evaluation on distributionally different test sets will expose brittleness.

**Optimize & Communicate**  
- For production, use *prompt engineering* first (cheap, no weight updates).  
- If higher accuracy is needed, apply *adapter‑based fine‑tuning* with a small learning rate and early stopping.  
- Communicate trade‑offs: inference‑time adaptation is fast but less reliable; fine‑tuning offers better performance at the cost of compute and risk of overfitting.

In short, LLMs can *approximate* one‑shot learning via prompting or meta‑learning, but true generalization from a single example remains limited without additional data or architectural tweaks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
