---
qid: ing_e02b689a83__fp__local
question: 'Q89: Design a Process Reward Model (PRM) for a customer-support agent.
  What signals do you score, and how do you avoid degenerate reward?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 486
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:56:32-05:00'
sources: []
---

### From the problem to the model

A customer‑support agent’s *goal* is two‑fold: **solve the issue** and **maintain a positive brand image**.  
The PRM must therefore reward *information flow that resolves the ticket* while penalizing *unnecessary chatter or policy violations*.  

---

### Signals to score

| Signal | Rationale (optimization principle) | Typical form |
|--------|------------------------------------|--------------|
| **Ticket closure time** | Shorter time → higher likelihood of customer satisfaction (speed‑efficiency trade‑off). | `r₁ = -α·t_closure` |
| **Resolution quality** | Captures how well the final answer satisfies the problem; a proxy for *information fidelity*. | `r₂ = β·Jaccard(resolution, gold)` |
| **Sentiment & politeness** | Reflects brand tone; penalizes aggressive language (social signal). | `r₃ = γ·(polite_score - 0.5)` |
| **Policy compliance** | Ensures no disallowed content or privacy breach. | `r₄ = δ·[compliant]` |

The total reward is a weighted sum  
\(R = r_1 + r_2 + r_3 + r_4\).

---

### Avoiding degenerate solutions

* **Reward shaping**: Instead of raw time, use *log‑time* to prevent the agent from answering instantly with nonsense.  
* **Multi‑objective constraints**: Treat compliance as a hard constraint (not part of the reward).  
* **Adversarial monitoring**: Periodically train an evaluator that predicts customer satisfaction; any policy that consistently outperforms it is flagged.  

---

### Non‑obvious insight

**Politeness is not a linear penalty but a *contextual multiplier***. A brief, direct answer is fine when the issue is trivial, but for complex tickets the same brevity can feel dismissive. By letting `polite_score` modulate the time‑penalty (`α·t_closure · polite_multiplier`), the agent learns to trade speed against warmth adaptively—something most reward designs overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
