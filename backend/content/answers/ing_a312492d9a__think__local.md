---
qid: ing_a312492d9a__think__local
question: 'Explain: LLM-as-Judge — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 478
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:51:20-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- *Ask*: “Explain: LLM-as-Judge – LLM Evaluation.”  
- Assume the reader knows what an LLM is but not the specific evaluation paradigm.  
- Define “judge” as a role that rates or classifies outputs, and “LLM evaluation” as measuring model quality via human‑like metrics.

**2️⃣ Choose a mental framework**  
Use the *problem → method → outcome* triad:  
1. Problem: how to let an LLM act like a critic/judge.  
2. Method: prompt design, scoring schema, calibration, feedback loop.  
3. Outcome: trustworthy, reproducible evaluation scores.

**3️⃣ Step‑by‑step reasoning**  
- **Prompt engineering**: craft prompts that explicitly ask the model to assess quality (e.g., “Rate this answer from 1–5 on factual accuracy”).  
- **Scoring schema**: decide discrete vs. continuous, include rubrics (accuracy, relevance, style).  
- **Calibration**: compare LLM judgments against a small human‑annotated set; adjust thresholds or bias terms.  
- **Iteration**: feed back errors to fine‑tune the evaluation prompts or the model itself.  
- **Aggregation**: average across multiple runs to reduce variance.

**4️⃣ Common traps to avoid**  
- *Over‑trusting raw scores*: LLMs can be self‑confident yet wrong.  
- *Prompt ambiguity*: vague instructions lead to inconsistent judgments.  
- *Circular evaluation*: using the same model that generated content as judge introduces bias.  
- *Ignoring domain specificity*: a generic rubric may miss nuances in specialized fields.

**5️⃣ Sanity checks & communication**  
- Verify by comparing LLM scores with human benchmarks on a held‑out set.  
- Explain the process aloud: “We first ask the model to rate its own output, then we calibrate those ratings against ground truth, and finally we average across multiple runs to get a stable score.”  
- Highlight limitations (bias, variance) before presenting results.

This structured approach ensures that *LLM-as-Judge* evaluations are transparent, reproducible, and as reliable as possible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
