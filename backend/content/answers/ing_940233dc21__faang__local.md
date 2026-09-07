---
qid: ing_940233dc21__faang__local
question: When is prompt compression worth it, and how would you do it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 659
total_tokens: 895
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:28:31-05:00'
sources: []
---

**Clarify**  
Prompt compression refers to reducing the token count of a user’s input before feeding it to a language model (LLM).  The question asks: *When does the benefit outweigh the cost, and what practical techniques would you use?* I’ll assume we’re dealing with commercial LLMs where token limits are tight, costs scale linearly with tokens, and latency matters.

**Approach**  
1. Identify when compression is valuable (budget, quota, latency).  
2. Choose a compression strategy that preserves intent.  
3. Validate against quality metrics.  

**Depth**  
- **When to compress**:  
  * **Token‑budget constraints** – prompts > model’s max tokens or cost per token high.  
  * **Latency‐sensitive flows** – fewer tokens mean faster GPU throughput and lower queue times.  
  * **High‑frequency use cases** – small savings per call aggregate to large cost reductions.

- **Compression techniques**:  
  1. **Keyword/intent extraction** – parse the prompt, keep only nouns/adjectives that convey intent; drop filler words.  
  2. **Semantic paraphrasing** – use a smaller summarization model or rule‑based transformer to rewrite in fewer tokens while preserving meaning.  
  3. **Template substitution** – replace user‑specific details with placeholders (e.g., `[LOCATION]`) and supply them separately via context injection.  
  4. **Contextual chunking** – split long prompts into logical blocks, send only the most relevant block per inference.

- **Implementation sketch**:  
```python
def compress(prompt):
    # 1) Tokenize & POS tag
    tokens = tokenizer.tokenize(prompt)
    pos_tags = pos_tagger(tokens)
    # 2) Keep essential words
    essentials = [t for t,p in zip(tokens,pos_tags) if p in {'NN','JJ','VB'}]
    # 3) Re‑join, optionally paraphrase via lightweight summarizer
    compressed = ' '.join(essentials)
    return compress_with_summarizer(compressed)
```
Complexity: O(n) token operations; latency added by the summarizer (~10 ms on CPU). Trade‑off is minimal quality loss if intent extraction is accurate.

**Edge Cases**  
- **Highly technical or domain‑specific prompts** – keyword removal may drop critical jargon.  
- **Contextual dependencies** – compression might remove necessary pronouns, leading to hallucinations.  
- **User‑generated humor/irony** – paraphrasing could lose nuance.

Test by measuring BLEU/F1 against original outputs and user satisfaction scores.

**Optimize & Communicate**  
Iterate on the POS whitelist based on domain feedback; use reinforcement learning from human ratings to fine‑tune the summarizer. Communicate the trade‑off clearly: “We’re saving ~30 tokens (~$0.03 per call) at a <1% drop in response quality.” This structured reasoning demonstrates awareness of cost, latency, and user experience—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
