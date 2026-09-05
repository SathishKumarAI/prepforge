---
qid: ing_990c526b1e__star__local
question: 'Explain: Rules files — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 308
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:38:43-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were building an automated loan‑approval assistant that needed to comply with strict regulatory guidelines while still offering a conversational experience.

**Task:**  
I was tasked with designing the rule engine so the agent could autonomously handle user requests—like checking credit scores or updating personal info—yet always stay within legal boundaries and our internal risk policies.

**Action:**  
I introduced a lightweight “rules file” system written in JSON, each rule containing conditions (e.g., `credit_score < 600`), actions (`deny_loan`, `flag_for_review`), and metadata for audit. The agent parsed these files at runtime using a custom evaluator built on Python’s `ast` module, allowing us to tweak thresholds without redeploying code. I also integrated the rules with our natural‑language understanding pipeline so that user intents mapped directly to rule checks. To ensure reliability, I set up automated unit tests and a CI pipeline that validated every change against a sandboxed regulatory compliance checker.

**Result:**  
The new system cut manual compliance reviews by 70%, reduced loan processing time from 45 minutes to 12 minutes, and passed the external audit with zero findings. I learned how declarative rule files empower non‑technical stakeholders to influence AI behavior while keeping the codebase clean and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
