---
qid: ing_3e77747acd__fp__local
question: 'Q: Why is "Prompt Sanitization" harder than "SQL Sanitization"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 417
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:17:22-05:00'
sources: []
---

**Why Prompt Sanitization Is Harder Than SQL Sanitization**

The core problem in both cases is *preventing unintended execution of user‑supplied code*.  
In SQL, the attacker’s goal is to inject a well‑defined grammar that the database engine will parse and execute. We can therefore build a *finite automaton* that accepts only legitimate statements: a whitelist or an escape routine that guarantees no stray tokens remain. The input space is discrete (keywords, identifiers, literals) and bounded by the parser’s token set.

Prompt sanitization tackles the same goal but in a *continuous, generative* medium: natural language text fed to a large language model (LLM). The LLM interprets every token as part of an open‑ended probability distribution over future tokens. Even if we remove obvious malicious keywords (“delete”, “execute”), the model can still recombine benign words into a harmful instruction with high likelihood, because its internal policy is learned from billions of examples, not a fixed grammar. Moreover, the LLM’s *context window* is dynamic; an adversary can craft prompts that shift the model’s latent state so that downstream generations follow the attacker’s intent, circumventing any static filter.

Hence, sanitization for prompts must grapple with:

1. **Unbounded linguistic variability** – no closed set of tokens to whitelist.  
2. **Probabilistic generation** – malicious meaning can emerge from many token combinations.  
3. **Context‑sensitive latent states** – small prompt tweaks alter the entire distribution.

A non‑obvious insight: *the attack surface is not just the input string but the model’s hidden representation*. Sanitizing a prompt without controlling that internal state is akin to patching a firewall after traffic has already entered the network. Therefore, prompt sanitization demands dynamic, context‑aware defenses (e.g., policy‑guided decoding) rather than static token filters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
