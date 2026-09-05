---
qid: ing_d5c5583cb6__eli5__local
question: You join as a staff engineer. The team ships prompt changes on vibes, has
  no evals, and as far as they can tell is shipping fine. What do you do in your first
  90 days?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 307
total_tokens: 496
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:13:26-05:00'
sources: []
---

Imagine the team’s prompt system is a garden that keeps blooming by instinct alone—no gardener checks whether each plant actually thrives or if weeds sneak in. As the new staff engineer, your first 90 days are like learning how to become that careful gardener.

**Day 1‑30: Get the soil and tools.**  
- Map out every prompt “seed” and its purpose (define *prompt*, *evaluation*).  
- Talk with developers and users to see what “good vibes” mean in real work.  
- Install a simple test suite that can run each prompt and record its output.

**Day 31‑60: Plant the first trial beds.**  
- Pick one or two high‑impact prompts, add quick metrics (accuracy, latency).  
- Run them side‑by‑side with current versions; compare results in plain charts.  
- If they perform better, let the team see the numbers.

**Day 61‑90: Scale the garden.**  
- Build a lightweight dashboard that shows every prompt’s health over time.  
- Set up alerts for sudden drops (like a wilting flower).  
- Encourage the team to ship changes only after a quick “health check,” turning instinct into evidence.

By the end, the team will have a clear view of which prompts truly work—just like a gardener who knows exactly why each plant thrives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
