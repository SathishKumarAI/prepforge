---
qid: ing_60409f36cf__think__local
question: 'Explain: Faithfulness Evaluation — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 511
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:22:56-05:00'
sources: []
---

### 1️⃣ Clarify the Goal & Assumptions  
- **What is “faithfulness”?** — the extent a language model’s output accurately reflects its source or training data, not hallucinating facts.  
- **Scope of evaluation:** we’re interested in *LLM* outputs (text generation) and how to judge them against ground truth.  
- Assume we have reference documents or a knowledge base, and we can run the LLM on prompts that should elicit factual statements.

### 2️⃣ Adopt an Evaluation Framework  
- **Human‑in‑the‑loop vs automatic metrics**: decide if we’ll rely on annotators or purely algorithmic checks.  
- **Define criteria**: correctness (does the claim match evidence?), completeness (are all necessary details present?), and consistency (no contradictory facts).  
- Use a *confidence–score* system: high confidence for verified claims, low for uncertain.

### 3️⃣ Step‑by‑Step Reasoning  
1. **Generate output** from the LLM on a prompt.  
2. **Identify factual assertions** in the text (e.g., noun‑phrase + verb + object).  
3. **Retrieve evidence**: query the reference corpus or an external knowledge base for each assertion.  
4. **Compare claim vs evidence**: exact match, paraphrase detection, or semantic similarity thresholds.  
5. **Assign a faithfulness score** per claim and aggregate (mean/median).  
6. **Flag hallucinations** where no supporting evidence is found.

### 4️⃣ Avoid Common Traps  
- Don’t treat *no‑evidence* as automatically false; the model might be citing unknown facts.  
- Beware of **over‑strict thresholds** that penalize legitimate paraphrases or synonyms.  
- Remember **context leakage**: if the prompt contains the answer, faithfulness is trivial.

### 5️⃣ Sanity‑Check & Communicate Results  
- Spot‑check a random sample manually to confirm automatic judgments align with human intuition.  
- Report metrics clearly (e.g., “Faithfulness precision = 0.78, recall = 0.65”).  
- Provide qualitative examples: one faithful answer and one hallucinated for illustration.

By following this structured process—clarify goals, choose a framework, reason systematically, avoid pitfalls, and validate—you can robustly evaluate an LLM’s faithfulness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
