---
qid: ing_0fc355affc__think__local
question: 'Explain: Walk me through the taxonomy of evaluation methods for LLM systems
  and when you''d use each.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 475
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:45:16-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
   *Assume “LLM” means large language models used in production (chatbots, assistants, etc.).*  
   - Ask whether the focus is on *intrinsic* (model‑level) vs. *extrinsic* (system‑level) evaluation.  
   - Determine if we’re evaluating *text generation quality*, *task performance*, or *user experience*.  

**2. Mental model / taxonomy framework**  
   Group methods into three layers:  
   1. **Intrinsic metrics** – direct measurement on model outputs (BLEU, ROUGE, perplexity, F1).  
   2. **Extrinsic metrics** – how the model performs within a downstream task (accuracy, success rate, BLEU‑in‑context).  
   3. **Human‑centric metrics** – usability, safety, alignment (user satisfaction surveys, A/B tests, toxicity scores).  

**3. Step‑by‑step reasoning toward answer**  
   - Start with intrinsic: explain why perplexity captures fluency but not task relevance.  
   - Move to extrinsic: illustrate using a QA or summarization benchmark; show how domain‑specific metrics (e.g., MRR for retrieval) matter.  
   - Finish with human‑centric: discuss when you need real users, e.g., safety audits, deployment rollouts.  
   - For each layer, list typical tools and trade‑offs (speed vs. insight).  

**4. Common traps to avoid**  
   - Confusing *accuracy* with *relevance*.  
   - Over‑relying on BLEU/ROUGE for open‑ended generation.  
   - Ignoring the “no‑free‑lunch” theorem: a high intrinsic score doesn’t guarantee good user experience.  

**5. Sanity‑check & verbalize**  
   - Verify that each metric’s purpose matches the evaluation goal.  
   - Check that you’re not recommending an extrinsic benchmark for a purely safety audit.  
   - Summarize: “Use intrinsic for quick model tuning, extrinsic to prove task gains, human metrics to validate real‑world impact.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
