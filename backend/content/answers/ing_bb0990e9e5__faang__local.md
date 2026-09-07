---
qid: ing_bb0990e9e5__faang__local
question: 'Explain: LLM-as-Judge for Step Quality — Evaluating Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 467
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:57:32-05:00'
sources: []
---

**Clarify**  
We’re asked how a large language model (LLM) could act as a “Judge” that evaluates the *step quality* of an agentic system—i.e., whether each intermediate action or plan fragment is correct, feasible, and aligned with goals. I’d confirm:  
- What defines a “good step” (reward, safety, efficiency)?  
- Are we evaluating single‑turn actions or multi‑step plans?  
- Is the judge trained on human feedback or ground‑truth labels?

**Approach**  
1. **Data Collection:** Gather logs of agent interactions with labeled step quality.  
2. **Feature Extraction:** Encode state, action, and context into a prompt for the LLM.  
3. **Prompt Engineering & Fine‑tuning:** Train the LLM to output a scalar score or categorical verdict.  
4. **Evaluation Loop:** Use the judge to provide real‑time feedback to the agent (e.g., penalty or reward shaping).  

**Depth**  
The judge receives a prompt like: “Given state S and action A, does A advance toward goal G while respecting constraints C?” The LLM predicts a score in [0,1]. Complexity is linear in input length; inference latency can be ~50 ms on a GPU. Trade‑offs: higher fidelity requires larger models but increases cost; simpler models are cheaper but may misclassify nuanced steps.

**Edge Cases**  
- Ambiguous states → uncertainty in judgment.  
- Novel actions not seen during training → over‑penalization.  
- Biases in the training data leading to unfair penalties.  
Testing: synthetic edge cases, adversarial prompts, and human‑in‑the‑loop validation.

**Optimize & Communicate**  
We can distill the judge into a lightweight classifier via knowledge distillation for production, while keeping a large LLM for debugging. I’d present results with AUC scores, calibration curves, and latency benchmarks, explaining that iterative fine‑tuning on failure modes tightens the judgment loop. This demonstrates structured reasoning, clear communication, and technical depth—key signals in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
