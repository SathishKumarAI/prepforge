---
qid: ing_9b2cb71b3b__star__local
question: 'Explain: Signatures & Modules — Prompt Optimization Dspy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 300
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:42:38-05:00'
sources: []
---

**Situation:**  
At my last role, our data‑science team was building a conversational AI to triage customer support tickets. The model’s accuracy lagged behind the target—only 68% of queries were correctly classified within the first response.

**Task:**  
I had to redesign the prompt architecture so that the LLM could interpret context better and produce higher‑fidelity responses, all while keeping inference cost low for real‑time deployment.

**Action:**  
Using DSPy, I created a *signature* that defined the exact schema of the input (ticket text, priority tags) and the desired output format (resolution steps). Then I built reusable *modules*: a `TokenizerModule` to compress lengthy tickets into key phrases, an `IntentClassifier` module that wrapped a fine‑tuned BERT model, and a `ResponseGenerator` module that leveraged GPT‑4 with a carefully crafted prompt template. By chaining these modules in the signature’s workflow, I enforced type safety and allowed each component to be swapped independently for experimentation.

**Result:**  
After deploying the new pipeline, classification accuracy jumped to 86%, and response latency dropped by 30% due to efficient token handling. The exercise taught me how signatures enforce contract‑based design while modules enable modular, testable prompt engineering at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
