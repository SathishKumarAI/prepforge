---
qid: ing_c54247fad1__fp__local
question: What is indirect prompt injection, and why is it more dangerous than direct?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 401
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:01:10-05:00'
sources: []
---

**Indirect prompt injection** arises when an attacker manipulates *auxiliary inputs* that a language model (LLM) uses to compose its final response—such as system messages, chain‑of‑thought reasoning steps, or intermediate knowledge bases—rather than the user’s explicit prompt.  

At first glance it seems harmless: the user still supplies the visible prompt.  However, an LLM is essentially a probabilistic function *f(P, A)* that maximises the likelihood of plausible continuations given all available context *P* (user prompt) and *A* (auxiliary context). By subtly altering *A*, an attacker can steer the model’s internal belief state without triggering obvious safety filters that watch only the user prompt.  

Why is it riskier than direct injection?  
1. **Filter evasion** – most content‑moderation pipelines examine only the visible prompt, not the auxiliary fields.  
2. **Amplification of subtle bias** – small tweaks to a chain‑of‑thought can cascade into large semantic shifts because the model recursively conditions on its own earlier outputs.  
3. **Stealth and persistence** – indirect changes often leave no trace in audit logs, making attribution difficult.

A deeper principle at play is *information leakage through shared latent representations*. The LLM’s hidden states encode both prompt semantics and auxiliary context; an adversary can treat the auxiliary field as a side‑channel to inject malicious priors.  

**Non‑obvious insight:** Even benign‑looking auxiliary prompts (e.g., “Let’s think step by step”) become attack vectors because they *shape* the probability distribution over future tokens, effectively re‑weighting entire answer spaces. Thus, securing LLMs demands monitoring and sanitising every contextual input—not just the user prompt.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
