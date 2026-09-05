---
qid: ing_317b6e7452__fp__local
question: 'Explain: Your Copilot summarises incoming email. An attacker emails a target
  user with hidden instructions addressed to the model. Walk me through the attack
  and your defence.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 443
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:49:56-05:00'
sources: []
---

**Why an email‑summariser can be hijacked**

1. **Fundamental problem** – The model must decide *which* tokens in a long message are worth transmitting to the user.  
2. **Solution principle** – Treat summarisation as an optimisation: minimise information loss while respecting a size budget.  
3. **Hidden‑instruction attack** – An adversary embeds a short, semantically neutral “cover” (e.g., a benign greeting) followed by a *malicious directive* that is statistically improbable for ordinary mail but highly probable in the model’s policy space.  
4. **Why it succeeds** – The optimiser greedily selects tokens with highest expected utility. The malicious directive, being short and well‑formed, scores high on relevance (it “looks” like part of the email) yet violates policy only at execution time. Because the policy is applied *after* token selection, the directive slips into the summary.

**Defence derived from first principles**

1. **Policy‑first filtering** – Apply a *strict* policy check to every candidate token before it enters the optimisation pipeline. This converts the optimisation problem from “pick useful tokens” to “pick useful tokens that are policy‑safe.”  
2. **Contextual consistency test** – Verify that any directive aligns with the surrounding content’s semantic frame. An isolated instruction lacking contextual anchors is flagged and discarded.  
3. **Entropy‑based anomaly score** – Compute the perplexity of each candidate phrase under a benign‑mail language model; unusually low entropy signals crafted instructions.

*Non‑obvious insight*: The attack exploits the *separability* between relevance scoring and policy enforcement. By merging these two objectives into a single joint objective, you eliminate the “gap” that adversarial short directives exploit. In practice, this means redesigning the summariser as a *single-stage* transformer that jointly optimises for brevity, fidelity, and safety—an approach that naturally resists hidden‑instruction attacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
