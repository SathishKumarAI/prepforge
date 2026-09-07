---
qid: ing_f44919eddf__faang__local
question: 'Explain: Step 1: Generate Diverse Test Queries — Ai Evals Comprehensive
  Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 379
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:07:31-05:00'
sources: []
---

**Clarify**  
You’re asked to explain the first step of an AI evaluation workflow: *Generate Diverse Test Queries*. Confirm that we’re talking about creating a representative set of prompts for model benchmarking (not just training data), and that “diverse” means coverage across domains, styles, difficulty levels, and potential edge‑cases.

**Approach**  
1. Define the target space (topics, user intents).  
2. Enumerate constraints (length, format, bias checks).  
3. Use seed prompts + expansion techniques (paraphrasing, templating, crowd‑source).  
4. Validate diversity with statistical metrics (entropy, clustering).

**Depth**  
- **Seed Collection:** Pull from FAQs, support tickets, and domain literature.  
- **Expansion:** Apply back‑translation, synonym substitution, and controlled generation to produce variations while preserving meaning.  
- **Coverage Matrix:** Map each query to a taxonomy of intents; ensure every cell has ≥ k samples.  
- **Bias & Safety Filters:** Run automated checks (e.g., profanity, disallowed content) before final inclusion.  
- **Versioning:** Tag queries with metadata (source, difficulty score) for traceability.

**Edge Cases**  
- Over‑generation leads to noise; mitigate by pruning low‑entropy clusters.  
- Unintended bias introduced during paraphrasing; audit samples manually.  
- Missing rare intents; supplement via expert elicitation.

**Optimize & Communicate**  
Explain that this step balances breadth (coverage) with depth (quality). Highlight trade‑offs: more queries improve robustness but increase evaluation cost. Conclude by noting how a well‑structured query set underpins fair, reproducible AI model assessment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
