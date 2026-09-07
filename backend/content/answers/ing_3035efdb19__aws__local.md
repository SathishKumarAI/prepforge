---
qid: ing_3035efdb19__aws__local
question: What do temperature and top_p actually do, and how do you choose them per
  task?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 472
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:14:15-05:00'
sources: []
---

**Leadership Principles:** *Customer Obsession* & *Dive Deep*

**Situation / Task**  
When launching a real‑time chatbot for our retail platform (1 M monthly active users), I needed to balance naturalness with safety. The LLM used OpenAI’s GPT‑4; we had to tune **temperature** and **top_p** so that responses were both engaging and aligned with brand guidelines.

**Action**  
I first defined two personas: “Conversational” (high creativity) vs. “Professional” (safe, fact‑based). For each I ran a grid search on 500 prompts, recording BLEU scores, user satisfaction (NPS), and content‑flag rate.  

- **Temperature** controls randomness; lower values make outputs deterministic.  
- **Top_p** (nucleus sampling) limits the cumulative probability mass of token choices, effectively trimming low‑probability tails.

I discovered:
| Persona | Temp | Top_p | BLEU | NPS | Flag Rate |
|---------|------|-------|------|-----|-----------|
| Conversational | 0.9 | 0.95 | 0.42 | +12 | 1.8 % |
| Professional   | 0.4 | 0.80 | 0.38 | +5  | 0.3 % |

I deployed the “Professional” settings via **SageMaker Endpoint** with an autoscaling policy (min 2, max 10 instances) to keep latency <200 ms and cost <$0.02/req.

**Result**  
Post‑deployment NPS rose by 9 points, flagged content dropped 84 %, and we saved ~30 % on compute costs compared to a blanket high‑temperature approach.  

**Bar‑raiser takeaway**  
Showed ownership of the tuning loop, deep dive into metrics, quantified impact, and learning: “If I’d started with a higher top_p for safety, I’d have missed the 80 % probability mass that contains most user‑friendly tokens.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
