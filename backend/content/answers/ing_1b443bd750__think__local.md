---
qid: ing_1b443bd750__think__local
question: 'Explain: Zero-Shot vs. Few-Shot Efficiency — Prompt Engineering Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 438
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:31:12-05:00'
sources: []
---

**1. Clarify the goal & key terms**  
   - *Assumptions*: The audience knows basic prompt‑engineering concepts but needs a clear comparison of zero‑shot vs. few‑shot efficiency.  
   - *Clarifications*: “Efficiency” here refers to model performance relative to the amount of example data supplied in the prompt.

**2. Adopt a structured framework**  
   1. Define each mode (zero‑shot, few‑shot).  
   2. Identify the dimensions of efficiency: *accuracy*, *prompt length*, *computation cost*, and *data availability*.  
   3. Use a side‑by‑side comparison table or diagram.

**3. Step‑by‑step reasoning**  
   - **Zero‑Shot**: No examples → rely entirely on model’s internal knowledge; prompt must be highly explicit.  
   - **Few‑Shot**: Provide 1–5 concise exemplars → guides the model, often improving accuracy with minimal extra token cost.  
   - Quantify impact: e.g., a 4‑shot prompt may add ~40 tokens but can raise F1 by 5–10% on many NLP tasks.  
   - Discuss diminishing returns: beyond ~8 examples, gains plateau while prompt length grows.

**4. Common pitfalls to avoid**  
   - Overstating that few‑shot always outperforms zero‑shot; context matters (task complexity, model size).  
   - Ignoring token budget constraints in real deployments.  
   - Assuming “more shots = better” without considering noise or contradictory examples.

**5. Sanity‑check & verbalize**  
   - Verify that each comparison point is backed by empirical evidence (e.g., OpenAI benchmarks).  
   - Summarize: Zero‑shot saves prompt space but may be less accurate; few‑shot boosts performance with a modest token overhead, yielding higher overall efficiency when task demands it. Use concise language and concrete numbers to make the trade‑off tangible for practitioners.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
