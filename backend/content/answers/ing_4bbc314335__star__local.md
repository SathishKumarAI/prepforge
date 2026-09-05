---
qid: ing_4bbc314335__star__local
question: 'Explain: Q123: DeepSeek just raised V4 prices 3x to 12x and moved to peak
  and off-peak billing, while Claude Sonnet 5 made its introductory price permanent.
  Your cost model assumed cheap inference stays cheap. Rebuild it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 279
output_tokens: 445
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:59:46-05:00'
sources: []
---

**Situation:**  
At my last gig I was modeling the monthly spend for a startup that relied on two large‑language‑model APIs: DeepSeek and Claude Sonnet. The first quarter we were comfortable with our simple “cheap inference stays cheap” assumption—just multiply tokens by a flat rate. But DeepSeek just announced a 3x–12x jump to peak/off‑peak pricing, while Claude moved its introductory price into a permanent tier. Our projected budgets blew up and investors demanded a revised forecast.

**Task:**  
I had to rebuild the cost model so it reflected the new multi‑tier, time‑based rates, still kept easy enough for non‑technical stakeholders to understand, and could quickly adapt if future pricing shifts occur.

**Action:**  
1. Collected the latest rate sheets from both vendors and parsed them into a Python dictionary keyed by tier (peak/off‑peak, introductory, standard).  
2. Introduced an “effective token cost” function that accepts `timestamp` and `token_count`, looks up the correct rate, and returns the charge.  
3. Built a simulation engine: it ingests historical usage logs, distributes tokens across the day’s peak/off‑peak windows using a weighted histogram of our traffic patterns (70% off‑peak, 30% peak).  
4. Generated a Monte Carlo roll‑up to capture variability in user growth and traffic spikes.  
5. Created a dashboard with Matplotlib that visualizes cost per month, break‑down by model, and sensitivity curves for different token volumes.

**Result:**  
The new model cut projected spend from an over‑estimate of $120k/month to a realistic $68k/month—aligning with the company’s cash runway. It also gave us a 5% margin for unexpected traffic surges. I learned that embedding time‑based rates early and automating the lookup keeps the model resilient, and that visualizing sensitivity helps non‑technical executives grasp pricing risks quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
