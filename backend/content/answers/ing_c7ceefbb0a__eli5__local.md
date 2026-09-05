---
qid: ing_c7ceefbb0a__eli5__local
question: 'Explain: Parallel Extractors vs Single-Pass — Document Intelligence'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 220
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:52:16-05:00'
sources: []
---

Imagine you’re sorting a huge pile of letters that need to be read and answered.  
**Single‑pass** is like reading each letter once, deciding what it says, and then moving on. You only get the information that fits your first pass—if a letter contains several topics, you might miss some unless you go back.

**Parallel extractors** are like having multiple people in different rooms, each trained to spot a specific type of detail (e.g., names, dates, addresses). All work at once on every letter. Because they specialize and run together, the whole team pulls out all relevant bits faster and with fewer mistakes than one person doing everything in a single sweep.

*Unavoidable terms:*  
- **Parallel extractors**: separate models that each look for a particular kind of information simultaneously.  
- **Single‑pass**: one model that processes every document only once, trying to capture everything in that single run.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
