---
qid: ing_a8be0d082e__think__local
question: 'Explain: Calculate usage — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 218
output_tokens: 457
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:11:31-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**

- *Goal*: Estimate daily/weekly/monthly usage (users, tweets, traffic) for a simplified Twitter‑style system.
- *Assumptions*:  
  - Average users per month (`U`), average tweets per user per day (`T_u`), data size per tweet (`S_t`), and network bandwidth per request (`B_r`).  
  - A fixed number of active users in a given period.

**2️⃣ Adopt a mental model**

- Break the problem into *user‑level* (who, how many) → *content‑level* (tweets, media) → *traffic‑level* (requests, data transfer).  
- Use simple arithmetic: `Total = Users × Metric per User`.  
- Keep units consistent (seconds, bytes, requests).

**3️⃣ Step‑by‑step reasoning**

1. **Users**: Choose a target number of active users (`U`).  
2. **Tweet volume**: Multiply by daily tweets per user → `DailyTweets = U × T_u`.  
3. **Storage**: `TotalStorage = DailyTweets × S_t` (bytes).  
4. **Traffic**: Estimate API calls per tweet (e.g., 5 requests) → `APIRequests = DailyTweets × 5`.  
5. **Bandwidth**: `DailyBandwidth = APIRequests × B_r`.  
6. **Scale for weeks/months** by multiplying with days in period.

**4️⃣ Common traps**

- Mixing units (bytes vs. megabytes).  
- Forgetting to include read vs. write traffic.  
- Overlooking caching or CDN off‑loads which reduce raw bandwidth.

**5️⃣ Sanity‑check & communicate**

- Verify numbers against known benchmarks (e.g., Twitter’s 500M tweets/day → ~30 GB data).  
- Present results in a table: users, tweets, storage, requests, bandwidth.  
- Highlight assumptions so stakeholders can adjust parameters easily.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
