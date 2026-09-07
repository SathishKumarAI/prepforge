---
qid: ing_a246362a88__aws__local
question: 'Explain: Debugging assistance — How to use AI in Meta\u2019s AI-assisted
  coding interview (with real prompts and examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 386
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:31:54-05:00'
sources: []
---

**Situation** – While preparing for a Meta “AI‑assisted coding” interview, I needed to debug a recursive algorithm that was producing stack overflows on large inputs.  
**Task** – Reduce the runtime from O(2ⁿ) to O(n log n) and ensure the solution passes all hidden tests.

**Action** – I used **AWS CodeWhisperer** (an AI pair‑programmer) to analyze the function.  
1. Prompted: *“Explain why this recursion causes stack overflow for n>30.”*  
2. The model highlighted duplicated sub‑calls and suggested memoization.  
3. I added a `HashMap<Integer,Integer>` cache and rewrote the logic iteratively, then prompted: *“Validate that this DP version is O(n log n) and will not exceed 1 GB memory.”*  
4. CodeWhisperer generated unit tests and a performance benchmark using **AWS CloudWatch Logs Insights** to confirm <5 ms latency for n=10⁶.

**Result** – The refactored solution passed all Meta hidden tests, reduced runtime by **82%**, and cut memory usage from 512 MB to 48 MB.  
I documented the trade‑off: a small cache overhead versus significant speed gain, ensuring high availability (stateless Lambda execution) and cost efficiency (<$0.01 per invocation).

**Reflection** – This experience reinforced *Customer Obsession* (delivering fast, reliable code for the interviewee) and *Dive Deep* (understanding stack traces, algorithmic complexity). I learned that an AI assistant is a powerful tool when paired with rigorous validation—exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
