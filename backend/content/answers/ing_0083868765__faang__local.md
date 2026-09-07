---
qid: ing_0083868765__faang__local
question: 'Explain: Write code to measure a tokenizer''s fertility across languages,
  and explain what you would do with the result.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 509
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:45:40-05:00'
sources: []
---

**Clarify**  
We want an empirical metric that tells how many token‑units a tokenizer produces per source word (fertility) for each language. Assume we have parallel corpora, a deterministic tokenizer, and access to the original tokenization (e.g., whitespace split). We’ll compute average fertility per sentence and aggregate by language.

**Approach**  
1. Load sentences in target language.  
2. Split on whitespace → `orig_tokens`.  
3. Tokenize with the model’s tokenizer → `tok_tokens`.  
4. Compute `fertility = len(tok_tokens) / len(orig_tokens)` for each sentence.  
5. Aggregate (mean, std) per language.

**Depth**  
```python
import numpy as np
from transformers import AutoTokenizer

def lang_fertility(sentences, tokenizer_name="bert-base-multilingual-cased"):
    tok = AutoTokenizer.from_pretrained(tokenizer_name)
    fertilities = []
    for s in sentences:
        orig = s.strip().split()
        if not orig: continue
        tkns = tok.tokenize(s)
        fertilities.append(len(tkns) / len(orig))
    return np.mean(fertilities), np.std(fertilities)

# Example usage
english_sentences = [...]
fr_sentences = [...]
print("EN", lang_fertility(english_sentences))
print("FR", lang_fertility(fr_sentences))
```
Complexity: O(N * L) where N is sentence count and L average length. Memory stays linear.

**Edge Cases**  
- Empty or single‑token sentences → skip to avoid division by zero.  
- Tokenizers that add special tokens (CLS/SEP) → strip them before counting.  
- Languages with no whitespace (e.g., Chinese) → use a pre‑segmenter or assume `orig_tokens` = list of characters.

**Optimize & Communicate**  
If fertility is high for a language, the tokenizer inflates input size, hurting speed and memory; we might switch to a subword tokenizer better suited for that script or adjust vocabulary. Low fertility indicates loss of granularity—potentially harmful for morphologically rich languages, prompting us to add more special tokens or use byte‑pair encoding. Reporting per‑language means lets product managers prioritize language‑specific optimizations and guide training data selection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
