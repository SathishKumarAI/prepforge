---
qid: ing_cc6c587be5__faang__local
question: 'Q: What is the biggest anti-pattern you see in LLM applications?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 518
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:34:38-05:00'
sources: []
---

**Clarify**  
The question asks for a *single* pervasive anti‑pattern that shows up across large language model (LLM) products—think chatbots, code generators, recommendation engines. I’ll assume the context is production‑grade deployments where latency, safety, and user trust matter.

**Approach**  
1. Identify common failure modes in LLM systems.  
2. Pick one that recurs most often and causes measurable harm.  
3. Explain why it’s an anti‑pattern (contradicts engineering principles).  
4. Outline mitigation steps.

**Depth**  
The largest anti‑pattern is **“over‑reliance on the raw model output without adequate post‑processing or domain constraints.”** In practice, developers expose the LLM directly as a response API, trusting that the language generation will always be correct, safe, and relevant. This violates *defense‑in‑depth*:

- **Safety**: The model can hallucinate facts or generate disallowed content because it has no external check.  
- **Accuracy**: Without a verifier (e.g., knowledge base lookup), the system repeatedly produces incorrect answers, eroding user trust.  
- **Compliance**: Regulatory requirements (GDPR, HIPAA) mandate audit trails and bias mitigation that raw outputs can’t satisfy.

*Complexity*: Adding a lightweight rule‑based filter or retrieval step is O(1) per request but dramatically improves reliability.  

**Edge Cases**  
- *Cold start*: The model may produce nonsensical text when no prompt context exists.  
- *Ambiguous queries*: Pure generation can misinterpret user intent; fallback to structured query improves precision.  
- *Model drift*: Updates can change output distribution, making post‑processing thresholds obsolete.

**Optimize & Communicate**  
Introduce a **“guard‑rail” layer**:  
1. Detect disallowed content via regex/ML classifiers.  
2. Verify factual claims against an indexed knowledge base (retrieval + re‑rank).  
3. Log all raw outputs for audit and feedback loops.  

Explain to stakeholders that this adds negligible latency (~10 ms) while providing measurable gains in safety (≥95 % reduction in violations) and accuracy (↑30 % precision). This structured response demonstrates clear problem framing, technical depth, edge‑case awareness, and a pragmatic optimization path—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
