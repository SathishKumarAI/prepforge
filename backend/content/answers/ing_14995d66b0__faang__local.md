---
qid: ing_14995d66b0__faang__local
question: 'Q40: When would you use Self-Consistency vs Best-of-N sampling?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 453
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:30:57-05:00'
sources: []
---

**Clarify**  
The question asks when to prefer *Self‑Consistency* (SC) versus *Best‑of‑N* (BoN) sampling for language model inference. Assume we’re working with a deterministic prompt, a fixed temperature, and we care about answer quality vs latency.

**Approach**  
1. Define the goal: high‑accuracy single answer or diverse top‑K candidates.  
2. Map SC and BoN to those goals.  
3. Evaluate trade‑offs (time, compute, variance).  

**Depth**  
- **Self‑Consistency**: Generate N stochastic traces, then re‑sample from each trace’s deterministic path until the final token is reached. It forces all paths to agree on earlier tokens, reducing hallucinations and yielding a single high‑confidence answer. Complexity ≈ O(N·T) but with fewer wasted divergences; good for safety‑critical or fact‑checking tasks.  
- **Best‑of‑N**: Sample N full outputs independently and pick the one with highest log‑probability (or via a verifier). It preserves diversity and can surface multiple plausible answers, useful when exploration is needed (e.g., creative writing, multi‑answer Q&A). Complexity also O(N·T) but each trace is independent; more compute if we need to rerun N times.

**Edge Cases**  
- **SC** fails when the early tokens are ambiguous: forcing agreement can collapse into a single wrong answer.  
- **BoN** may waste resources on many low‑probability outputs and still pick a suboptimal one if verifier is weak.

**Optimize & Communicate**  
Choose SC for *single, high‑confidence responses* (fact checking, compliance). Use BoN when *diversity or multiple candidates* are required (content generation, multi‑answer retrieval). Explain this trade‑off to stakeholders: “SC gives us a cleaner, safer answer at the cost of potentially missing alternative viewpoints; BoN gives breadth but needs a robust selection step.” This narrative satisfies FAANG’s emphasis on structured reasoning and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
