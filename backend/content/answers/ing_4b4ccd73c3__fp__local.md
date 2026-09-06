---
qid: ing_4b4ccd73c3__fp__local
question: 'Explain: Non-functional — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 371
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:45:16-05:00'
sources: []
---

### Why a *non‑functional* requirement matters for an AI‑powered Customer Support Agent

**The fundamental problem:**  
Customers expect instant, accurate help without human intervention. The *functional* solution—“respond to queries”—is only half the story; the system must also **deliver that response reliably, efficiently, and securely**.  

**Why it must work this way:**  
1. **Optimization of user experience** – latency is a cost function: higher delay → lower satisfaction, lower retention.  
2. **Information‑theoretic limits** – Shannon’s channel capacity bounds how much context can be transmitted in real time; the agent must compress intent and tone without losing essential meaning.  
3. **Geometric robustness** – the state space of possible user inputs is high‑dimensional; a non‑functional requirement (e.g., *robustness to noise*) ensures the model’s decision boundary remains stable under small perturbations, preventing misclassifications that would erode trust.

**Non‑obvious insight:**  
Most teams focus on accuracy alone, overlooking **entropy of the response distribution**. If an agent always replies with a narrow set of canned phrases (low entropy), it feels robotic and can trigger frustration even when technically correct. A non‑functional requirement to maintain *adequate output diversity*—quantified by KL divergence from a target language model—keeps interactions natural while preserving precision.

In short, the non‑functional specification is not an afterthought; it formalises the constraints under which the functional core (question answering) can actually succeed in real‑world customer support.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
