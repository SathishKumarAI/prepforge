---
qid: ing_e583f3b4a2__faang__local
question: What is over-refusal, and how do you manage the helpfulness-vs-safety tension?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 377
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:31:54-05:00'
sources: []
---

**Clarify**  
The interviewer asks about *over‑refusal*—when an AI system declines too many user requests—and how we balance it against the need to remain helpful while preventing misuse or harm.

**Approach**  
1. Define over‑refusal metrics (e.g., refusal rate vs. user satisfaction).  
2. Identify safety constraints that trigger refusals (legal, policy, ethical).  
3. Build a tunable risk‑score for each request.  
4. Use adaptive thresholds and continuous learning to shift the trade‑off.

**Depth**  
- **Risk scoring**: Combine NLP confidence, content embeddings, and user context to compute a *Safety Risk Score* \(S\).  
- **Dynamic thresholding**: Set a base refusal threshold \(\tau_0\); adjust it per user segment or request type.  
- **Feedback loop**: Capture post‑interaction signals (e.g., user re‑asks, satisfaction surveys) to update the model via reinforcement learning.  
- **Explainability**: When refusing, return a concise reason (“policy violation”) and optionally offer safe alternatives.

**Edge Cases**  
- Ambiguous requests that sit on the boundary of policy.  
- Cold‑start users with no historical data.  
- Adversarial prompts engineered to bypass safety filters.

**Optimize & Communicate**  
Start with conservative thresholds, then gradually lower them as confidence grows and user trust builds—akin to a staged rollout. Communicate the rationale in product notes: “We’re tightening safety now to protect X, but we’ll relax it after Y successful interactions.” This iterative, data‑driven approach keeps helpfulness high while rigorously managing risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
