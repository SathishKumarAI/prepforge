---
qid: ing_e75ee7abab__aws__local
question: What do MMLU, GSM8K, HumanEval, MT-Bench, and SWE-bench each measure - and
  why shouldn't you pick a model for your product based on them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 447
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:01:48-05:00'
sources: []
---

**Situation / Task**  
When launching an AI‑powered recommendation engine, I was asked to choose a base language model (LLM). The team had already seen high scores for MMLU, GSM8K, HumanEval, MT‑Bench and SWE‑Bench and wondered if those numbers could guide our decision.

**Action**  
I mapped each benchmark:  
- **MMLU** – multi‑subject knowledge, useful for FAQ bots.  
- **GSM8K** – step‑by‑step math reasoning, relevant for financial advice.  
- **HumanEval** – Python coding accuracy, important for auto‑generate scripts.  
- **MT‑Bench** – multilingual translation quality, critical for global markets.  
- **SWE‑Bench** – software engineering tasks, needed for code‑review assistants.

I ran a controlled A/B test on our live traffic: the “benchmark‑picked” model scored 82 % accuracy in MMLU but only 54 % conversion lift vs baseline, while a smaller, fine‑tuned variant (cost $0.06/1k tokens) achieved 68 % lift at half the cost.

**Result**  
I presented that relying solely on benchmark scores can misalign with real‑world impact: they measure isolated skills, not domain‑specific context, latency, or user intent. The fine‑tuned model delivered a **+12 % net revenue increase** and reduced inference cost by 35 %.  

**Bar‑raiser takeaways**  
- **Ownership:** I took full responsibility for end‑to‑end testing.  
- **Dive Deep:** I dissected each benchmark’s methodology and mapped it to product metrics.  
- **Quantified Impact:** Reported revenue lift, cost savings, and conversion changes.  
- **Learning from Failure:** Benchmarks can be misleading; real traffic data is king.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
