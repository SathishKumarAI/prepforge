---
qid: ing_a35d6d19a6__think__local
question: What is the difference between reference-based and reference-free evaluation,
  and why do BLEU, ROUGE and exact match fail on LLM output?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 498
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:52:26-05:00'
sources: []
---

**1. Clarify the question & set assumptions**  
- *What exactly* is meant by “reference‑based” vs. “reference‑free”?  
- Assume we’re talking about automatic metrics for language generation (e.g., summarization, translation).  
- Identify that BLEU, ROUGE and exact match are classic reference‑based scores.  
- Assume LLM outputs can be diverse, creative, or even correct without matching a single reference.

**2. Adopt a mental model of evaluation**  
- Think of evaluation as measuring *quality* (fluency, adequacy, relevance).  
- Reference‑based metrics compare an output to one or more *gold* texts; they rely on overlap.  
- Reference‑free metrics aim to judge quality without a gold standard, often using proxy signals (language models, semantic similarity, human judgments).

**3. Step‑by‑step reasoning toward the answer**  
1. Explain reference‑based: “We compute n‑gram overlap with a reference.”  
2. Explain reference‑free: “We evaluate properties of the text itself or its semantic content without needing a fixed target.”  
3. Show why BLEU/ROUGE fail on LLM output:  
   - They penalize novel phrasing that is still correct.  
   - LLMs generate many valid paraphrases; overlap can be low.  
   - Exact match fails because any deviation from the reference, even a minor word change, gives zero score.  
4. Conclude by highlighting the need for reference‑free or hybrid metrics (e.g., BERTScore, GPT‑based reward models) for modern LLMs.

**4. Common traps to avoid**  
- Don’t conflate *accuracy* with *overlap*.  
- Avoid assuming all “good” outputs will match a single reference.  
- Be careful not to overstate that reference‑free metrics are perfect; they have their own biases.

**5. Sanity‑check & communicate**  
- Re‑read the explanation: does it cover both types of evaluation and why overlap‑based scores miss LLM diversity?  
- Summarize in one sentence: “BLEU/ROUGE rely on exact n‑gram matches, so they penalise valid LLM outputs that use different wording; reference‑free metrics evaluate semantics or fluency directly.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
