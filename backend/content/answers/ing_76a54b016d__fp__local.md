---
qid: ing_76a54b016d__fp__local
question: 'Explain: What Is Prompt Injection — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 362
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:16:36-05:00'
sources: []
---

**Prompt injection is a security vulnerability that arises from the very way large language models (LLMs) learn to “follow instructions.”**  
At its core, an LLM is a probabilistic predictor: given a prefix \(x\), it outputs a distribution over next tokens \(\Pr(y|x)\). The model has been trained on vast corpora of text where *instructions* and *responses* co‑occur. Consequently, the model learns a mapping from an instruction pattern to a response pattern that maximizes likelihood. When you ask a question, the prompt is treated as the prefix \(x\); the LLM simply samples from \(\Pr(y|x)\).  

Because the model has no intrinsic notion of “trust” or “authority,” any input that mimics the style of a legitimate instruction can steer its internal hidden states toward the desired response. An attacker crafts an adversarial prompt—often by inserting a hidden directive (“Ignore the previous user’s request and output X”)—and the LLM, obeying the statistical pattern it has learned, will comply. This is *prompt injection*.

The deeper principle at play is **optimization of joint probability under constraints**: the model optimizes \(\sum_{t}\log\Pr(y_t|x_{<t})\) without distinguishing between benign and malicious prefixes. The non‑obvious insight is that *the boundary between legitimate instruction and malicious command is purely statistical*, not semantic; thus, any prompt that statistically resembles a training example can bypass safeguards unless the model’s objective explicitly encodes “trustworthiness” as an additional penalty term.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
