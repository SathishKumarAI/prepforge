---
qid: ing_05b60c37a9__faang__local
question: What are MQA and GQA, and why do they exist?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 411
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:57:33-05:00'
sources: []
---

**Clarify**  
The interviewer asks about **MQA (Maximum Query Accuracy)** and **GQA (General Question‑Answering)** in the context of AI language models. I’ll confirm that they refer to evaluation benchmarks for open‑domain QA systems, not internal model names.

**Approach**  
1. Define each term succinctly.  
2. Explain why separate metrics exist: differing goals (precision vs breadth).  
3. Highlight practical implications for system design and deployment.

**Depth**  
- **MQA** measures the *accuracy* of a model on a curated set of difficult, high‑stakes queries (e.g., medical or legal questions). It rewards precise, factually correct answers with minimal hallucination.  
- **GQA** evaluates *coverage and robustness* across a wide range of everyday topics, often using crowd‑sourced prompts that test reasoning, commonsense, and language understanding.

They exist because the industry needs both:  
1. **Safety & trust** – MQA ensures models are reliable when users rely on them for critical decisions.  
2. **Utility & user satisfaction** – GQA captures how well a model performs in real‑world conversational settings where breadth matters more than absolute precision.

**Edge cases**  
- MQA may penalize useful but slightly imprecise answers; GQA can over‑reward plausible hallucinations.  
- Test with domain‑specific vs general prompts, and measure hallucination rates.

**Optimize & communicate**  
Future models could combine a *dual‑head* architecture: one head tuned for MQA (strict confidence thresholds) and another for GQA (flexible reasoning). Communicating these trade‑offs to stakeholders involves showing ROC curves for each metric and explaining the downstream impact on user trust versus engagement. This dual‑metric strategy aligns with FAANG’s focus on both safety and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
